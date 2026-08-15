<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AgencySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->truncate();
        DB::table('services')->truncate();
        DB::table('portfolio_items')->truncate();
        DB::table('inquiries')->truncate();
        DB::table('settings')->truncate();

        User::create([
            'name' => 'Agency Administrator',
            'email' => 'admin@360creative.com',
            'password' => Hash::make('password123'),
        ]);

        DB::table('settings')->insert([
            ['key' => 'company_name', 'value' => 'Creative Agency', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'company_logo', 'value' => '/images/logo.png', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'tagline', 'value' => 'Development, Video Editing, Graphic Design & Social Media Management', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'contact_email', 'value' => 'info@360creativeagency.ca', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'contact_phone', 'value' => '+1 416 836 7311', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'address', 'value' => '85 Dickson Hill Rd, Markham, ON L3P 3J3', 'created_at' => now(), 'updated_at' => now()],
        ]);

        DB::table('services')->insert([
            [
                'title' => 'Web & App Development',
                'slug' => 'web-app-development',
                'icon' => 'code',
                'short_description' => 'Scalable websites, custom SaaS portals, and cross-platform iOS & Android mobile applications.',
                'description' => 'Full-stack software engineering for web and mobile platforms using Laravel, React, Next.js, and mobile app frameworks.',
                'features' => json_encode(['Custom Web & Mobile Apps', 'React & Laravel Engineering', 'Cross-Platform App Development', 'Database & Cloud Hosting']),
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Video Editing & Motion Design',
                'slug' => 'video-editing-motion',
                'icon' => 'video',
                'short_description' => 'High-impact video editing, promotional commercials, social media reels, and 2D/3D motion graphics.',
                'description' => 'Professional post-production, color grading, sound design, and engaging visual effects to make your brand content stand out.',
                'features' => json_encode(['Social Media Reels & Shorts', 'Commercial & Promo Editing', '2D & 3D Motion Graphics', 'Professional Color & Audio Tuning']),
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Graphic Design & Branding',
                'slug' => 'graphic-design-branding',
                'icon' => 'palette',
                'short_description' => 'Pixel-perfect UI/UX design, visual identity systems, brand logos, marketing banners, and ad creative.',
                'description' => 'Stunning visual assets, brand style guides, website interfaces, and marketing artwork that capture attention.',
                'features' => json_encode(['UI/UX App & Web Design', 'Brand Logo & Style Guides', 'Marketing Creatives & Banners', 'Social Media Graphic Assets']),
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Social Media Management',
                'slug' => 'social-media-management',
                'icon' => 'share-2',
                'short_description' => 'End-to-end account management, content strategy, post scheduling, and audience growth across platforms.',
                'description' => 'We curate, schedule, and manage your brand handles (Instagram, Facebook, Twitter, LinkedIn) with high-converting posts.',
                'features' => json_encode(['Content Strategy & Calendar', 'Daily Post & Reel Scheduling', 'Account Engagement & Growth', 'Analytics & Monthly Performance Reports']),
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        DB::table('portfolio_items')->insert([
            [
                'title' => 'UHF Cloud Portal & App',
                'slug' => 'uhf-cloud-portal',
                'category' => 'Web & App Development',
                'image_url' => '/assets/imgs/pages/img-5.webp',
                'client_name' => 'UHF Solutions',
                'summary' => 'Full-stack enterprise application and mobile platform with real-time analytics and user management.',
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Brand Motion Commercial',
                'slug' => 'brand-motion-commercial',
                'category' => 'Video Editing',
                'image_url' => '/assets/imgs/pages/img-6.webp',
                'client_name' => 'Nova Stream',
                'summary' => 'Cinematic promo video editing with dynamic 3D motion graphics and custom sound design.',
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'SaaS Product UI/UX & Brand Kit',
                'slug' => 'saas-product-ui-ux',
                'category' => 'Graphic Design',
                'image_url' => '/assets/imgs/pages/img-7.webp',
                'client_name' => 'OmniDesk',
                'summary' => 'Complete visual redesign, dark-mode design system, and marketing graphic collateral.',
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Global Brand Social Campaign',
                'slug' => 'global-brand-social-campaign',
                'category' => 'Social Media Handling',
                'image_url' => '/assets/imgs/pages/img-8.webp',
                'client_name' => 'AeroFit',
                'summary' => 'Full social media content creation, daily reel management, and 300% growth strategy.',
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        DB::table('inquiries')->insert([
            [
                'name' => 'Sarah Johnson',
                'email' => 'sarah@techlead.io',
                'phone' => '+1 (555) 234-5678',
                'service_requested' => 'Web & App Development',
                'message' => 'Looking to build a custom application with web and mobile platforms.',
                'status' => 'New',
                'created_at' => now()->subHours(3),
                'updated_at' => now()->subHours(3),
            ],
            [
                'name' => 'Michael Chen',
                'email' => 'michael@innovatecorp.com',
                'phone' => '+1 (555) 876-5432',
                'service_requested' => 'Social Media Management',
                'message' => 'Need monthly social media content creation, video reels editing, and account handling.',
                'status' => 'In Progress',
                'created_at' => now()->subDay(),
                'updated_at' => now()->subDay(),
            ],
        ]);
    }
}
