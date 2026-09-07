import React from "react";
import MainLayout from "@/layouts/MainLayout";
import PageMeta from "@/seo/PageMeta";
import RevealText from "@/shared/effects/RevealText";

const DEFAULT_TEAM = [
  {
    id: 1,
    name: "Alex Morgan",
    designation: "Creative Director & Founder",
    photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80&fit=crop",
    description: "10+ years leading visual identity systems, brand strategy, and high-converting creative direction for brands across Canada.",
  },
  {
    id: 2,
    name: "David Vance",
    designation: "Head of Web & App Development",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop",
    description: "Lead full-stack developer specializing in scalable React web apps, Laravel backends, SaaS architecture, and mobile platforms.",
  },
  {
    id: 3,
    name: "Elena Rostova",
    designation: "Senior Video Editor & Motion Artist",
    photo_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80&fit=crop",
    description: "Post-production specialist crafting cinematic commercial edits, color grading, 2D/3D motion graphics, and viral social reels.",
  },
  {
    id: 4,
    name: "Marcus Sterling",
    designation: "Head of Digital Marketing & Social Media",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&fit=crop",
    description: "Performance marketing strategist managing multi-channel ad campaigns, social media account growth, and conversion funnels.",
  },
];

const SERVICES_OFFERED = [
  {
    icon: "🎨",
    title: "UI/UX & Web Design",
    desc: "Human-centered design powered by Figma, translating user psychology into stunning, high-converting interfaces that build brand trust.",
    tags: ["Figma", "Wireframing", "Design Systems", "Prototyping"],
  },
  {
    icon: "🏷️",
    title: "Brand Identity",
    desc: "Full visual identity creation — from logo to typography to brand voice — engineered to dominate your market niche and be remembered.",
    tags: ["Logo Design", "Style Guides", "Brand Strategy", "Packaging"],
  },
  {
    icon: "💻",
    title: "Web & App Development",
    desc: "Production-grade web apps, SaaS platforms, and cross-platform mobile applications built with cutting-edge technologies that scale.",
    tags: ["React", "Laravel", "React Native", "REST APIs"],
  },
  {
    icon: "🎬",
    title: "Video Editing & Motion",
    desc: "Cinematic post-production, motion graphics, and short-form content that stops the scroll and drives real audience engagement.",
    tags: ["Adobe Premiere", "After Effects", "Color Grading", "Reels"],
  },
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "Full-service social strategy, daily content scheduling, community management, and growth campaigns across all major platforms.",
    tags: ["Instagram", "LinkedIn", "TikTok", "Content Calendar"],
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    desc: "Performance-driven campaigns using SEO, paid media, and analytics — converting traffic into qualified leads and loyal customers.",
    tags: ["Google Ads", "SEO", "Meta Ads", "Analytics"],
  },
];

const AGENCY_STATS = [
  { value: "5+", label: "Years in Business" },
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "24/7", label: "Client Support" },
];

const VALUES = [
  {
    num: "01",
    title: "Creative First",
    desc: "Every project begins with a creative brief that aligns your goals with audience psychology — design is never cosmetic, it's strategic.",
  },
  {
    num: "02",
    title: "Results Obsessed",
    desc: "We don't just build beautiful things. We build things that convert, retain users, grow followings, and generate measurable ROI.",
  },
  {
    num: "03",
    title: "Transparent Partnership",
    desc: "No black boxes. You get regular updates, open communication, and a dedicated team that feels like an extension of your own.",
  },
  {
    num: "04",
    title: "Full-Service Capability",
    desc: "From branding to code to content — one agency handles your entire digital presence, saving you time and ensuring brand consistency.",
  },
];

const TOOLS = [
  { name: "Figma", cat: "Design" },
  { name: "Adobe Premiere Pro", cat: "Video" },
  { name: "After Effects", cat: "Motion" },
  { name: "Photoshop & Illustrator", cat: "Graphic Design" },
  { name: "React & Next.js", cat: "Frontend" },
  { name: "Laravel & Node.js", cat: "Backend" },
  { name: "React Native", cat: "Mobile" },
  { name: "Meta Ads & Google Ads", cat: "Marketing" },
  { name: "SEMrush & Ahrefs", cat: "SEO" },
  { name: "Hootsuite & Buffer", cat: "Social Media" },
  { name: "AWS & Cloudflare", cat: "Cloud" },
  { name: "MySQL & MongoDB", cat: "Database" },
];

export default function About({ teamMembers = [] }) {
  const displayTeam = teamMembers && teamMembers.length > 0 ? teamMembers : DEFAULT_TEAM;

  return (
    <MainLayout headerStyle={2} footerStyle={2}>
      <PageMeta
        title="About Us - Creative Agency"
        description="Creative Agency is a full-service digital agency specializing in UI/UX design, branding, web development, video editing, social media management, and digital marketing."
      />

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="pt-160 pb-80" style={{ background: "var(--bg-1, #0a0a0a)" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span
                className="text-uppercase fw-600 mb-3 d-block"
                style={{ color: "#f97316", letterSpacing: "0.1em", fontSize: "13px" }}
              >
                ◈ Full-Service Digital Agency — Markham, Ontario
              </span>
              <h1
                className="text-white lh-1 mb-4"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
              >
                <RevealText>We Create. We Code. We Grow Your Brand.</RevealText>
              </h1>
              <p className="fz-18 mb-5" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "560px", lineHeight: 1.75 }}>
                Creative Agency is a Markham-based full-service digital studio. We partner with businesses across Canada to deliver world-class branding, development, video content, and digital marketing — all under one roof.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="at-btn"
                  style={{ background: "#f97316", border: "none", color: "#fff", borderRadius: "50px", padding: "14px 32px" }}
                >
                  <span><span className="text-1">Start a Project</span><span className="text-2">Start a Project</span></span>
                </a>
                <a
                  href="/services"
                  className="at-btn bg-transparent"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: "50px", padding: "14px 32px" }}
                >
                  <span><span className="text-1">Our Services</span><span className="text-2">Our Services</span></span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative" }}>
                <img
                  src="/assets/imgs/about/about-hero-team.jpg"
                  alt="Creative Agency team at work"
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", maxHeight: "440px", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                    padding: "32px",
                  }}
                >
                  <span
                    className="fw-600 text-white d-block"
                    style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316 !important" }}
                  >
                    📍 Markham, Ontario — Serving Canada & Beyond
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────── */}
      <section className="pb-80" style={{ background: "var(--bg-1, #0a0a0a)" }}>
        <div className="container">
          <div className="row g-4">
            {AGENCY_STATS.map((stat, i) => (
              <div key={i} className="col-lg-3 col-6">
                <div
                  className="text-center p-4 rounded-4 h-100"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "border-color .3s",
                  }}
                >
                  <div
                    className="fw-800 mb-2"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f97316", lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <span className="text-white" style={{ opacity: 0.6, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM SECTION (4 BOXES) ───────────────────────── */}
      <section className="pb-100" style={{ background: "var(--bg-1, #0a0a0a)" }}>
        <div className="container">
          <div className="row mb-60 align-items-end">
            <div className="col-lg-6">
              <span
                className="text-uppercase fw-600 mb-3 d-block"
                style={{ color: "#f97316", letterSpacing: "0.1em", fontSize: "13px" }}
              >
                ◈ Our Core Team
              </span>
              <h2
                className="text-white mb-0"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Meet the Experts Behind Your Growth
              </h2>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <p className="mb-0" style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.8 }}>
                A dedicated team of 4 specialists combining creative vision, engineering precision, video storytelling, and performance marketing to turn your ideas into market leaders.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {displayTeam.map((member) => (
              <div key={member.id} className="col-lg-3 col-md-6">
                <div
                  className="rounded-4 overflow-hidden h-100 d-flex flex-column"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "transform .3s ease, border-color .3s ease, background .3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "rgba(249,115,22,0.4)";
                    e.currentTarget.style.background = "rgba(249,115,22,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div style={{ height: "280px", overflow: "hidden", position: "relative" }}>
                    <img
                      src={member.photo_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80&fit=crop"}
                      alt={member.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "80px",
                        background: "linear-gradient(to top, rgba(10,10,10,0.95), transparent)",
                      }}
                    />
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h4 className="text-white fw-700 mb-1" style={{ fontSize: "1.2rem" }}>
                      {member.name}
                    </h4>
                    <span
                      className="d-block mb-3 fw-600"
                      style={{ color: "#f97316", fontSize: "13px", letterSpacing: "0.02em" }}
                    >
                      {member.designation}
                    </span>
                    <p className="mb-0 mt-auto" style={{ color: "rgba(255,255,255,0.55)", fontSize: "13.5px", lineHeight: 1.65 }}>
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─────────────────────────────── */}
      <section className="pb-100" style={{ background: "var(--bg-1, #0a0a0a)" }}>
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-6">
              <span
                className="text-uppercase fw-600 mb-3 d-block"
                style={{ color: "#f97316", letterSpacing: "0.1em", fontSize: "13px" }}
              >
                ◈ What We Do
              </span>
              <h2
                className="text-white mb-0"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Six Disciplines. One Unified Creative Team.
              </h2>
            </div>
            <div className="col-lg-6 d-flex align-items-end">
              <p className="mb-0" style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.8 }}>
                We've built our agency around the six core pillars that modern brands need to dominate their industry. No outsourcing — every service is executed in-house by specialists.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {SERVICES_OFFERED.map((svc, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div
                  className="p-4 rounded-4 h-100"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "background .3s, border-color .3s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(249,115,22,0.07)";
                    e.currentTarget.style.borderColor = "rgba(249,115,22,0.3)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  <div style={{ fontSize: "2.2rem", marginBottom: "16px" }}>{svc.icon}</div>
                  <h4 className="text-white fw-700 mb-3" style={{ fontSize: "1.15rem" }}>{svc.title}</h4>
                  <p className="mb-4" style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.75 }}>{svc.desc}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {svc.tags.map((tag, t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-pill"
                        style={{ background: "rgba(249,115,22,0.12)", color: "#f97316", fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR VALUES ─────────────────────────────── */}
      <section className="pb-100" style={{ background: "var(--bg-1, #0a0a0a)" }}>
        <div className="container">
          <div className="text-center mb-60">
            <span
              className="text-uppercase fw-600 mb-3 d-block"
              style={{ color: "#f97316", letterSpacing: "0.1em", fontSize: "13px" }}
            >
              ◈ How We Work
            </span>
            <h2
              className="text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Principles That Drive Every Project
            </h2>
          </div>

          <div className="row g-4">
            {VALUES.map((v, i) => (
              <div key={i} className="col-lg-6">
                <div
                  className="d-flex gap-4 p-4 rounded-4"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="flex-shrink-0 fw-800"
                    style={{ color: "#f97316", fontSize: "2.5rem", lineHeight: 1, opacity: 0.4, fontVariantNumeric: "tabular-nums" }}
                  >
                    {v.num}
                  </div>
                  <div>
                    <h4 className="text-white fw-700 mb-2" style={{ fontSize: "1.1rem" }}>{v.title}</h4>
                    <p className="mb-0" style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.75 }}>{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOOLS & TECH ─────────────────────────────── */}
      <section className="pb-120" style={{ background: "var(--bg-1, #0a0a0a)" }}>
        <div className="container">
          <div className="text-center mb-60">
            <span
              className="text-uppercase fw-600 mb-3 d-block"
              style={{ color: "#f97316", letterSpacing: "0.1em", fontSize: "13px" }}
            >
              ◈ Industry Tools & Technologies
            </span>
            <h2
              className="text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              We Use What the Best Agencies Use
            </h2>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            {TOOLS.map((tool, i) => (
              <div
                key={i}
                className="px-4 py-3 rounded-3 d-flex flex-column align-items-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  minWidth: "160px",
                  transition: "background .25s, border-color .25s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(249,115,22,0.1)";
                  e.currentTarget.style.borderColor = "rgba(249,115,22,0.35)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <span className="text-white fw-600 mb-1" style={{ fontSize: "14px" }}>{tool.name}</span>
                <span style={{ color: "#f97316", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{tool.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className="pb-120" style={{ background: "var(--bg-1, #0a0a0a)" }}>
        <div className="container">
          <div
            className="text-center p-5 rounded-5"
            style={{
              background: "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.04) 100%)",
              border: "1px solid rgba(249,115,22,0.2)",
            }}
          >
            <h2
              className="text-white mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Ready to Build Something Great Together?
            </h2>
            <p className="mb-5" style={{ color: "rgba(255,255,255,0.6)", fontSize: "17px", maxWidth: "520px", margin: "0 auto 32px" }}>
              Whether you need a full rebrand, a new website, viral video content, or a complete digital marketing strategy — we've got you covered.
            </p>
            <a
              href="/contact"
              className="at-btn"
              style={{ background: "#f97316", border: "none", color: "#fff", borderRadius: "50px", padding: "16px 40px", fontSize: "15px", fontWeight: 700 }}
            >
              <span><span className="text-1">Get a Free Consultation</span><span className="text-2">Get a Free Consultation</span></span>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
