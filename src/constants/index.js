import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    react,
    work,
    academic,
    unity,
    flstudio,
    firebase,
    android,
    csharp,
    blender,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Unity Developer",
      icon: mobile,
    },
    {
      title: "Music Producer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "C Sharp",
      icon: csharp,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Fl Studio",
      icon: flstudio,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Android",
      icon: android,
    },
    {
      name: "Blender",
      icon: blender,
    },
  ];
  
  const experiences = [
    {
      title: "B. Computer Enginering",
      company_name: "Politeknik Elektronika Negeri Surabaya\nGame Technology",
      icon: academic,
      iconBg: "#383E56",
      date: "2018 - 2022",
      points: [
      ],
    },
    {
      title: "Software Developer Freelance",
      company_name: "Arutala",
      icon: work,
      iconBg: "#383E56",
      date: "2022",
      points: [,
      ],
    },
    {
      title: "Mobile Game Developer Freelance",
      company_name: "Kokunashi Games",
      icon: work,
      iconBg: "#383E56",
      date: "2021 - 2022",
      points: [
      ],
    },
    {
      title: "Mobile Game Developer Freelance",
      company_name: "Intive Studio",
      icon: work,
      iconBg: "#383E56",
      date: "2022",
      points: [
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Platus Javanicus",
      description:
        "Education game based on license plate number and culture around Java Island.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "game",
          color: "green-text-gradient",
        },
        {
          name: "desktop",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://cdn.sanity.io/images/17tcmf43/production/e9ee7fa26b71cba3e36e4587d11fe7323a27c3de-1920x1080.png',
      demo_link: 'https://patebastudio.itch.io/platus-javanicus',
    },
    {
      name: "Batita",
      description:
        "A multiplayer coop, platformer game based on Aksara Jawa story.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "game",
          color: "green-text-gradient",
        },
        {
          name: "desktop",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://cdn.sanity.io/images/17tcmf43/production/9e14fbb4fabc7b6cb944c2289d5678b9461a399a-347x196.png',
      demo_link: 'https://patebastudio.itch.io/batita-adventure'
    },
    {
      name: "Boom Boom Bounce",
      description:
        "C# Native Online Multiplayer Party Battle Royale Game",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "game",
          color: "green-text-gradient",
        },
        {
          name: "desktop",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://cdn.sanity.io/images/17tcmf43/production/941d3b22da2d91b6a1c95f080c1006ac6ffdce38-347x275.png',
      demo_link: 'https://adriian.itch.io/boom-boom-bounce',
      source_code_link: "https://gitlab.com/frederikoadr/boom-boom-bounce",
    },
    {
      name: "Insectorium",
      description:
        "Insect casual simulation game",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "game",
          color: "green-text-gradient",
        },
        {
          name: "mobile",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://cdn.sanity.io/images/17tcmf43/production/6a8ae7ffd1db6ee4e48b1e347b2fe41a4527b7a7-512x512.png',
      demo_link: 'https://play.google.com/store/apps/details?id=com.KokunashiGame.Insectorium',
    },
    {
      name: "Movie List",
      description:
        "App displaying movie list using Android Studio",
      tags: [
        {
          name: "android",
          color: "blue-text-gradient",
        },
        {
          name: "mobile",
          color: "green-text-gradient",
        },
        {
          name: "java",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://cdn.sanity.io/images/17tcmf43/production/1f4f8128841bebc143b6a2c771e061c9ef0a2795-583x583.png',
      source_code_link: 'https://github.com/frederikoadr/Android-Movie-List-RecyclerView',
    },
    {
      name: "Melodyos",
      description:
        "Melody composition suggestion using AI Genetic Algorithm",
      tags: [
        {
          name: "web",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://cdn.sanity.io/images/17tcmf43/production/e44df860e94e1b0aa4d6e9a5f27abc866262c6cf-1920x978.png?rect=112,0,1629,978',
      demo_link: 'https://melodyos.herokuapp.com/',
    },
    {
      name: "Westworld Film Scoring",
      description:
        "My music scoring from Westworld film scoring competition",
      tags: [
        {
          name: "music",
          color: "blue-text-gradient",
        },
        {
          name: "composing",
          color: "green-text-gradient",
        },
        {
          name: "scoring",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://cdn.sanity.io/images/17tcmf43/production/ca1fe8c927e2c2bbe8d3b2ed6ad2784fbf52a4d2-480x360.jpg',
      demo_link: 'https://youtu.be/5W2K6WhdwAg',
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };