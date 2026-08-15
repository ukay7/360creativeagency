import React from "react";
import { usePage } from "@inertiajs/react";

export default function Section1() {
    const { settings } = usePage().props as any;
    const companyName = settings?.company_name || "360 Creative Agency";
    const contactEmail = settings?.contact_email || "info@360creativeagency.ca";
    const contactPhone = settings?.contact_phone || "+1 416 836 7311";

    return (
        <section className="sec-1-services pt-150 border-bottom-100 overflow-hidden">
            {/* Contact bar */}
            <div className="container">
                <div className="row align-items-center mb-40">
                    <div className="col-lg-6 col-md-6">
                        <h6 className="fw-600 mb-0 fz-18">
                            <a href={`mailto:${contactEmail}`} className="text-decoration-none text-white">
                                {contactEmail}
                            </a>
                        </h6>
                    </div>
                    <div className="col-lg-6 col-md-6 text-md-end">
                        <h6 className="fw-600 mb-0 fz-18">
                            <a href={`tel:${contactPhone}`} className="text-decoration-none text-white">
                                {contactPhone}
                            </a>
                        </h6>
                    </div>
                </div>

                {/* Hero headline */}
                <div className="row mb-50">
                    <div className="col-lg-8">
                        <span
                            className="text-uppercase fw-600 mb-3 d-block"
                            style={{ color: "#f97316", letterSpacing: "0.1em", fontSize: "13px" }}
                        >
                            ◈ What We Offer
                        </span>
                        <h1
                            className="text-white lh-1 mb-4"
                            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
                        >
                            Full-Service Creative &amp; Digital Solutions
                        </h1>
                    </div>
                    <div className="col-lg-4 d-flex align-items-end">
                        <p
                            className="mb-0"
                            style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.8 }}
                        >
                            From brand identity to web development, video editing to performance marketing — one agency, end-to-end.
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero banner image */}
            <div className="at-banner-thumb overflow-hidden scale-up-img rounded-5 mx-lg-3 mx-2">
                <img
                    className="img-cover scale-up"
                    data-speed=".4"
                    src="/assets/imgs/pages/agency-capabilities-hero.jpg"
                    alt={`${companyName} — UI/UX Design, Branding, Web Development, Video Editing, Social Media & Digital Marketing`}
                    width={1920}
                    height={800}
                    loading="lazy"
                />
            </div>
        </section>
    );
}
