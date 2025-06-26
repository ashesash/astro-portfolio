import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
    title: "Ash Sahu — Software Engineer",
    author: "Ash Sahu",
    description:
        "Software Engineer with an interest in Data and Cloud development.",
    lang: "en",
    siteLogo: "/ash-small.jpg",
    navLinks: [
        { text: "Projects", href: "#projects" },
        { text: "About", href: "#about" },
        { text: "Contact", href: "#contact" },
    ],
    socialLinks: [
        { text: "Github", href: "https://github.com/ashesash" },
    ],
    socialImage: "/ash-og.png",
    canonicalURL: "https://ashsahu.dev",
};

export const SITE_CONTENT: SiteContent = {
    hero: {
        name: "Ash Sahu",
        specialty: "Software Engineer",
        summary:
            "With an interest in Data and Cloud development",
        email: "hiashsahu@gmail.com",
    },
    projects: [
        {
            name: "Spotifu Music",
            summary: "A music streaming app that emulates Spotify's core features.",
            linkPreview: "/",
            linkSource: "https://github.com/ashesash",
            image: "/spotifu.png",
        },
        {
            name: "Shopp App",
            summary: "An e-commerce platform that replicates Shopify's key features.",
            linkPreview: "/",
            linkSource: "https://github.com/ashesash",
            image: "/shopify-clon.png",
        },
        {
            name: "ClonTagram",
            summary: "A social network that replicates the features of Instagram",
            linkPreview: "/",
            linkSource: "https://github.com/ashesash",
            image: "/clone-ig.png",
        },
    ],
    about: {
        description: `
      Hi, I'm Ash Sahu, a passionate Software Engineer with an interest in Data and Cloud development. I enjoy building scalable applications and working with modern technologies to solve complex problems.
    `,
        image: "/ash-big.jpg",
    },
};

// #5755ff