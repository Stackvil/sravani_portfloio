import React from 'react';
import { Globe, Smartphone, Building2, ShoppingCart, TrendingUp, Rocket, Palette, Server, Settings } from 'lucide-react';

export const services = [
    {
        title: "Web Development",
        description: "High-performance, SEO-optimized websites and web applications using Next.js, React, and modern CSS frameworks.",
        icon: <Globe size={40} />,
        features: ["SPA & PWA", "SEO Optimization", "Responsive Design"]
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform mobile applications for iOS and Android delivering native-like performance and experience.",
        icon: <Smartphone size={40} />,
        features: ["React Native", "iOS & Android", "App Store Deployment"]
    },
    {
        title: "ERP & Business Software",
        description: "Comprehensive Enterprise Resource Planning systems to streamline operations, finance, and HR management.",
        icon: <Building2 size={40} />,
        features: ["Workflow Automation", "Data Analytics", "Role-Based Access"]
    },
    {
        title: "E-Commerce Platforms",
        description: "Scalable online stores with secure payment gateways, inventory management, and intuitive user experiences.",
        icon: <ShoppingCart size={40} />,
        features: ["Payment Integration", "Inventory Management", "Admin Dashboard"]
    },
    {
        title: "Live Rate & Finance Systems",
        description: "Real-time data fetching systems for financial markets, gold/silver rates, and stock tracking dashboards.",
        icon: <TrendingUp size={40} />,
        features: ["WebSocket Integration", "Real-time Updates", "Data Visualization"]
    },
    {
        title: "Startup MVP Development",
        description: "Rapid prototyping and Minimum Viable Product development to help startups launch and validate ideas quickly.",
        icon: <Rocket size={40} />,
        features: ["Fast Turnaround", "Scalable Architecture", "Investor Ready"]
    },
    {
        title: "UI/UX Design",
        description: "User-centric design solutions that combine aesthetics with functionality for superior digital experiences.",
        icon: <Palette size={40} />,
        features: ["Wireframing", "Prototyping", "User Research"]
    },
    {
        title: "API & Backend Systems",
        description: "Robust and secure backend infrastructures, RESTful APIs, and database architecture for complex applications.",
        icon: <Server size={40} />,
        features: ["Node.js / Python", "Database Design", "Security Best Practices"]
    },
    {
        title: "Custom Business Software",
        description: "Tailor-made software solutions designed to address specific business challenges and operational bottlenecks.",
        icon: <Settings size={40} />,
        features: ["Custom Logic", "Legacy Integration", "Ongoing Support"]
    }
];
