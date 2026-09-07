<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Models\Service;
use App\Models\PortfolioItem;
use App\Models\Inquiry;
use App\Models\Setting;
use App\Models\TeamMember;

// -------------------------------------------------------------
// Public Agency Frontend Routes
// -------------------------------------------------------------

Route::get('/', function () {
    return Inertia::render('Frontend/Home', [
        'services' => Service::where('is_featured', true)->get(),
        'portfolio' => PortfolioItem::where('is_featured', true)->get(),
    ]);
});

Route::get('/services', function () {
    return Inertia::render('Frontend/Services', [
        'services' => Service::all(),
    ]);
});

Route::get('/portfolio', function () {
    return Inertia::render('Frontend/Portfolio', [
        'portfolio' => PortfolioItem::all(),
    ]);
});

Route::get('/about', function () {
    return Inertia::render('Frontend/About', [
        'teamMembers' => TeamMember::orderBy('order', 'asc')->get(),
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Frontend/Contact');
});

Route::post('/contact', function (Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'phone' => 'nullable|string|max:50',
        'service_requested' => 'nullable|string|max:255',
        'message' => 'required|string',
    ]);

    Inquiry::create($validated);

    return redirect()->back()->with('success', 'Thank you! Your message has been received. Our team will get in touch with you shortly.');
});

// -------------------------------------------------------------
// Admin Authentication Routes
// -------------------------------------------------------------

Route::middleware('guest')->group(function () {
    Route::get('/admin/login', function () {
        return Inertia::render('Admin/Login');
    })->name('login');

    Route::post('/admin/login', function (Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/admin/dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    });
});

// -------------------------------------------------------------
// Protected Admin Backoffice CRUD Routes
// -------------------------------------------------------------

Route::middleware('auth')->group(function () {

    Route::post('/admin/logout', function (Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/admin/login');
    });

    // Dashboard Overview
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard', [
            'auth' => [
                'user' => Auth::user(),
            ],
            'totalInquiries' => Inquiry::count(),
            'activeProjects' => PortfolioItem::count(),
            'servicesCount' => Service::count(),
            'teamMembersCount' => TeamMember::count(),
            'recentInquiries' => Inquiry::latest()->get(),
            'servicesList' => Service::latest()->get(),
            'portfolioList' => PortfolioItem::latest()->get(),
            'teamMembersList' => TeamMember::orderBy('order', 'asc')->get(),
        ]);
    });

    // Admin Profile & Password Update Routes
    Route::post('/admin/profile', function (Request $request) {
        $user = Auth::user();
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id,
        ]);

        $user->update($validated);

        return redirect()->back()->with('success', 'Admin profile info updated successfully!');
    });

    Route::post('/admin/profile/password', function (Request $request) {
        $validated = $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:6|confirmed',
        ]);

        $user = Auth::user();

        if (!Hash::check($validated['current_password'], $user->password)) {
            return back()->withErrors(['current_password' => 'The current password provided is incorrect.']);
        }

        $user->update([
            'password' => Hash::make($validated['new_password']),
        ]);

        return redirect()->back()->with('success', 'Admin password changed successfully!');
    });

    // Settings CRUD
    Route::post('/admin/settings', function (Request $request) {
        $validated = $request->validate([
            'company_name' => 'required|string|max:255',
            'company_logo' => 'required|string',
            'tagline' => 'nullable|string|max:255',
            'contact_email' => 'nullable|email|max:255',
            'contact_phone' => 'nullable|string|max:50',
            'address' => 'nullable|string|max:255',
        ]);

        foreach ($validated as $key => $value) {
            Setting::updateOrCreate(['key' => $key], ['value' => $value ?? '']);
        }

        return redirect()->back()->with('success', 'Company branding and settings updated successfully!');
    });

    // Inquiries CRUD
    Route::post('/admin/inquiries/{id}/status', function (Request $request, $id) {
        $inquiry = Inquiry::findOrFail($id);
        $inquiry->update(['status' => $request->input('status', 'Completed')]);
        return redirect()->back()->with('success', 'Inquiry status updated successfully.');
    });

    Route::delete('/admin/inquiries/{id}', function ($id) {
        Inquiry::findOrFail($id)->delete();
        return redirect()->back()->with('success', 'Inquiry deleted successfully.');
    });

    // Team Members CRUD
    Route::post('/admin/team-members', function (Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'designation' => 'required|string|max:255',
            'photo_url' => 'nullable|string',
            'description' => 'nullable|string',
            'order' => 'nullable|integer',
        ]);

        TeamMember::create([
            'name' => $validated['name'],
            'designation' => $validated['designation'],
            'photo_url' => $validated['photo_url'] ?? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80&fit=crop',
            'description' => $validated['description'] ?? '',
            'order' => $validated['order'] ?? 0,
        ]);

        return redirect()->back()->with('success', 'Team member added successfully!');
    });

    Route::put('/admin/team-members/{id}', function (Request $request, $id) {
        $member = TeamMember::findOrFail($id);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'designation' => 'required|string|max:255',
            'photo_url' => 'nullable|string',
            'description' => 'nullable|string',
            'order' => 'nullable|integer',
        ]);

        $member->update($validated);

        return redirect()->back()->with('success', 'Team member updated successfully!');
    });

    Route::delete('/admin/team-members/{id}', function ($id) {
        TeamMember::findOrFail($id)->delete();
        return redirect()->back()->with('success', 'Team member deleted successfully.');
    });

    // Services CRUD
    Route::post('/admin/services', function (Request $request) {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'description' => 'required|string',
            'features' => 'nullable|string',
            'icon' => 'nullable|string',
        ]);

        $featuresArray = !empty($validated['features'])
            ? array_map('trim', explode(',', $validated['features']))
            : [];

        Service::create([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']) . '-' . rand(100, 999),
            'icon' => $validated['icon'] ?? 'code',
            'short_description' => $validated['short_description'],
            'description' => $validated['description'],
            'features' => $featuresArray,
            'is_featured' => true,
        ]);

        return redirect()->back()->with('success', 'New Service created successfully!');
    });

    Route::put('/admin/services/{id}', function (Request $request, $id) {
        $service = Service::findOrFail($id);
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'description' => 'required|string',
            'features' => 'nullable|string',
        ]);

        $featuresArray = is_array($validated['features'])
            ? $validated['features']
            : (!empty($validated['features']) ? array_map('trim', explode(',', $validated['features'])) : []);

        $service->update([
            'title' => $validated['title'],
            'short_description' => $validated['short_description'],
            'description' => $validated['description'],
            'features' => $featuresArray,
        ]);

        return redirect()->back()->with('success', 'Service updated successfully!');
    });

    Route::delete('/admin/services/{id}', function ($id) {
        Service::findOrFail($id)->delete();
        return redirect()->back()->with('success', 'Service deleted successfully.');
    });

    // Portfolio CRUD
    Route::post('/admin/portfolio', function (Request $request) {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'client_name' => 'nullable|string|max:255',
            'summary' => 'required|string',
            'image_url' => 'nullable|string',
        ]);

        PortfolioItem::create([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']) . '-' . rand(100, 999),
            'category' => $validated['category'],
            'client_name' => $validated['client_name'] ?? 'Agency Client',
            'summary' => $validated['summary'],
            'image_url' => $validated['image_url'] ?? '/assets/imgs/pages/img-5.webp',
            'is_featured' => true,
        ]);

        return redirect()->back()->with('success', 'Portfolio project created successfully!');
    });

    Route::put('/admin/portfolio/{id}', function (Request $request, $id) {
        $item = PortfolioItem::findOrFail($id);
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'client_name' => 'nullable|string|max:255',
            'summary' => 'required|string',
        ]);

        $item->update($validated);

        return redirect()->back()->with('success', 'Portfolio project updated successfully!');
    });

    Route::delete('/admin/portfolio/{id}', function ($id) {
        PortfolioItem::findOrFail($id)->delete();
        return redirect()->back()->with('success', 'Portfolio project deleted successfully.');
    });

});
