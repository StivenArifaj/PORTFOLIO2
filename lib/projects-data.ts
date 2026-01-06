export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'WEB APP' | 'MOBILE APP' | 'UTILITY' | 'SAAS';
    tech: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
    featured: boolean;
    isMobileApp?: boolean;
    screenshots?: string[];
}

export const projects: Project[] = [
    // Featured Projects (First 6)
    {
        id: 'maralago-resort',
        title: 'Maralago Resort',
        description: 'Luxury resort website — "Royal Retreat in Tranquility". Showcasing hotel booking, spa services, and premium amenities.',
        category: 'WEB APP',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 145642.png',
        githubUrl: 'https://github.com/stivenarifaj/Maralago-Resort',
        liveUrl: 'https://stivenarifaj.github.io/Maralago-Resort/',
        featured: true
    },
    {
        id: 'albbuild',
        title: 'AlbBuild Construction',
        description: 'Professional construction company — "Ndërtojmë me Besim, Cilësi dhe Përkushtim" (Building with Trust, Quality and Dedication).',
        category: 'WEB APP',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 145728.png',
        githubUrl: 'https://github.com/stivenarifaj/AlbBuild',
        liveUrl: 'https://stivenarifaj.github.io/AlbBuild/',
        featured: true
    },
    {
        id: 'course-hive',
        title: 'Course Hive Academy',
        description: 'Premium e-learning platform — "Learn real skills online". Curated courses taught by industry experts in Development and Design.',
        category: 'SAAS',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 145811.png',
        githubUrl: 'https://github.com/stivenarifaj/Course-Hive',
        liveUrl: 'https://stivenarifaj.github.io/Course-Hive/',
        featured: true
    },
    {
        id: 'leadboost',
        title: 'LeadBoost CRM',
        description: 'High-performance sales management and analytics dashboard for managing leads, deals, and sales pipelines.',
        category: 'SAAS',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 145848.png',
        githubUrl: 'https://github.com/stivenarifaj/Lead-Boost',
        liveUrl: 'https://stivenarifaj.github.io/Lead-Boost/',
        featured: true
    },
    {
        id: 'realtypro',
        title: 'RealtyPro',
        description: 'Real estate marketplace to browse thousands of properties, connect with expert agents, and find your dream home.',
        category: 'WEB APP',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 145917.png',
        githubUrl: 'https://github.com/stivenarifaj/RealityPro',
        liveUrl: 'https://stivenarifaj.github.io/RealityPro/',
        featured: true
    },
    {
        id: 'tripmaven',
        title: 'TripMaven',
        description: 'Experience travel reimagined. Book exclusive flights and luxury hotels with a premium user interface.',
        category: 'WEB APP',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 150040.png',
        githubUrl: 'https://github.com/stivenarifaj/TripMaven',
        liveUrl: 'https://stivenarifaj.github.io/TripMaven/',
        featured: true
    },
    // Additional Projects
    {
        id: 'albania-local-connect',
        title: 'Albania Local Connect',
        description: 'Professional Growth & Local Services. Build resumes, create portfolios, and connect with local service providers in Albania.',
        category: 'SAAS',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 150117.png',
        githubUrl: 'https://github.com/stivenarifaj/AlbaniaLocalConnect',
        liveUrl: 'https://stivenarifaj.github.io/AlbaniaLocalConnect/',
        featured: false
    },
    {
        id: 'bella-vista',
        title: 'Bella Vista',
        description: 'Experience authentic Italian cuisine. Fresh ingredients, traditional recipes, and warm hospitality website.',
        category: 'WEB APP',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 150146.png',
        githubUrl: 'https://github.com/stivenarifaj/Bella-Vista',
        liveUrl: 'https://stivenarifaj.github.io/Bella-Vista/',
        featured: false
    },
    {
        id: 'cozylease-hub',
        title: 'CozyLease Hub',
        description: 'The all-in-one professional property management platform for landlords and tenants. Simple and efficient.',
        category: 'SAAS',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 150235.png',
        githubUrl: 'https://github.com/stivenarifaj/CozyLease-Hub-Pro',
        liveUrl: 'https://stivenarifaj.github.io/CozyLease-Hub-Pro/',
        featured: false
    },
    {
        id: 'teamhub',
        title: 'TeamHub',
        description: 'The all-in-one workspace for agile teams. Manage projects with clarity, velocity, and powerful collaboration tools.',
        category: 'SAAS',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 150315.png',
        githubUrl: 'https://github.com/stivenarifaj/TeamHub',
        liveUrl: 'https://stivenarifaj.github.io/TeamHub/',
        featured: false
    },
    {
        id: 'quickbook-connect',
        title: 'QuickBook Connect',
        description: 'Professional appointment scheduling platform. Connect with top-rated professionals and manage bookings effortlessly.',
        category: 'SAAS',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 150520.png',
        githubUrl: 'https://github.com/stivenarifaj/BookingApp',
        liveUrl: 'https://stivenarifaj.github.io/BookingApp/',
        featured: false
    },
    {
        id: 'searchtosee',
        title: 'SearchToSee',
        description: 'Image search platform powered by Unsplash API. Discover, save, and share breathtaking images.',
        category: 'WEB APP',
        tech: ['React', 'TypeScript', 'Unsplash API', 'Vercel'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 150624.png',
        githubUrl: 'https://github.com/stivenarifaj/SearchToSee',
        liveUrl: 'https://search-to-see.vercel.app/',
        featured: false
    },
    {
        id: 'sonicspeak',
        title: 'SonicSpeak',
        description: 'Ultimate Text to Speech converter. Transform your text into lifelike speech instantly with customizable controls.',
        category: 'UTILITY',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Speech API'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 150833.png',
        githubUrl: 'https://github.com/stivenarifaj/TextToSpeech',
        liveUrl: 'https://stivenarifaj.github.io/TextToSpeech/',
        featured: false
    },
    {
        id: 'qr-generator',
        title: 'QR Code Generator',
        description: 'Create sleek QR codes instantly. A fast, modern tool for generating custom QR codes for any link.',
        category: 'UTILITY',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'QR Library'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 150858.png',
        githubUrl: 'https://github.com/stivenarifaj/QR_Code_generator-',
        liveUrl: 'https://stivenarifaj.github.io/QR_Code_generator-/',
        featured: false
    },
    {
        id: 'weather-today',
        title: 'Weather Today',
        description: 'Real-time weather application. Check temperature, humidity, and wind speed for any city with a minimal design.',
        category: 'UTILITY',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
        image: '/Portfolio_projects/Screenshot 2026-01-03 150924.png',
        githubUrl: 'https://github.com/stivenarifaj/WeatherToday',
        liveUrl: 'https://stivenarifaj.github.io/WeatherToday/',
        featured: false
    },
    {
        id: 'mediflow',
        title: 'MediFlow',
        description: 'Comprehensive mobile health application for tracking medication, reminders, and health tips.',
        category: 'MOBILE APP',
        tech: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
        image: '/mediflow-collage-v3.png',
        githubUrl: 'https://github.com/stivenarifaj/MoneyRush',
        liveUrl: '#',
        featured: false,
        isMobileApp: true,
        screenshots: [
            '/Mediflow_Screenshots/Screenshot_20251227-220000.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220013.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220131.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220142.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220147.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220150.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220201.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220204.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220208.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220214.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220218.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220223.png',
            '/Mediflow_Screenshots/Screenshot_20251227-220227.png'
        ]
    }
];
