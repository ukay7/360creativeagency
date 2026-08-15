<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-bs-theme="dark">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content="360 Creative Agency - Web & App Development, Video Editing, Graphic Design & Social Media Management" />
    <title>360 Creative Agency</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/images/logo.png?v=3" />
    <link rel="shortcut icon" type="image/png" href="/images/logo.png?v=3" />
    <link rel="apple-touch-icon" href="/images/logo.png?v=3" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100..1000&display=swap" rel="stylesheet" />

    <!-- Vendor CSS -->
    <link rel="stylesheet" href="/assets/css/vendors/carouselTicker.css" />
    <link rel="stylesheet" href="/assets/css/vendors/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/vendors/swiper-bundle.min.css" />
    <link rel="stylesheet" href="/assets/css/vendors/nice-select.css" />
    <link rel="stylesheet" href="/assets/css/vendors/font-awesome-pro.css" />
    <link rel="stylesheet" href="/assets/css/vendors/magnific-popup.css" />
    <link rel="stylesheet" href="/assets/css/vendors/odometer.css" />
    <link rel="stylesheet" href="/assets/css/vendors/spacing.css" />

    <!-- Main Theme CSS -->
    <link rel="stylesheet" href="/assets/css/main.css" />
    <link rel="stylesheet" href="/assets/css/sticky-cards.css" />

    <!-- Theme Init Script -->
    <script src="/scripts/theme-init.js"></script>

    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
  </head>
  <body class="at-magic-cursor">
    <!-- Original Orisa Theme Magic Cursor Ball -->
    <div id="magic-cursor"><div id="ball"></div></div>

    @inertia

    <!--
      Vendor libraries only — NO main.js here.
      All GSAP ScrollTrigger / sticky-card / parallax / reveal-text animations
      are driven by React effects (GlobalEffects.tsx → ScrollSectionEffects,
      FadeAnimEffect, RevealTextEffect, etc.) which use the npm gsap package.
      Including main.js would double-initialize every ScrollTrigger instance
      and break sticky-card stacking.
    -->
    <script src="/assets/js/vendors/jquery-3.7.1.min.js"></script>
    <script src="/assets/js/vendors/bootstrap.min.js"></script>
    <script src="/assets/js/vendors/splitting.js"></script>
    <script src="/assets/js/vendors/imagesloaded-pkgd.js"></script>
    <script src="/assets/js/vendors/isotope.pkgd.min.js"></script>
    <script src="/assets/js/vendors/swiper-bundle.min.js"></script>
    <script src="/assets/js/vendors/parallax.js"></script>
    <script src="/assets/js/vendors/ripple-2.js"></script>
    <script src="/assets/js/vendors/image-hover-effects.js"></script>
    <script src="/assets/js/vendors/jquery.appear.js"></script>
    <script src="/assets/js/vendors/jquery.carouselTicker.min.js"></script>
    <script src="/assets/js/vendors/jquery.magnific-popup.min.js"></script>
    <script src="/assets/js/vendors/jquery.odometer.min.js"></script>
    <script src="/assets/js/at-cursor.js"></script>
  </body>
</html>
