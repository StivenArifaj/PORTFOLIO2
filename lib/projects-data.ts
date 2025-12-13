export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'WEB DEVELOPMENT' | 'GRAPHIC DESIGN' | '3D & GAMING';
    tech: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'moneyrush',
        title: 'MoneyRush FinCity',
        description: 'Gamified financial literacy platform for teenagers with stock simulations and city building.',
        category: 'WEB DEVELOPMENT',
        tech: ['React Native', 'Firebase', 'Gamification', 'TypeScript'],
        image: '/images/projects/moneyrush.jpg',
        githubUrl: 'https://github.com/stiven-arifaj/moneyrush',
        liveUrl: 'https://moneyrush.vercel.app',
        featured: true
    },
    {
        id: 'albabuild',
        title: 'AlbaBuild',
        description: 'Construction platform connecting builders and clients with seamless project management.',
        category: 'WEB DEVELOPMENT',
        tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
        image: '/images/projects/albabuild.jpg',
        githubUrl: 'https://github.com/stiven-arifaj/albabuild',
        liveUrl: 'https://stiven-arifaj.github.io/albabuild',
        featured: true
    },
    {
        id: 'maralago',
        title: 'Maralago',
        description: 'Modern real estate booking platform with virtual tours and seamless payments.',
        category: 'WEB DEVELOPMENT',
        tech: ['React', 'Firebase', 'Stripe', 'Tailwind'],
        image: '/images/projects/maralago.jpg',
        githubUrl: 'https://github.com/stiven-arifaj/maralago',
        liveUrl: 'https://stiven-arifaj.github.io/maralago',
        featured: true
    },
    {
        id: 'inspira',
        title: 'Inspira Interiors',
        description: 'Design inspiration hub for interior designers and architects.',
        category: 'GRAPHIC DESIGN',
        tech: ['Figma', 'React', 'Tailwind', 'Framer Motion'],
        image: '/images/projects/inspira.jpg',
        githubUrl: 'https://github.com/stiven-arifaj/inspira',
        liveUrl: 'https://stiven-arifaj.github.io/inspira',
        featured: true
    },
    {
        id: 'dashboard',
        title: 'Multi-Business Dashboard',
        description: 'Comprehensive business analytics dashboard for data visualization.',
        category: 'WEB DEVELOPMENT',
        tech: ['React', 'Chart.js', 'Tailwind', 'REST API'],
        image: '/images/projects/dashboard.jpg',
        githubUrl: 'https://github.com/stiven-arifaj/dashboard',
        liveUrl: 'https://stiven-arifaj.github.io/dashboard',
        featured: false
    },
    {
        id: 'game',
        title: '3D Adventure Game',
        description: 'Unity-based interactive game developed for GameJam3.',
        category: '3D & GAMING',
        tech: ['Unity', 'C#', 'Blender', 'Shader Graph'],
        image: '/images/projects/game.jpg',
        githubUrl: 'https://github.com/stiven-arifaj/game',
        liveUrl: '#',
        featured: false
    }
];
