import EcommerceBig from '../assets/projects/EcommerceBig.jpg';
import Ecommerce from '../assets/projects/Ecommerce2.jpg';
import Cheaptrip from '../assets/projects/Cheaptrip.jpg';
import CheaptripBig from '../assets/projects/CheaptripBig.jpg';
import Rateit from '../assets/projects/RateIt1.jpg';
import Weather from '../assets/projects/Weather.jpg';
import StarWars from '../assets/projects/StarWars.jpg';
import StarWarsBig from '../assets/projects/StarWarsBig.jpg';
import MusicPlatform from '../assets/projects/MusicPlatform.png';
import MusicPlatformBig from '../assets/projects/MusicPlatformBig.png';

export const projects = [
    {
        title: 'Music Platform',
        img: MusicPlatform,
        imgBig: MusicPlatformBig,
        id: '01',
        skills: [
            "NextJS",
            "React",
            "Zustand",
            "React-query",
            "TypeScript",
            "NestJS",
            "MongoDB",
            "Cloudinary",
            "Multer",
            "REST API",
            "Render",
            "Vercel"
        ],
        demo: {
            url: "https://music-platform-five-sooty.vercel.app/",
            platform: "vercel", // "netlify" | "vercel" | "github-pages"
        },
        description: "Full-stack music platform with track upload, Cloudinary storage, and streaming playback. Users can listen to tracks and leave comments on each track.",

    },
    {
        title: 'E-commerce',
        img: Ecommerce,
        imgBig: EcommerceBig,
        id: '02',
        skills: ["React", "TypeScript", "ReduxToolkit", "CSS Modules", "MUI", "MongoDB"],
        demo: {
            url: "https://ecommerce-ptest.netlify.app/",
            platform: "netlify", // "netlify" | "vercel" | "github-pages"
        }
        
    },
    {
        title: 'Cheap trip',
        img: Cheaptrip,
        imgBig: CheaptripBig,
        id: '03',
        skills: ["Angular", "TypeScript", "SCSS"],
        demo: {
            url: "https://cheaptripwow.netlify.app",
            platform: "netlify", // "netlify" | "vercel" | "github-pages"
        }
        
    },
    {
        title: 'Rate It',
        img: Rateit,
        imgBig: Rateit,
        id: '04',
        skills: ["React", "JavaScript", "CSS Modules"],
        demo: {
            url: "https://singersrate.netlify.app/",
            platform: "netlify", // "netlify" | "vercel" | "github-pages"
        }
        
    },
    {
        title: 'Weather',
        img: Weather,
        imgBig: Weather,
        id: '05',
        skills: ["React", "TypeScript", "Redux", "CSS Modules"],
        demo: {
            url: "https://olgas557.github.io/Weather/",
            platform: "github-pages", // "netlify" | "vercel" | "github-pages"
        }
        
    },
    {
        title: 'Star wars',
        img: StarWars,
        imgBig: StarWarsBig,
        id: '06',
        skills: ["React", "TypeScript", "Bootstrap", "CSS Modules"],
        demo: {
            url: "https://olgas557.github.io/50-ts-react-star-wars/",
            platform: "github-pages", // "netlify" | "vercel" | "github-pages"
        }
        
    },
]