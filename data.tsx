import { BookText, CodeSquare, HomeIcon, UserRound, Github, Linkedin, Phone, File, Instagram, Crop, Database, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/frandymorel/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/FrandyMorel",
    },
    {
        id: 4,
        logo: <File size={30} strokeWidth={1} />,
        src: "/PerfilProfesionalFrandyMorel.pdf",
    },
    // {
    //     id: 5,
    //     logo: <Phone size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Home",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Graduación Universitaria",
        subtitle: "Instituto Tecnológico de Santo Domingo (INTEC)",
        description: "Consiguió su título universitario en Ingeniería de Software, demostrando un compromiso excepcional con la excelencia académica y una pasión por el desarrollo de software.",
        date: "Oct 2026",
    },
    {
        id: 2,
        title: "Pasantía Laboral",
        subtitle: "HanesBrands Inc.",
        description: "Colaboró con un equipo de ingenieros para llevar a cabo un proyecto de automatizión y optimización de reportes y eficiencia de maquinas utilizando la implementación de la Industria 4.0 del IoT.",
        date: "Feb 2026",
    },
    {
        id: 3,
        title: "Proyecto Final de Grado",
        subtitle: "PacaTrack",
        description: "Junto a equipo de compañeros desarrolladores, se construyó una aplicación web innovadora que se utiliza para gestionar logistica negocios de segunda mano (Pacas) en la República Dominicana, facilitando el inventariado, las ventas y la gestion de sucursales",
        date: "Jul 2025",
    },
//     {
//         id: 4,
//         title: "Prácticas Grado",
//         subtitle: "WebWizards Inc.",
//         description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
//         date: "Mar 2018",
//     },
 ]

export const dataCounter = [
    {
        id: 0,
        endCounter: 12,
        text: "Meses de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 4,
        text: "Proyectos en proceso",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 3,
        text: "Proyectos Realizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 6,
        text: "Certicados obtenidos",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
       {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: < Database/>,
        title: "Manejo de Bases de Datos",
        description: "Manejo eficiente de bases de datos, incluyendo diseño, optimización y mantenimiento",
    },
    {
        icon: <Book />,
        title: "Documentación",
        description: "Creación de documentación clara y detallada, incluyendo diagramación, manuales de usuario y guías de implementación",
    },
    {
        icon: <Rocket />,
        title: "Analisis de datos",
        description: "Análisis de datos para obtener información valiosa y apoyar la toma de decisiones mediante el uso de herramientas y técnicas avanzadas",
    },
];

export const                     
 dataPortfolio = [
    {
        id: 1,
        title: "E-commerce web",
        image: "/Projct1.png",
        urlGithub: "https://github.com/FrandyMorel/Yourfavoritestore",
        urlDemo: "https://yourfavoritestore-gryi.vercel.app/",
    },
    {
        id: 2,
        title: "Portafolio Personal",
        image: "/Projct2.png",
        urlGithub: "https://github.com/FrandyMorel/PortafolioFrand",
        urlDemo: "",
    },
    {
        id: 3,
        title: "PacaTrack",
        image: "/Projct3.png",
        urlGithub: "",
        urlDemo: "",
    },
    {
        id: 4,
        title: "CRUD .NET + React",
        image: "/Projct4.png",
        urlGithub: "https://github.com/FrandyMorel/CRUDempleados",
        urlDemo: "https://crud-dempleados-j56o.vercel.app",
    },
    // {
    //     id: 5,
    //     title: "Webs Impactantes",
    //     image: "/image-5.jpg",
    //     urlGithub: "www.github.com/sergiocarrasco",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 6,
    //     title: "Web Dinámica",
    //     image: "/image-6.jpg",
    //     urlGithub: "www.github.com/sergiocarrasco",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 7,
    //     title: "Dark Web ",
    //     image: "/image-7.jpg",
    //     urlGithub: "www.github.com/sergiocarrasco",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 8,
    //     title: "E-commerce web",
    //     image: "/image-8.jpg",
    //     urlGithub: "#www.github.com/sergiocarrasco",
    //     urlDemo: "#!",
    // }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];