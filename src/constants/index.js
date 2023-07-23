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
    githubimg,
    geekster,
    build,
    gdsc,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "DevOps Engineer",
      icon: backend,
    },
    {
      title: "Developer Advocate",
      icon: creator,
    },
    {
      title: "Machine Learning",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer and Instructor",
      company_name: "Geekster",
      icon: geekster,
      iconBg: "#383E56",
      date: "Oct 2022 - current",
      points: [
        "Spearheaded company growth by conceptualizing and developing a robust education platform using Next.js and Nest.js, resulting in increased user engagement and revenue generation.        ",
        "Leveraged REST APIs to seamlessly retrieve and display data from databases, ensuring efficient data management and enhanced user experience.        ",
        "Drove innovation and excellence as an Educator, designing comprehensive JavaScript and Design curriculum assignments for web development, fostering student growth and knowledge acquisition.",
      ],
    },
    {
      title: "BuildIt Technologies",
      company_name: "build",
      icon: build,
      iconBg: "#E6DEDD",
      date: "June 2022 - Sept 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Google Developer Student Club Lead",
      company_name: "GDSC-INDIA",
      icon: gdsc,
      iconBg: "#383E56",
      date: "Sept 2022 - June 2023",
      points: [
        "As a Google Developer Student Club (DSC) lead, lead a community of students interested in technology and entrepreneurship. I was be responsible for organizing and hosting events such as workshops, hackathons, and speaker sessions that focus on developing technical and soft skills.",
        "Being a DSC lead provides an opportunity to worked closely with Google Developers and other tech industry leaders. I had access to resources and mentorship from Google to help I plan and execute successful events.",
      ],
    },
    {
      title: "GitHub Campus Expert",
      company_name: "GitHub",
      icon: githubimg,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "GitHub Campus Expert: Actively contributed to the tech community as a GitHub Campus Expert, organizing workshops, hackathons, and tech events to foster collaboration, share knowledge, and promote open-source culture on campus.",
        "- Conducted engaging presentations and workshops to educate students and faculty on the effective use of GitHub, version control, and collaborative software development practices, empowering the campus community to work efficiently on projects and build strong coding skills.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Syed proved me wrong.",
      name: "Taiba Hadees",
      designation: "Founder",
      company: "Roush",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Syed does.",
      name: "Hasan Ashraf",
      designation: "Client",
      company: "Urban Science",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Syed optimized our app, our traffic increased by 50%. We can't thank them enough!",
      name: "Angela ",
      designation: "CEO",
      company: "Japanese Translation app",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Priodical",
      description:
        "Professionals actively share daily updates on their learning experiences, seeking valuable guidance and mentorship from their peers and colleagues. This open exchange of knowledge fosters a supportive community, enabling skill development and personal growth in their respective fields.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs & Prisma",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Furquan712/priodical",
    },
    {
      name: "Cryptoverse",
      description:
        "Developed a real-time Crypto Tracker web app using React, Tailwind CSS, and Firebase, monitor and track cryptocurrency data seamlessly. The application offers dynamic updates and a user-friendly interface for staying informed about crypto market trends and prices efficiently..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "chartJs",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Furquan712/crypto-docker",
    },
    {
      name: "URL Shortner",
      description:
        "The MERN-based URL shortener app efficiently transforms long URLs into concise, shareable links, offering seamless redirection to the original destinations. It simplifies link management and enhances user experience through its powerful stack - MongoDB, Express.js, React.js, and Node.js.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Node & Express",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Furquan712/url-shortner",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };