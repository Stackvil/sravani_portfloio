import React from 'react';
import { Briefcase, Globe, Calendar, Star, Globe as GlobeIcon, Cpu, Database, Code } from 'lucide-react';

export const aboutData = {
    stats: [
        { label: "Projects Delivered", value: "10+", icon: <Briefcase /> },
        { label: "Industries Served", value: "5+", icon: <Globe /> },
        { label: "Years Experience", value: "4+", icon: <Calendar /> },
        { label: "Client Satisfaction", value: "100%", icon: <Star /> }
    ],
    events: [
        { year: "2024", title: "Lead Developer", desc: "Spearheading enterprise architecture and team leadership at Stackvil." },
        { year: "2023", title: "Scale & Performance", desc: "Optimized high-traffic applications for fintech clients." },
        { year: "2022", title: "Joined Stackvil", desc: "Started journey as a core developer contributing to SaaS products." },
        { year: "2021", title: "The Beginning", desc: "Freelance full-stack development and open source contributions." }
    ],
    skills: [
        { name: "Web Development", level: 95, icon: <GlobeIcon size={18} /> },
        { name: "Mobile App Dev", level: 85, icon: <Cpu size={18} /> },
        { name: "SaaS Architecture", level: 90, icon: <Database size={18} /> },
        { name: "UI/UX Design", level: 88, icon: <Code size={18} /> },
    ],
    tags: [
        'React', 'Next.js', 'Node.js', 'Three.js', 'TypeScript', 'Tailwind',
        'PostgreSQL', 'Docker', 'AWS', 'Figma', 'GSAP', 'Framer Motion'
    ]
};
