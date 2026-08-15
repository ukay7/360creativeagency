import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { BrowserRouter } from 'react-router-dom';

const appName = import.meta.env.VITE_APP_NAME || '360 Creative Agency';

createInertiaApp({
  title: (title) => (title ? `${title}` : '360 Creative Agency'),
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      <BrowserRouter>
        <App {...props} />
      </BrowserRouter>
    );
  },
  progress: {
    color: '#4f46e5',
  },
});
