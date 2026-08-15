// About 3 Section 5 - Gallery (3 columns, parallax-style data-speed)

const COLUMNS = [
    {
        dataSpeed: ".1",
        images: [
            "/assets/imgs/services/web-app-development.jpg",
            "/assets/imgs/services/gallery-graphic-design.jpg",
            "/assets/imgs/services/portfolio-ecommerce.jpg",
            "/assets/imgs/services/video-editing-motion.jpg",
            "/assets/imgs/services/gallery-team-collab.jpg",
            "/assets/imgs/services/portfolio-fintech-ui.jpg",
        ],
    },
    {
        dataSpeed: ".8",
        images: [
            "/assets/imgs/services/graphic-design-branding.jpg",
            "/assets/imgs/services/gallery-video-edit.jpg",
            "/assets/imgs/services/social-media-management.jpg",
            "/assets/imgs/services/portfolio-social-media.jpg",
            "/assets/imgs/services/gallery-web-dev.jpg",
            "/assets/imgs/services/portfolio-video-production.jpg",
        ],
    },
    {
        dataSpeed: ".1",
        images: [
            "/assets/imgs/services/portfolio-rebrand.jpg",
            "/assets/imgs/services/gallery-social-media.jpg",
            "/assets/imgs/services/portfolio-fitness-app.jpg",
            "/assets/imgs/services/milestone-apps.jpg",
            "/assets/imgs/services/milestone-video.jpg",
            "/assets/imgs/services/milestone-social.jpg",
        ],
    },
];

export default function Section5({ classList = "" }: { classList?: string }) {
    return (
        <section className={`sec-5-about pt-65 pb-65 ${classList || ""}`}>
            <div className="mg-gallery-area fix">
                <div className="container-fluid container-2200">
                    <div className="at-gallery-wrapper">
                        <div className="row gx-30">
                            {COLUMNS.map((col, colIndex) => (
                                <div
                                    key={colIndex}
                                    className="col-lg-4 col-md-4 col-sm-4 col-4"
                                >
                                    <div
                                        className="at-gallery-item-wrapper"
                                        data-speed={col.dataSpeed}
                                    >
                                        {col.images.map((src, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="at-gallery-item mb-30"
                                            >
                                                <span>
                                                    <img
                                                        className="w-100"
                                                        src={src}
                                                        alt="360 Creative Agency portfolio work"
                                                        width={620}
                                                        height={780}
                                                        style={{ width: "100%", height: "auto", objectFit: "cover" }} loading="lazy" />
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
