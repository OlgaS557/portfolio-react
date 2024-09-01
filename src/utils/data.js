import EcommerceBig from '../assets/projects/EcommerceBig.jpg';
import Ecommerce from '../assets/projects/Ecommerce2.jpg';
import Cheaptrip from '../assets/projects/Cheaptrip.jpg';
import CheaptripBig from '../assets/projects/CheaptripBig.jpg';
import Rateit from '../assets/projects/RateIt1.jpg';
import Weather from '../assets/projects/Weather.jpg';
import StarWars from '../assets/projects/StarWars.jpg';
import StarWarsBig from '../assets/projects/StarWarsBig.jpg';

export const projects = [
    {
        title: 'E-commerce',
        img: Ecommerce,
        imgBig: EcommerceBig,
        id: '01',
        skills: ["React", "TypeScript", "ReduxToolkit", "CSS Modules", "MUI", "MongoDB"],
        netlify: "https://ecommerce-ptest.netlify.app/",
    },
    {
        title: 'Cheap trip',
        img: Cheaptrip,
        imgBig: CheaptripBig,
        id: '02',
        skills: ["Angular", "TypeScript", "SCSS"],
        netlify: "https://cheaptripwow.netlify.app",
    },
    {
        title: 'Rate It',
        img: Rateit,
        imgBig: Rateit,
        id: '03',
        skills: ["React", "JavaScript", "CSS Modules"],
        netlify: "https://singersrate.netlify.app/",
    },
    {
        title: 'Weather',
        img: Weather,
        imgBig: Weather,
        id: '04',
        skills: ["React", "TypeScript", "Redux", "CSS Modules"],
        gitHub: "https://olgas557.github.io/Weather/",
    },
    {
        title: 'Star wars',
        img: StarWars,
        imgBig: StarWarsBig,
        id: '05',
        skills: ["React", "TypeScript", "Bootstrap", "CSS Modules"],
        gitHub: "https://github.com/your-repo/project05",
    },
    // {
    //     title: 'Gaming community',
    //     img: project06,
    //     imgBig: project06Big,
    //     id: '06',
    //     skills: ["React", "Node.js", "MongoDB"],
    //     gitHub: "https://github.com/your-repo/project06",
    // }
]