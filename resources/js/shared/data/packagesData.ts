export type PackageFeature = {
    name: string;
    desc?: string;
};

export type PackageItem = {
    key: string;
    title: string;
    price: string;
    priceClass: string;
    desc: string;
    btnText: string;
    popular?: boolean;
    features: PackageFeature[];
};

export const PACKAGES: PackageItem[] = [
    {
        key: "basic",
        title: "Basic Package",
        price: "$5,850.00",
        priceClass: "text-price-starter",
        desc: "Essential digital & business setup for emerging brands.",
        btnText: "Get Started",
        popular: false,
        features: [
            { name: "Logo Design", desc: "Delivered by agency team" },
            { name: "Branding", desc: "Delivered by agency team" },
            { name: "Domain & Hosting" },
            { name: "Organization Email & Subdomains" },
            { name: "Social Media Management", desc: "Delivered by agency team" },
            { name: "Business Golden Number (Searching)" },
            { name: "Credit Card / Payment Setup" },
            { name: "Business Development", desc: "Business Address + Business Plan & follow-up" },
            { name: "Website Development", desc: "Delivered by agency team" },
            { name: "App Development" },
            { name: "Admin Panel" },
            { name: "Photography", desc: "Delivered by agency team" },
            { name: "Videography", desc: "Delivered by agency team" },
        ],
    },
    {
        key: "medium",
        title: "Medium Package",
        price: "$8,965.00",
        priceClass: "text-price-growth",
        desc: "Comprehensive growth suite for expanding businesses.",
        btnText: "Choose Medium",
        popular: true,
        features: [
            { name: "Logo Design", desc: "Delivered by agency team" },
            { name: "Branding", desc: "Delivered by agency team" },
            { name: "Domain & Hosting" },
            { name: "Organization Email & Subdomains" },
            { name: "Social Media Management", desc: "Delivered by agency team" },
            { name: "Business Golden Number (Searching)" },
            { name: "Credit Card / Payment Setup" },
            { name: "Business Development", desc: "Delivered by agency team" },
            { name: "Website Development", desc: "Delivered by agency team" },
            { name: "App Development" },
            { name: "Admin Panel" },
            { name: "Photography", desc: "Delivered by agency team" },
            { name: "Videography", desc: "Delivered by agency team" },
        ],
    },
    {
        key: "pro",
        title: "Pro Package",
        price: "$14,780.00",
        priceClass: "text-price-scale",
        desc: "All-inclusive premium agency solution for industry leaders.",
        btnText: "Choose Pro",
        popular: false,
        features: [
            { name: "Logo Design", desc: "Delivered by agency team" },
            { name: "Branding", desc: "Delivered by agency team" },
            { name: "Domain & Hosting" },
            { name: "Organization Email & Subdomains" },
            { name: "Social Media Management", desc: "Delivered by agency team" },
            { name: "Business Golden Number (Searching)" },
            { name: "Credit Card / Payment Setup" },
            { name: "Business Development", desc: "Delivered by agency team" },
            { name: "Website Development", desc: "Delivered by agency team" },
            { name: "App Development" },
            { name: "Admin Panel" },
            { name: "Photography", desc: "Delivered by agency team" },
            { name: "Videography", desc: "Delivered by agency team" },
        ],
    },
];
