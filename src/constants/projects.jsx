import React from 'react';
import { TabletSmartphone, Database, ShoppingCart, Globe, Layout } from 'lucide-react';

export const projects = [
    {
        id: "e3-e4-mall-app",
        title: "E3 & E4 Mall App",
        category: "SaaS/App",
        tagline: "Digitizing the Mall Experience Multi-vendor Ecosystem",
        desc: "A comprehensive multi-vendor mall application similar to Swiggy/Zomato, enabling users to order from various stores within a mall ecosystem.",
        tech: ["React Native", "Node.js", "MongoDB", "Redux"],
        image: "from-orange-900 to-red-900",
        icon: <TabletSmartphone size={32} />,
        problem: "Traditional mall shopping lacks digital integration. Customers struggle to find stores, view menus, or order from multiple outlets simultaneously without physically visiting each one.",
        solution: "A robust multi-vendor application specifically tailored for mall ecosystems. It aggregates all stores, enabling users to browse catalogs, order food/products, and navigate the mall digitally.",
        features: [
            "Multi-vendor ordering system",
            "Real-time order tracking",
            "Unified cart for multiple stores",
            "Digital mall map & navigation",
            "Exclusive loyalty rewards"
        ],
        techStack: ["React Native", "Node.js", "MongoDB", "Redux", "Socket.io"],
        impact: "Increased mall footfall engagement by 40% and streamlined food court operations, reducing queue times by 60%."
    },
    {
        id: "jain-silver-plaza",
        title: "Jain Silver Plaza",
        category: "Jewellery/Gold",
        tagline: "Real-time Silver Rate & Artifact Catalog",
        desc: "Live gold and silver rate fetcher application with real-time updates and an elegant catalog for silver artifacts.",
        tech: ["Next.js", "API Integration", "Tailwind"],
        image: "from-slate-800 to-gray-500",
        icon: <Database size={32} />,
        problem: "Fluctuating silver rates made manual price updates for thousands of artifacts impossible, leading to pricing discrepancies and customer mistrust.",
        solution: "An automated platform that fetches live bullion rates and dynamically adjusts product pricing. Includes a high-fidelity catalog for showcasing intricate silver artifacts.",
        features: [
            "Live API rate fetching",
            "Dynamic product pricing",
            "High-res image gallery",
            "Wholesale inquiry portal",
            "Admin dashboard for inventory"
        ],
        techStack: ["Next.js", "Bullion API", "Tailwind CSS", "Vercel"],
        impact: "Eliminated manual pricing errors completely and boosted wholesale inquiries by 25% within the first month."
    },
    {
        id: "gharsansar",
        title: "Gharsansar",
        category: "Ecommerce",
        tagline: "Premium Home Essentials Marketplace",
        desc: "A full-featured e-commerce platform for home essentials with secure payment gateway integration and inventory management.",
        tech: ["MERN Stack", "Stripe", "AWS"],
        image: "from-cyan-900 to-blue-900",
        icon: <ShoppingCart size={32} />,
        problem: "Local home essential businesses struggled to reach a wider audience due to the lack of a centralized, user-friendly digital storefront.",
        solution: "A full-featured e-commerce platform designed for scalability. Features advanced search, secure payments, and a seamless checkout flow optimized for mobile users.",
        features: [
            "Advanced product filtering",
            "Secure payment gateway",
            "User wishlist & review system",
            "Automated invoice generation",
            "Responsive mobile design"
        ],
        techStack: ["MERN Stack", "Stripe", "AWS S3", "Redux Toolkit"],
        impact: "Expanded customer base beyond local geography, resulting in a 200% increase in monthly revenue."
    },
    {
        id: "tata-motors",
        title: "Tata Motors",
        category: "Business",
        tagline: "Enterprise Dealership Management Portal",
        desc: "Corporate portal and internal management tools for Tata Motors dealership, streamlining operations and sales tracking.",
        tech: ["React", "Java Spring Boot", "MySQL"],
        image: "from-blue-900 to-indigo-900",
        icon: <Globe size={32} />,
        problem: "Disjointed systems for inventory, sales leads, and service bookings led to operational inefficiencies and data silos.",
        solution: "A unified internal portal for dealership management. Integrates inventory tracking, CRM for sales leads, and a service booking scheduler into one dashboard.",
        features: [
            "Real-time inventory tracking",
            "Lead management CRM",
            "Service appointment scheduler",
            "Performance analytics dashboard",
            "Role-based access control"
        ],
        techStack: ["React", "Java Spring Boot", "MySQL", "Docker"],
        impact: "Improved operational efficiency by 35% and reduced lead response time from days to hours."
    },
    {
        id: "abhinav-jewellers",
        title: "Abhinav Jewellers",
        category: "Jewellery/Gold",
        tagline: "Live Metal Rates & Customer CRM",
        desc: "Realtime metal rate display board and customer management system for a premium jewellery brand.",
        tech: ["Vue.js", "Firebase", "WebSocket"],
        image: "from-yellow-900 to-amber-900",
        icon: <Database size={32} />,
        problem: "Customers constantly called for gold rates, and manual store displays were often outdated. Customer data was managed on paper.",
        solution: "A digital display system for the store linked to a web app showing real-time gold/diamond rates. Integrated with a CRM to manage customer purchase history.",
        features: [
            "Live gold/diamond rate ticker",
            "Customer purchase history CRM",
            "WhatsApp integration for updates",
            "Digital invoice management",
            "Marketing campaign tools"
        ],
        techStack: ["Vue.js", "Firebase", "Cloud Functions"],
        impact: "Customer retention improved by 30% due to timely rate alerts and personalized offers."
    },
    {
        id: "maa-jewellery",
        title: "Maa Jewellery",
        category: "Jewellery/Gold",
        tagline: "Bespoke Jewellery Appointment System",
        desc: "Digital catalog and appointment booking system for high-end custom jewellery designs.",
        tech: ["Next.js", "Sanity CMS", "Framer Motion"],
        image: "from-rose-900 to-pink-900",
        icon: <Layout size={32} />,
        problem: "Managing improved custom jewellery consultations was chaotic with phone bookings, leading to scheduling conflicts.",
        solution: "An elegant appointment booking platform allowing clients to schedule consultations for bespoke designs. Showcases a gallery of past masterpieces.",
        features: [
            "Online appointment scheduling",
            "Consultation type selection",
            "Portfolio showcase",
            "Client feedback system",
            "Automated reminders"
        ],
        techStack: ["Next.js", "Sanity CMS", "Framer Motion", "Calendly API"],
        impact: "Zero scheduling conflicts and a 50% increase in high-ticket consultation bookings."
    },
    {
        id: "alankar-furniture",
        title: "Alankar Furniture",
        category: "Ecommerce",
        tagline: "AR-Enabled Furniture Shopping",
        desc: "Custom furniture showcase website with AR preview features and detailed product customization options.",
        tech: ["Three.js", "React", "Shopify API"],
        image: "from-amber-900 to-orange-900",
        icon: <ShoppingCart size={32} />,
        problem: "Customers hesitated to buy furniture online because they couldn't visualize how it would look in their space.",
        solution: "An e-commerce site with WebAR capabilities. Users can point their camera to see a 3D model of the furniture in their room before buying.",
        features: [
            "WebAR product preview",
            "360-degree product view",
            "Wood/Fabric customization",
            "Cart & Checkout",
            "Delivery tracking"
        ],
        techStack: ["Three.js", "React-Three-Fiber", "Shopify API"],
        impact: "Reduced product return rates by 45% and increased conversion on high-value items."
    },
    {
        id: "nsm-school",
        title: "NSM School",
        category: "Business",
        tagline: "Comprehensive Education ERP",
        desc: "Educational institution portal for student management, assignments, and parent-teacher communication.",
        tech: ["PHP", "Laravel", "MySQL"],
        image: "from-green-900 to-emerald-900",
        icon: <Globe size={32} />,
        problem: "Manual attendance, report cards, and fee collection were time-consuming and prone to human error.",
        solution: "A complete ERP system for the school. Handles student admissions, attendance, digitally generated report cards, and online fee payments.",
        features: [
            "Student information system",
            "Digital attendance & homework",
            "Automated report cards",
            "Online fee payment gateway",
            "Parent-teacher chat"
        ],
        techStack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
        impact: "Saved 500+ administrative hours per year and went 100% paperless for academic reports."
    },
    {
        id: "media-website",
        title: "Media Website",
        category: "Business",
        tagline: "High-Performance News Platform",
        desc: "High-traffic news and media content platform optimized for speed, SEO, and ad revenue handling.",
        tech: ["Next.js", "GraphQL", "Redis"],
        image: "from-blue-900 to-cyan-900",
        icon: <Layout size={32} />,
        problem: "Previous site crashed during high-traffic news events and had poor SEO rankings.",
        solution: "A Next.js powered static site with incremental regeneration. Optimized for Core Web Vitals to handle massive traffic spikes and rank high on Google.",
        features: [
            "Server-side rendering",
            "AMP (Accelerated Mobile Pages)",
            "Ad revenue optimization",
            "CMS for editors",
            "Social sharing integration"
        ],
        techStack: ["Next.js", "GraphQL", "Redis Caching", "Vercel"],
        impact: "Achieved 99.9% uptime during peak traffic and saw a 3x increase in organic search traffic."
    }
];
