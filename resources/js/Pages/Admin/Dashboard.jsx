import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';

export default function Dashboard({
  auth,
  totalInquiries = 0,
  activeProjects = 0,
  servicesCount = 0,
  recentInquiries = [],
  servicesList = [],
  portfolioList = []
}) {
  const { flash, settings: sharedSettings } = usePage().props;
  const [activeTab, setActiveTab] = useState('inquiries');

  // Settings Form State
  const [settingsForm, setSettingsForm] = useState({
    company_name: sharedSettings?.company_name || '360 Creative Agency',
    company_logo: sharedSettings?.company_logo || '/assets/imgs/logo.png',
    tagline: sharedSettings?.tagline || 'Digital Experiences, Branding & Software Engineering',
    contact_email: sharedSettings?.contact_email || 'info@360creativeagency.ca',
    contact_phone: sharedSettings?.contact_phone || '+1 (555) 360-3600',
    address: sharedSettings?.address || '100 Innovation Way, Suite 360, Tech City',
  });

  // Service Form State
  const [serviceForm, setServiceForm] = useState({
    id: null,
    title: '',
    slug: '',
    icon: 'code',
    short_description: '',
    description: '',
    features: 'Custom API Architecture, React SPA, Cloud Hosting',
    is_featured: true,
  });
  const [isEditingService, setIsEditingService] = useState(false);

  // Portfolio Form State
  const [portfolioForm, setPortfolioForm] = useState({
    id: null,
    title: '',
    slug: '',
    category: 'Web App',
    image_url: '/assets/imgs/pages/img-5.webp',
    client_name: '',
    summary: '',
    is_featured: true,
  });
  const [isEditingPortfolio, setIsEditingPortfolio] = useState(false);

  // Handlers
  const handleLogout = () => {
    router.post('/admin/logout');
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    router.post('/admin/settings', settingsForm);
  };

  const handleUpdateInquiryStatus = (id, newStatus) => {
    router.post(`/admin/inquiries/${id}/status`, { status: newStatus });
  };

  const handleDeleteInquiry = (id) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      router.delete(`/admin/inquiries/${id}`);
    }
  };

  const handleSaveService = (e) => {
    e.preventDefault();
    if (isEditingService && serviceForm.id) {
      router.put(`/admin/services/${serviceForm.id}`, serviceForm, {
        onSuccess: () => resetServiceForm(),
      });
    } else {
      router.post('/admin/services', serviceForm, {
        onSuccess: () => resetServiceForm(),
      });
    }
  };

  const handleEditService = (service) => {
    setServiceForm({
      id: service.id,
      title: service.title,
      slug: service.slug,
      icon: service.icon || 'code',
      short_description: service.short_description,
      description: service.description,
      features: Array.isArray(service.features) ? service.features.join(', ') : service.features || '',
      is_featured: service.is_featured,
    });
    setIsEditingService(true);
    setActiveTab('services');
  };

  const handleDeleteService = (id) => {
    if (confirm('Are you sure you want to delete this service?')) {
      router.delete(`/admin/services/${id}`);
    }
  };

  const resetServiceForm = () => {
    setServiceForm({
      id: null,
      title: '',
      slug: '',
      icon: 'code',
      short_description: '',
      description: '',
      features: 'Custom API Architecture, React SPA, Cloud Hosting',
      is_featured: true,
    });
    setIsEditingService(false);
  };

  const handleSavePortfolio = (e) => {
    e.preventDefault();
    if (isEditingPortfolio && portfolioForm.id) {
      router.put(`/admin/portfolio/${portfolioForm.id}`, portfolioForm, {
        onSuccess: () => resetPortfolioForm(),
      });
    } else {
      router.post('/admin/portfolio', portfolioForm, {
        onSuccess: () => resetPortfolioForm(),
      });
    }
  };

  const handleEditPortfolio = (item) => {
    setPortfolioForm({
      id: item.id,
      title: item.title,
      slug: item.slug,
      category: item.category,
      image_url: item.image_url,
      client_name: item.client_name || '',
      summary: item.summary,
      is_featured: item.is_featured,
    });
    setIsEditingPortfolio(true);
    setActiveTab('portfolio');
  };

  const handleDeletePortfolio = (id) => {
    if (confirm('Are you sure you want to delete this portfolio project?')) {
      router.delete(`/admin/portfolio/${id}`);
    }
  };

  const resetPortfolioForm = () => {
    setPortfolioForm({
      id: null,
      title: '',
      slug: '',
      category: 'Web App',
      image_url: '/assets/imgs/pages/img-5.webp',
      client_name: '',
      summary: '',
      is_featured: true,
    });
    setIsEditingPortfolio(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#090d16', color: '#f1f5f9', minHeight: '100vh', padding: '2rem' }}>
      <Head title={`SmartAdmin - ${sharedSettings?.company_name || '360 Creative Agency'}`} />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#131b2e', padding: '1.25rem 2rem', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src={sharedSettings?.company_logo || '/assets/imgs/logo.png'} alt="Logo" style={{ height: '42px', width: 'auto' }} />
            <div>
              <h1 style={{ fontSize: '1.4rem', margin: 0, fontWeight: 'bold', color: '#38bdf8' }}>
                {sharedSettings?.company_name || '360 Creative Agency'} Console
              </h1>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Signed in as <strong>{auth?.user?.name || 'Administrator'}</strong>
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '600', padding: '0.5rem 1rem', background: '#0f172a', borderRadius: '8px', border: '1px solid #334155' }}>
              🌐 Public Website
            </Link>
            <button
              onClick={handleLogout}
              style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
            >
              Sign Out
            </button>
          </div>
        </header>

        {flash?.success && (
          <div style={{ background: '#064e3b', color: '#6ee7b7', border: '1px solid #047857', padding: '1rem 1.5rem', borderRadius: '8px', marginBottom: '1.5rem', fontWeight: '600' }}>
            ✓ {flash.success}
          </div>
        )}

        {/* Top Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#131b2e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Inquiries</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, color: '#38bdf8' }}>{totalInquiries}</p>
          </div>

          <div style={{ background: '#131b2e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio Projects</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, color: '#a855f7' }}>{activeProjects}</p>
          </div>

          <div style={{ background: '#131b2e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Services</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, color: '#34d399' }}>{servicesCount}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #1e293b', marginBottom: '2rem', paddingBottom: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('inquiries')}
            style={{
              background: activeTab === 'inquiries' ? '#0284c7' : 'transparent',
              color: activeTab === 'inquiries' ? 'white' : '#94a3b8',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}
          >
            📬 Inquiries ({totalInquiries})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            style={{
              background: activeTab === 'services' ? '#0284c7' : 'transparent',
              color: activeTab === 'services' ? 'white' : '#94a3b8',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}
          >
            ⚙️ Services CRUD ({servicesCount})
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            style={{
              background: activeTab === 'portfolio' ? '#0284c7' : 'transparent',
              color: activeTab === 'portfolio' ? 'white' : '#94a3b8',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}
          >
            🎨 Portfolio CRUD ({activeProjects})
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            style={{
              background: activeTab === 'settings' ? '#0284c7' : 'transparent',
              color: activeTab === 'settings' ? 'white' : '#94a3b8',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}
          >
            🏢 Dynamic Branding & Settings
          </button>
        </div>

        {/* TAB 1: INQUIRIES MANAGEMENT */}
        {activeTab === 'inquiries' && (
          <div style={{ background: '#131b2e', borderRadius: '12px', border: '1px solid #1e293b', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', margin: '0 0 1.25rem 0', fontWeight: 'bold', color: '#f8fafc' }}>
              Client Leads & Inquiries
            </h2>

            {recentInquiries.length === 0 ? (
              <p style={{ color: '#94a3b8' }}>No inquiries submitted yet.</p>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #1e293b', color: '#64748b' }}>
                      <th style={{ padding: '0.75rem 1rem' }}>Client Name</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Email / Phone</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Service Requested</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Message</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentInquiries.map((inq) => (
                      <tr key={inq.id} style={{ borderBottom: '1px solid #1e293b' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: '#f8fafc' }}>{inq.name}</td>
                        <td style={{ padding: '1rem', color: '#94a3b8' }}>
                          <div>{inq.email}</div>
                          <small style={{ color: '#64748b' }}>{inq.phone || 'N/A'}</small>
                        </td>
                        <td style={{ padding: '1rem', color: '#38bdf8' }}>{inq.service_requested || 'General Inquiry'}</td>
                        <td style={{ padding: '1rem', color: '#cbd5e1', maxWidth: '280px' }}>{inq.message}</td>
                        <td style={{ padding: '1rem' }}>
                          <select
                            value={inq.status}
                            onChange={(e) => handleUpdateInquiryStatus(inq.id, e.target.value)}
                            style={{
                              background: inq.status === 'New' ? '#0284c7' : inq.status === 'In Progress' ? '#d97706' : '#059669',
                              color: 'white',
                              border: 'none',
                              padding: '0.35rem 0.6rem',
                              borderRadius: '6px',
                              fontWeight: '600',
                              fontSize: '0.8rem',
                              cursor: 'pointer'
                            }}
                          >
                            <option value="New">New</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SERVICES CRUD */}
        {activeTab === 'services' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#131b2e', borderRadius: '12px', border: '1px solid #1e293b', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', margin: '0 0 1.25rem 0', fontWeight: 'bold', color: '#38bdf8' }}>
                {isEditingService ? 'Edit Service' : '+ Add New Service'}
              </h2>
              <form onSubmit={handleSaveService}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Service Title</label>
                  <input
                    type="text"
                    value={serviceForm.title}
                    onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                    placeholder="e.g. Web Application Development"
                    required
                    style={{ width: '100%', padding: '0.65rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Short Description</label>
                  <input
                    type="text"
                    value={serviceForm.short_description}
                    onChange={(e) => setServiceForm({ ...serviceForm, short_description: e.target.value })}
                    placeholder="Brief summary for homepage"
                    required
                    style={{ width: '100%', padding: '0.65rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Full Description</label>
                  <textarea
                    rows={3}
                    value={serviceForm.description}
                    onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                    placeholder="Detailed explanation"
                    required
                    style={{ width: '100%', padding: '0.65rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Features (comma separated)</label>
                  <input
                    type="text"
                    value={serviceForm.features}
                    onChange={(e) => setServiceForm({ ...serviceForm, features: e.target.value })}
                    placeholder="React SPA, Laravel API, Cloud Hosting"
                    style={{ width: '100%', padding: '0.65rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button
                    type="submit"
                    style={{ background: '#059669', color: 'white', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    {isEditingService ? 'Update Service' : 'Create Service'}
                  </button>
                  {isEditingService && (
                    <button
                      type="button"
                      onClick={resetServiceForm}
                      style={{ background: '#475569', color: 'white', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div style={{ background: '#131b2e', borderRadius: '12px', border: '1px solid #1e293b', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', margin: '0 0 1.25rem 0', fontWeight: 'bold', color: '#f8fafc' }}>Existing Services</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {servicesList.map((svc) => (
                  <div key={svc.id} style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#38bdf8', fontSize: '1rem', display: 'block' }}>{svc.title}</strong>
                      <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{svc.short_description}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => handleEditService(svc)} style={{ background: '#0284c7', color: 'white', border: 'none', padding: '0.35rem 0.75rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteService(svc.id)} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.35rem 0.75rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PORTFOLIO SHOWCASE CRUD */}
        {activeTab === 'portfolio' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#131b2e', borderRadius: '12px', border: '1px solid #1e293b', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', margin: '0 0 1.25rem 0', fontWeight: 'bold', color: '#a855f7' }}>
                {isEditingPortfolio ? 'Edit Portfolio Item' : '+ Add Portfolio Project'}
              </h2>
              <form onSubmit={handleSavePortfolio}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Project Title</label>
                  <input
                    type="text"
                    value={portfolioForm.title}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })}
                    placeholder="e.g. UHF Cloud Portal"
                    required
                    style={{ width: '100%', padding: '0.65rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Category</label>
                  <input
                    type="text"
                    value={portfolioForm.category}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, category: e.target.value })}
                    placeholder="Web App / SaaS / Mobile App"
                    required
                    style={{ width: '100%', padding: '0.65rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Client Name</label>
                  <input
                    type="text"
                    value={portfolioForm.client_name}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, client_name: e.target.value })}
                    placeholder="Global Pay Corp"
                    style={{ width: '100%', padding: '0.65rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Summary</label>
                  <textarea
                    rows={3}
                    value={portfolioForm.summary}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, summary: e.target.value })}
                    placeholder="Case study summary"
                    required
                    style={{ width: '100%', padding: '0.65rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button
                    type="submit"
                    style={{ background: '#059669', color: 'white', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    {isEditingPortfolio ? 'Update Project' : 'Add Project'}
                  </button>
                  {isEditingPortfolio && (
                    <button
                      type="button"
                      onClick={resetPortfolioForm}
                      style={{ background: '#475569', color: 'white', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div style={{ background: '#131b2e', borderRadius: '12px', border: '1px solid #1e293b', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', margin: '0 0 1.25rem 0', fontWeight: 'bold', color: '#f8fafc' }}>Showcase Projects</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {portfolioList.map((item) => (
                  <div key={item.id} style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#a855f7', fontSize: '1rem', display: 'block' }}>{item.title}</strong>
                      <span style={{ color: '#38bdf8', fontSize: '0.8rem' }}>{item.category} • {item.client_name || 'Agency Project'}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => handleEditPortfolio(item)} style={{ background: '#0284c7', color: 'white', border: 'none', padding: '0.35rem 0.75rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}>
                        Edit
                      </button>
                      <button onClick={() => handleDeletePortfolio(item.id)} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.35rem 0.75rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DYNAMIC BRANDING & SETTINGS */}
        {activeTab === 'settings' && (
          <div style={{ background: '#131b2e', borderRadius: '12px', border: '1px solid #1e293b', padding: '2rem', maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.25rem', margin: '0 0 1.5rem 0', fontWeight: 'bold', color: '#38bdf8' }}>
              🏢 Dynamic Company Branding & Settings
            </h2>
            <form onSubmit={handleSaveSettings}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '600' }}>Company Name</label>
                <input
                  type="text"
                  value={settingsForm.company_name}
                  onChange={(e) => setSettingsForm({ ...settingsForm, company_name: e.target.value })}
                  placeholder="360 Creative Agency"
                  required
                  style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: 'white', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '600' }}>Company Logo Path / URL</label>
                <input
                  type="text"
                  value={settingsForm.company_logo}
                  onChange={(e) => setSettingsForm({ ...settingsForm, company_logo: e.target.value })}
                  placeholder="/assets/imgs/logo.png"
                  required
                  style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: 'white', boxSizing: 'border-box' }}
                />
                {settingsForm.company_logo && (
                  <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Preview:</span>
                    <img src={settingsForm.company_logo} alt="Logo Preview" style={{ height: '36px', width: 'auto', background: '#0f172a', padding: '4px', borderRadius: '4px' }} />
                  </div>
                )}
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '600' }}>Tagline</label>
                <input
                  type="text"
                  value={settingsForm.tagline}
                  onChange={(e) => setSettingsForm({ ...settingsForm, tagline: e.target.value })}
                  placeholder="Digital Experiences, Branding & Software Engineering"
                  style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: 'white', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '600' }}>Contact Email</label>
                <input
                  type="email"
                  value={settingsForm.contact_email}
                  onChange={(e) => setSettingsForm({ ...settingsForm, contact_email: e.target.value })}
                  placeholder="hello@360creative.com"
                  style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: 'white', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '600' }}>Contact Phone</label>
                <input
                  type="text"
                  value={settingsForm.contact_phone}
                  onChange={(e) => setSettingsForm({ ...settingsForm, contact_phone: e.target.value })}
                  placeholder="+1 (555) 360-3600"
                  style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: 'white', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '600' }}>Address</label>
                <input
                  type="text"
                  value={settingsForm.address}
                  onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                  placeholder="100 Innovation Way, Suite 360, Tech City"
                  style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: 'white', boxSizing: 'border-box' }}
                />
              </div>

              <button
                type="submit"
                style={{ background: '#0284c7', color: 'white', border: 'none', padding: '0.85rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', width: '100%' }}
              >
                Save Branding & Settings
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
