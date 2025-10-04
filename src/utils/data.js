
import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import {FiGithub, FiLinkedin, FiTwitter} from "react-icons/fi";

import InvestmentApp1000 from "../assets/images/1000-Investment-App.jpg";
import Cartoonify from "../assets/images/Cartoonify.jpg";
import CarRental from "../assets/images/editable-vector-car-rent-landing-page-banner-website-template_272430-271.jpg";
import MonthlyClaimsSystem from "../assets/images/Monthly-Claims-System.png";
import BusApp from "../assets/images/Bus-App.png";
import Ecommerce from "../assets/images/E-commerce-Web.png"

export const SKILLS_CATEGORY = [{
 title: "Frontend",
 icon: Code2,
 description: "Crafting beautiful interfaces with a user friendly user experience",
 skills: [{
    name: "React", level: 95, color: "bg-blue-500",},
    {name: "Bootstrap", level: 93, color: "bg-indigo-700"},
    {name: "Tailwind CSS", level: 93, color: "bg-cyan-500"},
    {name: "TypeScript", level: 90, color: "bg-blue-600"},

 ],
},
{
    title: "Backend",
    icon: Server,
    description: "Applying logical thinking into application functionality",
    skills: [{
        name: "Node.js", level: 90, color: "bg-green-500"
    },
    { name: "Express.js", level: 88, color: "bg-gray-700"},
    { name: "C#", level: 85, color: "bg-yellow-500"},
    { name: "Entity Framework", level: 60, color: "bg-red-600"},
    { name: "REST APIs", level: 92, color: "bg-orange-500"},
    { name: "PHP", level: 40, color: "bg-pink-600"},
],
},
{
    title: "Database",
    icon: Server,
    description: "Managing and optomising data storage",
    skills: [{
        name: "MONGODB", level: 88, color: "bg-green-600"
    },
    { name: "Firebase", level: 78, color: "bg-yellow-600"},
    { name: "SQL", level: 90, color: "bg-blue-700"},
    { name: "PostGres", level: 82, color: "bg-indigo-600"},
],
},
];

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Vite",
    "Figma",
    "Canva",
    "Github",
    "Git",
    "Java",
    ".Net MAUI",
    "ASP .Net",
    "C#",
];

export const STATS = [
    {number: "8", label: "Projects Completed"},
    {number: "3+", label: "Years Experience"},
    {number: "18", label: "Technologies"},
    {number: "100%", label: "Client Satisfaction"}, 
];

export const PROJECTS = [
    {id: 1,
     title: "E-Commerce Platform",   
     description: "A full-stack e-commerce website with advanced search filtering, payment gateway, admin and user side control and real-time inventory management",
     image: Ecommerce,
     tags: ["MongoDb", "Express", "React", "Node.js"],
     liveUrl: "#",
     githubUrl: "#",
     featured: false,
     category: "Full Stack"
    },
      {id: 2,
     title: "Car Rental Site",   
     description: "A full-stack e-commerce website with advanced search filtering, payment gateway, admin and user side control and real-time inventory management",
     image: CarRental,
     tags: ["ASP.Net", "C#", "SQL"],
     liveUrl: "#",
     githubUrl: "#",
     featured: false,
     category: "Full Stack"
    },
       {id: 3,
     title: "Live Crypto web",   
     description: "A full-stack e-commerce website with advanced search filtering, payment gateway, admin and user side control and real-time inventory management",
     image: InvestmentApp1000,
     tags: ["ASP.Net", "C#", "PostGre", "Restful Api"],
     liveUrl: "#",
     githubUrl: "#",
     featured: false,
     category: "Full Stack"
    },
         {id: 4,
     title: "Monthly Claims CRUD Web",   
     description: "A full-stack e-commerce website with advanced search filtering, payment gateway, admin and user side control and real-time inventory management",
     image: MonthlyClaimsSystem,
     tags: ["ASP.Net", "C#", "SQL", "Restful Api"],
     liveUrl: "#",
     githubUrl: "#",
     featured: false,
     category: "Full Stack"
    },
            {id: 5,
     title: "City Transit",   
     description: "A full-stack e-commerce website with advanced search filtering, payment gateway, admin and user side control and real-time inventory management",
     image: BusApp,
     tags: [".Net Maui", "C#", "SQL", "Restful Api", "Firebase"],
     liveUrl: "#",
     githubUrl: "#",
     featured: false,
     category: "Full Stack"
    }
];

export const MY_JOURNEY = [
    {
     year: "2020",
     title: "Started Coding Journey",
     company: "Rosebank College",
     description: "Started my journey into software development with the fundamentals of Java and OOP principles",
     icon: Code2,
     color: "bg-blue-500"
    },
        {
     year: "2023",
     title: "Personal Projects",
     company: "Self-taught",
     description: "Started to really love software development and decided to make my own first personal project which was my first cv portfolio at the time ",
     icon: Rocket,
     color: "bg-green-500"
    },
        {
     year: "2024",
     title: "Hackathons",
     company: "Anonymous",
     description: "Started to put myself out there by attending hackathons and contributing towards a team effort",
     icon: Award,
     color: "bg-orange-500"
    },
        {
     year: "2025",
     title: "Freelancing",
     company: "Independant",
     description: "Currently outsourcing my skills for free and at certain fee ranges depending on the project on fiverr",
     icon: Briefcase,
     color: "bg-cyan-500"
    },
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "user-experience",
        description: "Crafting intuitive and user friendly interfaces that users will love"
    },
    {
        icon: Coffee,
        title: "Problem-Solving",
        description: "Part of the programming journey involves many hurdles which you must overcome and conquer"
    },
    {
        icon: BookOpen,
        title: "Continous Learning",
        description: "Technology is always expanding which means theres always many opportunities for one to explore and practice"
    },
];

export const SOCIAL_LINKS = [
    {
        name: "Github",
        icon: FiGithub,
        url: "https://github.com/Katzthegrey",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800"
    },
      {
        name: "LinkedIn",
        icon: FiLinkedin,
        url:  "https://www.linkedin.com/in/katlego-mashego-651a83250/",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10"
    },
      {
        name: "Twitter",
        icon: FiTwitter,
        url: "https://x.com/Kxtz23",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10"
    },
      {
        name: "Email",
        icon: Mail,
        url: "mailto:katzkatlego310@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10"
    },
];

export const CONTACT_INFO = [
    {
        icon: Mail,
        label: "Email",
        value: "katzkatlego310@gmail.com"
    },
        {
        icon: Phone,
        label: "Phone",
        value: "+27 67 019 7323"
    },
];