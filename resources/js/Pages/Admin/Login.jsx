import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/login');
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: 'radial-gradient(circle at top right, #1e293b, #090d16)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      color: '#f8fafc'
    }}>
      <Head title="Admin Login - Creative Agency Console" />

      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: '#131b2e',
        borderRadius: '16px',
        border: '1px solid #1e293b',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        padding: '2.5rem'
      }}>
        {/* Logo / Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            background: 'rgba(249, 115, 22, 0.1)',
            borderRadius: '16px',
            color: '#f97316',
            marginBottom: '1rem',
            fontSize: '1.75rem',
            fontWeight: 'bold',
            border: '1px solid rgba(249, 115, 22, 0.2)'
          }}>
            ⚙️
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', color: '#f8fafc' }}>
            Creative Agency Console
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: 0 }}>
            Sign in to manage your website
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.5rem' }}>
              Email Address
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              placeholder="Enter your email address"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: '#0f172a',
                border: errors.email ? '1px solid #ef4444' : '1px solid #334155',
                borderRadius: '8px',
                color: '#f8fafc',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            {errors.email && (
              <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.email}
              </span>
            )}
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.5rem' }}>
              Password
            </label>
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: '#0f172a',
                border: errors.password ? '1px solid #ef4444' : '1px solid #334155',
                borderRadius: '8px',
                color: '#f8fafc',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            {errors.password && (
              <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={processing}
            style={{
              width: '100%',
              padding: '0.85rem',
              background: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: processing ? 'not-allowed' : 'pointer',
              opacity: processing ? 0.7 : 1,
              transition: 'background 0.2s',
              boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
            }}
          >
            {processing ? 'Signing In...' : 'Sign In to Backoffice'}
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.85rem', color: '#64748b' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
