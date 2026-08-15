import Marquee from "react-fast-marquee";

// About 2 Section 4 - Moving gallery (carousel ticker left)

const GALLERY_IMGS = [
    { src: "/assets/imgs/services/service-uiux.jpg", alt: "UI/UX & Web Design - 360 Creative Agency" },
    { src: "/assets/imgs/services/service-branding.jpg", alt: "Brand Identity - 360 Creative Agency" },
    { src: "/assets/imgs/services/service-webdev.jpg", alt: "Web & App Development - 360 Creative Agency" },
    { src: "/assets/imgs/services/service-video.jpg", alt: "Video Editing - 360 Creative Agency" },
    { src: "/assets/imgs/services/service-social.jpg", alt: "Social Media Management - 360 Creative Agency" },
    { src: "/assets/imgs/services/service-marketing.jpg", alt: "Digital Marketing - 360 Creative Agency" },
    { src: "/assets/imgs/services/web-app-development.jpg", alt: "Web Development Portfolio - 360 Creative Agency" },
];

export default function Section4() {
    return (
        <section className="sec-4-about pt-120">
            <div
                className="moving-gallery at_fade_anim carouselTicker carouselTicker-left"
                data-delay=".5"
                data-fade-from="bottom"
                data-ease="bounce"
            >
                <Marquee
                    speed={40}
                    direction="left"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul
                        className="wrapper-gallery carouselTicker__list scroll-move-left"
                        style={{
                            display: "flex",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            overflow: "visible",
                            gap: "0 1.5rem",
                        }}
                    >
                        {GALLERY_IMGS.map((item, i) => (
                            <li key={i} style={{ margin: 0, float: "none" }}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    width={400}
                                    height={300}
                                    style={{ display: "block", objectFit: "cover" }} loading="lazy" />
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
