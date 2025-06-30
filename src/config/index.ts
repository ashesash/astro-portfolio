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
    canonicalURL: "https://ashsahu.com",
};

export const SITE_CONTENT: SiteContent = {
    hero: {
        name: "Ash Sahu",
        specialty: "Software Engineer",
        summary:
            "An engineer living on Gadigal land (Sydney) who loves working with data and cloud tech",
        email: "hiashsahu@gmail.com",
    },
    projects: [
        {
            name: "Sound Sorcery",
            summary: "A website for Sound Sorcery that organises jams for women and gender diverse folks.",
            linkPreview: "https://soundsorcery.com.au",
            linkSource: "https://github.com/ashesash/Sound-Sorcery-website",
            image: "/project/soundsorcery.png",
        },
        {
            name: "Meydit",
            summary: "A marketplace for slow fashion. Users can connect with selected creatives on the platform to get bespoke pieces made for them in addition to other services to prolong lives their clothes.",
            linkPreview: "https://meyd.it",
            // linkSource: "https://github.com/ashesash",
            image: "/project/meydit.png",
        },
        {
            name: "GenAI Travel Planner",
            summary: "A travel planner that uses AI to generate itineraries based on user preferences.",
            linkPreview: "https://traveleasy.streamlit.app/",
            linkSource: "https://github.com/ashesash/AI-TravelBot",
            image: "/project/aiTravelbot.png",
        },
        {
            name: "News Blog",
            summary: "A news blog built with Django. Has a carousel display for the latest news. Easy sign up allows users to write their own blogs",
            linkPreview: "https://thunder-news.fly.dev/",
            linkSource: "https://github.com/ashesash/django-news-project",
            image: "/project/news.png",
        },
    ],
    about: {
        description: `Hi, I'm Ash, a passionate Software Engineer with an interest in Data and Cloud development. I enjoy building scalable applications and working with modern technologies to solve complex problems.

I've lived in a few different places before settling in Sydney—India, Bahrain, Canada, and Sweden—each one leaving its mark on me and shaping the way I approach life and work. These experiences have given me a unique perspective and a love for diverse cultures.

When I'm not coding, I'm likely modding mechanical keyboards, playing guitar, sketching, whittling or getting creative with polymer clay. I also love building small coding projects in my spare time, so if you're interested in collaborating or building something cool together, feel free to reach out!`,
    },
};