import PortfolioCard1, { type PortfolioCard1Tag } from "@/shared/cards/PortfolioCard1";
import PortfolioFilterSort, { type FilterValue } from "./PortfolioFilterSort";

type PortfolioItem = {
    classList: string;
    category: FilterValue;
    link: string;
    img: string;
    title: string;
    description: string;
    tags: PortfolioCard1Tag[];
};

// Real Unsplash professional stock photos — each chosen to authentically represent the service
const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        classList: "col-xxl-6 col-lg-7",
        category: "design",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&fit=crop",
        title: "E-Commerce App UI/UX",
        description: "Full mobile shopping experience — wireframes to high-fidelity Figma prototype",
        tags: [
            { label: "UI/UX Design", href: "#" },
            { label: "Figma", href: "#" },
            { label: "Mobile App", href: "#" },
            { label: "E-Commerce", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "branding",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80&fit=crop",
        title: "Restaurant Brand Identity",
        description: "Full visual identity — logo, colour palette, typography & print collateral",
        tags: [
            { label: "Brand Identity", href: "#" },
            { label: "Logo Design", href: "#" },
            { label: "Style Guide", href: "#" },
            { label: "Print", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "webdev",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&fit=crop",
        title: "SaaS Dashboard & Web App",
        description: "Custom Laravel + React SaaS platform with real-time analytics and user management",
        tags: [
            { label: "Web Development", href: "#" },
            { label: "React", href: "#" },
            { label: "Laravel", href: "#" },
            { label: "SaaS", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "video",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1574717024453-354056afd6fc?w=900&q=80&fit=crop",
        title: "Product Commercial Edit",
        description: "Cinematic 60-second promo video with color grading & motion graphics",
        tags: [
            { label: "Video Editing", href: "#" },
            { label: "Premiere Pro", href: "#" },
            { label: "Color Grading", href: "#" },
            { label: "Motion Graphics", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "social",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=80&fit=crop",
        title: "Social Media Growth Campaign",
        description: "3-month Instagram & TikTok strategy — content calendar, reels & 300% follower growth",
        tags: [
            { label: "Social Media", href: "#" },
            { label: "Instagram", href: "#" },
            { label: "TikTok", href: "#" },
            { label: "Content Strategy", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "marketing",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&fit=crop",
        title: "Google & Meta Ads Campaign",
        description: "Full-funnel paid media strategy — 4.2x ROAS across Google Search & Meta platforms",
        tags: [
            { label: "Digital Marketing", href: "#" },
            { label: "Google Ads", href: "#" },
            { label: "Meta Ads", href: "#" },
            { label: "SEO", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "design",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80&fit=crop",
        title: "Fintech Mobile App Design",
        description: "Clean, secure banking UI/UX for iOS & Android with accessibility-first design",
        tags: [
            { label: "UI/UX Design", href: "#" },
            { label: "Fintech", href: "#" },
            { label: "iOS & Android", href: "#" },
            { label: "Accessibility", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "branding",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=900&q=80&fit=crop",
        title: "Boutique Fashion Brand Kit",
        description: "Logo design, packaging mockups, lookbook layout & social media brand template system",
        tags: [
            { label: "Brand Identity", href: "#" },
            { label: "Packaging", href: "#" },
            { label: "Fashion", href: "#" },
            { label: "Lookbook", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "webdev",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=900&q=80&fit=crop",
        title: "iOS & Android Mobile App",
        description: "Cross-platform React Native fitness app with live workout tracking & push notifications",
        tags: [
            { label: "Mobile App", href: "#" },
            { label: "React Native", href: "#" },
            { label: "iOS & Android", href: "#" },
            { label: "Fitness", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "video",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80&fit=crop",
        title: "Social Media Reel Series",
        description: "12-piece Instagram & TikTok reel package — edited, captioned & optimised for reach",
        tags: [
            { label: "Video Editing", href: "#" },
            { label: "Reels", href: "#" },
            { label: "After Effects", href: "#" },
            { label: "Social Content", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "social",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&q=80&fit=crop",
        title: "Brand Social Media Takeover",
        description: "Full account audit, content redesign, scheduling & 60-day managed growth",
        tags: [
            { label: "Social Media", href: "#" },
            { label: "Content Creation", href: "#" },
            { label: "Account Management", href: "#" },
            { label: "Analytics", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "marketing",
        link: "/contact",
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80&fit=crop",
        title: "SEO & Content Marketing",
        description: "Technical SEO audit, keyword strategy & blog content plan driving 180% organic traffic lift",
        tags: [
            { label: "SEO", href: "#" },
            { label: "Content Marketing", href: "#" },
            { label: "Analytics", href: "#" },
            { label: "Growth", href: "#" },
        ],
    },
];

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section1() {
    return (
        <section className="sec-1-portfolio-1 overflow-hidden pt-150 pb-110 border-bottom-100">
            <div className="container pb-60">
                <div className="row align-items-end">
                    <div className="col-xxl-8 col-lg-7">
                        <h1 className="fz-ds-1 fw-500">Our Work</h1>
                    </div>
                    <div className="col-xxl-3 col-lg-5 ms-lg-auto">
                        <p className="fz-font-lg neutral-900 text-lg-end">
                            Real projects. Real results. A curated selection of what we've built, branded, filmed, and grown for our clients.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <PortfolioFilterSort items={PORTFOLIO_DATA}>
                    {(visibleItems, { hasMore, onLoadMore }) => (
                        <div className="row g-4 justify-content-center">
                            {visibleItems.map((item, idx) => (
                                <PortfolioCard1
                                    key={`${item.title}-${idx}`}
                                    classList={item.classList}
                                    link={item.link}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    tags={item.tags}
                                />
                            ))}
                            {hasMore && (
                                <div className="col-12 text-center">
                                    <button type="button" className="at-btn" onClick={onLoadMore}>
                                        <span>
                                            <span className="text-1">LOAD MORE PROJECTS</span>
                                            <span className="text-2">LOAD MORE PROJECTS</span>
                                        </span>
                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </PortfolioFilterSort>
            </div>
        </section>
    );
}
