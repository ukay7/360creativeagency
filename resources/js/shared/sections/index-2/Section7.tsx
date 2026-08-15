import { Link } from "@inertiajs/react";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M5.00013 13.9999L5 5.00003L7 5L7.0001 11.9999L17.1719 12L13.2222 8.05027L14.6364 6.63606L21.0003 13L14.6364 19.364L13.2222 17.9497L17.1719 14L5.00013 13.9999Z"
            fill="currentColor"
        />
    </svg>
);

const EXTERNAL_ICON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path
            d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
            fill="currentColor"
        />
    </svg>
);

const DIAMOND_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.5 0H0L41.5 41.5H0L41.5 83H83L41.5 41.5H83L41.5 0Z"
            fill="currentColor"
        />
    </svg>
);

const MILESTONES = [
    {
        date: "[ 2024 ]",
        img: "/assets/imgs/services/milestone-clients.jpg",
        imgLg: "/assets/imgs/services/milestone-clients.jpg",
        title: "50+ Happy Clients Worldwide",
        category: "Client Success",
        stat: "50+",
    },
    {
        date: "[ 2025 ]",
        img: "/assets/imgs/services/milestone-apps.jpg",
        imgLg: "/assets/imgs/services/milestone-apps.jpg",
        title: "30+ Apps & Websites Delivered",
        category: "Web & App Development",
        stat: "30+",
    },
    {
        date: "[ 2025 ]",
        img: "/assets/imgs/services/milestone-brands.jpg",
        imgLg: "/assets/imgs/services/milestone-brands.jpg",
        title: "100+ Brand Identities Crafted",
        category: "Graphic Design & Branding",
        stat: "100+",
    },
    {
        date: "[ 2026 ]",
        img: "/assets/imgs/services/milestone-social.jpg",
        imgLg: "/assets/imgs/services/milestone-social.jpg",
        title: "50K+ Social Media Followers Grown",
        category: "Social Media Management",
        stat: "50K+",
    },
    {
        date: "[ 2026 ]",
        img: "/assets/imgs/services/milestone-video.jpg",
        imgLg: "/assets/imgs/services/milestone-video.jpg",
        title: "200+ Videos Produced & Edited",
        category: "Video Editing & Production",
        stat: "200+",
    },
];

export default function Section7() {
    return (
        <section className="home-2-section-7 pt-120 pb-120">
            <div className="container">
                <div className="row g-4 align-items-end">
                    <div className="col-xxl-3 col-lg-6 col-md-6">
                        <h1 className="fw-500 fz-ds-1 mb-0">Milestones.</h1>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-md-4 ms-auto d-flex justify-content-lg-end">
                        <div
                            className="at-btn-group at-btn-group-transparent at_fade_anim"
                            data-delay=".5"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <Link className="at-btn-circle" href="/about">
                                {ARROW_SVG}
                            </Link>
                            <Link className="at-btn z-index-1" href="/about">
                                Learn More About Us
                            </Link>
                            <Link className="at-btn-circle" href="/about">
                                {ARROW_SVG}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row pt-120">
                    <div className="col-12">
                        {MILESTONES.map((item, index) => (
                            <div
                                key={index}
                                className="card-award scroll-move-up"
                                data-img-award={item.imgLg}
                            >
                                <div className="card-award-link" style={{ cursor: 'default' }}>
                                    <span className="card-award-date">{item.date}</span>
                                    <div className="card-award-content">
                                        <div className="card-award-image">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                width={120}
                                                height={80}
                                                className="w-100 h-100" loading="lazy" />
                                        </div>
                                        <h6 className="card-award-title mb-0">{item.title}</h6>
                                    </div>
                                    <h6 className="card-award-web-excellence mb-0">
                                        {item.category}
                                    </h6>
                                    <div className="card-award-meta">
                                        <span className="card-award-url fz-font-lg fw-700" style={{ color: '#F0460E' }}>
                                            {item.stat}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-7 col-12 ms-auto pt-80">
                        <div className="award-description d-flex gap-5">
                            <div className="icon">{DIAMOND_SVG}</div>
                            <div className="content">
                                <h5 className="revert-text mb-0 reveal-text">
                                    <RevealText>
                                        360 Creative Agency delivers end-to-end digital solutions — from
                                        custom apps and stunning designs to viral social media campaigns
                                        and cinematic video production.
                                    </RevealText>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
