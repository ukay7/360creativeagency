import SwiperDynamic from "@/shared/components/SwiperDynamic";

const SLIDES = [
    { src: "/assets/imgs/services/gallery-web-dev.jpg", alt: "Web & App Development" },
    { src: "/assets/imgs/services/gallery-graphic-design.jpg", alt: "Graphic Design & Branding" },
    { src: "/assets/imgs/services/gallery-video-edit.jpg", alt: "Video Editing & Production" },
    { src: "/assets/imgs/services/gallery-social-media.jpg", alt: "Social Media Management" },
    { src: "/assets/imgs/services/gallery-team-collab.jpg", alt: "Creative Team Collaboration" },
];

export default function Section8() {
    return (
        <section className="home-2-section-8">
            <SwiperDynamic
                className="swiper about-me-slider-active at-item-anime-area"
                slidesPerView={2}
                spaceBetween={24}
                loop={true}
                breakpoints={{
                    576: { slidesPerView: 1, spaceBetween: 24 },
                    768: { slidesPerView: 1, spaceBetween: 24 },
                    992: { slidesPerView: 2, spaceBetween: 30 },
                }}
            >
                {SLIDES.map((slide, index) => (
                    <div key={index} className="about-me-slider-thumb at-item-anime marque">
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            width={900}
                            height={700}
                            className="w-100 rounded-4" loading="lazy" />
                    </div>
                ))}
            </SwiperDynamic>
        </section>
    );
}
