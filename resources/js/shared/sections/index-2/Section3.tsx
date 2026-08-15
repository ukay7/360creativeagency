import { Link } from "@inertiajs/react";
import Marquee from "react-fast-marquee";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const CLIENTS = [
    "Little Guy",
    "Ecodine Zoom",
    "Sweet Boutique",
    "Mama Mia Cucina",
    "Little Guy",
    "Ecodine Zoom",
    "Sweet Boutique",
    "Mama Mia Cucina",
    "Little Guy",
    "Ecodine Zoom",
    "Sweet Boutique",
    "Mama Mia Cucina",
];

export default function Section3() {
    return (
        <section className="sec-3-home-2 pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12">
                        <div className="at-about-title-wrap d-flex flex-wrap flex-lg-nowrap align-items-start gap-4 mb-30">
                            <span className="at-btn common-black bg-transparent rounded-0 p-0 mt-xxl-2">
                                <span className="text-uppercase text-nowrap">
                                    <span className="text-1">Our Clients</span>
                                    <span className="text-2">Our Clients</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h4 className="at-section-title reveal-text">
                                <RevealText>
                                    Collaborating with progressive brands to shape meaningful, long-term impact.
                                </RevealText>
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-11 col-12 ms-auto at-brand-area border-0">
                        <div className="carouselTicker carouselTicker-left position-relative z-1">
                            <Marquee
                                speed={40}
                                direction="left"
                                pauseOnHover={false}
                                gradient={false}
                                className="carouselTicker__marquee"
                            >
                                <ul
                                    className="carouselTicker__list"
                                    style={{
                                        display: "flex",
                                        listStyle: "none",
                                        margin: 0,
                                        padding: 0,
                                        overflow: "visible",
                                        gap: "0 2rem",
                                        alignItems: "center",
                                    }}
                                >
                                    {CLIENTS.map((client, i) => (
                                        <li
                                            key={i}
                                            className="carouselTicker__item"
                                            style={{ margin: "0 2.5rem", float: "none" }}
                                        >
                                            <div className="brand-item d-flex align-items-center gap-2">
                                                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "1rem", fontWeight: 300 }}>
                                                    ✦
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
                                                        fontWeight: 600,
                                                        color: "rgba(255,255,255,0.75)",
                                                        letterSpacing: "-0.01em",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {client}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Marquee>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-center">
                            <Link href="/contact" className="at-btn bg-transparent p-relative">
                                <img
                                    src="/assets/imgs/icons/badge-1.svg"
                                    alt="360 Creative Agency"
                                    width={140}
                                    height={140}
                                    loading="lazy"
                                />
                                <span className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center">
                                    <i className="text-white">
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                    <span className="mt-2">
                                        <span className="fw-700 text-white">Let&apos;s Talk</span>
                                    </span>
                                </span>
                            </Link>
                            <p className="mb-0">
                                Turning ideas into powerful apps, <br className="d-block" /> stunning visuals,
                                and thriving brands <br className="d-block" /> across the globe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
