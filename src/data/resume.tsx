import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abiral Jain",
  initials: "AB",
  url: "https://res.cloudinary.com/dgxtctnut/image/upload/v1728881917/nwrwofzsc53uyyqlxxxv.jpg",
  location: "Jabalpur, M.P.",
  locationLink: "",
  description:
    "Passionate aspiring full-stack developer, driven to create innovative and impactful web applications that make a real difference.",
  summary:
    "I'm Abiral Jain, a dedicated full-stack developer with a passion for crafting innovative web applications. I enjoy tackling complex challenges and turning them into user-friendly solutions. My coding journey includes active participation on LeetCode, where I sharpen my problem-solving skills. I'm excited to collaborate and bring ideas to life!",
  avatarUrl: "https://res.cloudinary.com/dgxtctnut/image/upload/v1728881917/nwrwofzsc53uyyqlxxxv.jpg",
  skills: [
    "C",
    "C++",
    "React.js",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Docker",
    "HTML5",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Firebase",
    "Git",
    "Github",
    "GraphQL"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "abiral2724@gmail.com",
    tel: "6264916954",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Abiral-2724",
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abiral-jain-3b7004256/",
        icon: Icons.linkedin,
        navbar: true
      },
      
      email: {
        name: "Send Email",
        url: "abiral2724@gmail.com",
        icon: Icons.email,
        navbar: true
      }
    }
  },
  work: [],
  education: [
    {
      school: "Jabalpur Engineering College",
      href: "https://www.jecjabalpur.ac.in/",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jabalpur_Engineering_College_%28JEC%29%27s_logo.png/220px-Jabalpur_Engineering_College_%28JEC%29%27s_logo.png",
      start: "2022",
      end: "2026"
    },
    {
      school: "Angel Public School",
      href: "https://angelsabode.co.in/",
      degree: "Class 12",
      logoUrl: "https://angelsabode.co.in/images/angel_logo_footer.png",
      start: "2021",
      end: "2022"
    },
    {
      school: "Pushpa English Medium School",
      href: "https://www.pemschool.in/",
      degree: "Class 10",
      logoUrl: "https://targetstudy.com/files/img/2/48881/L_57048.gif",
      start: "2019",
      end: "2020"
    }
  ],
  projects: [
    {
      title: "Job Hunt",
      href: "https://jobportal-youtube.onrender.com/",
      dates: "July 2024 - Aug 2024",
      active: true,
      description:
        "Developed a full-stack job portal website using the MERN stack, allowing users to browse and apply for jobs while enabling admins to register companies and post job openings. Implemented user authentication, advanced search, and filtering by location, salary, and job type. Built a secure backend API with Node.js, Express, and MongoDB.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "JWT",
        "Bcrypt",
        "Shadcn UI",
        "Magic UI",
        "REST API"
      ],
      links: [
        {
          type: "Website",
          href: "https://jobportal-youtube.onrender.com/",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/Abiral-2724/JobPortal",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: "https://res.cloudinary.com/dgxtctnut/video/upload/v1728882074/jskw8tnny40rthd5chdh.mov"
    },
    {
      title: "YouTube Thumbnail Generator",
      href: "https://youtube-thumbnail-generator.onrender.com/",
      dates: "Aug 2024 - Sept 2024",
      active: true,
      description:
        "Developed a web application for generating, managing, and downloading YouTube thumbnails from video URLs. Implemented a collection management system for easy organization and retrieval. Enabled one-click downloads for individual or bulk thumbnails.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "JWT",
        "Bcrypt",
        "Shadcn UI",
        "Magic UI",
        "REST API"
      ],
      links: [
        {
          type: "Website",
          href: "https://youtube-thumbnail-generator.onrender.com/",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/Abiral-2724/Youtube_thumbnail_generator",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: "https://res.cloudinary.com/dgxtctnut/video/upload/v1728905856/gayfofntwdrlejmkvqfq.mov"
    },
    {
      title: "Quick Chat",
      href: "https://github.com/Abiral-2724/Quick-chat--backend",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Developed a full-stack real-time chat application using the MERN stack and Socket.IO for seamless communication. Implemented secure user authentication with JWT and bcrypt, ensuring data protection. Built a robust backend API with Node.js and Express.js for efficient messaging. Optimized MongoDB storage, improving data access speed by 25%.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "JWT",
        "Bcrypt",
        "Shadcn UI",
        "Magic UI",
        "Socket.IO",
        "REST API"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Abiral-2724/Quick-chat--backend",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/Abiral-2724/Quick-chat--backend",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: "https://res.cloudinary.com/dgxtctnut/video/upload/v1728906248/avc4adyognifqzu0dqjf.mov"
    },
    {
      title: "Lakshadweep Tourism",
      href: "https://lakshadweep-tourism-republic-coders.netlify.app/",
      dates: "Sept 2024 - Sept 2024",
      active: true,
      description:
        "The Lakshadweep Tourism website highlights the breathtaking beauty of Lakshadweep, featuring stunning visuals of its pristine beaches, turquoise waters, and lush landscapes. It focuses on showcasing the natural charm of the islands, offering visitors a glimpse of the serene environment and picturesque locations perfect for a peaceful tropical escape.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://lakshadweep-tourism-republic-coders.netlify.app/",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "",
      video: "https://res.cloudinary.com/dgxtctnut/video/upload/v1728904863/u5zlddjy2j6hvw3mce65.mov"
    },
    {
      title: "Code-Forces Account Worth Checker",
      href: "https://cf-worth.vercel.app/",
      dates: "Jan 2024 - Jan 2024",
      active: true,
      description:
        "The Code-Forces Account Worth Checker allows users to assess the value of their Codeforces account based on performance metrics like ratings, problem-solving skills, and contest participation. It provides a detailed breakdown of account worth, helping competitive programmers track their progress and compare their performance within the community.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "JWT",
        "Bcrypt",
        "Shadcn UI",
        "Magic UI",
        "Socket.IO",
        "REST API"
      ],
      links: [
        {
          type: "Website",
          href: "https://cf-worth.vercel.app/",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/Abiral-2724/Code-Forces-Account-worth",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: "https://res.cloudinary.com/dgxtctnut/video/upload/v1728905026/sx97rddfaqaqmppb0mpu.mov"
    },
    {
      title: "Lenskart Clone",
      href: "https://lenskart-clone-2724.netlify.app/",
      dates: "Sept 2023 - Sept 2023",
      active: true,
      description:
        "The Lenskart clone is a web application replicating the core functionalities of the popular eyewear platform Lenskart. It allows users to browse and search for a variety of glasses, select frames, and virtually try them on. The clone includes features like product filtering, cart management, and secure checkout for seamless shopping.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind"
      ],
      links: [
        {
          type: "Website",
          href: "https://lenskart-clone-2724.netlify.app/",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "",
      video: "https://res.cloudinary.com/dgxtctnut/video/upload/v1728905528/Screen_Recording_2024-10-14_at_4.55.36_PM_owiyqa.mov"
    }
  ],
  hackathons: [
    {
      title: "Hack Xtreme",
      dates: "November 23rd - 25th, 2023",
      location: "IIT Delhi",
      description:
        "Developed a code snippet website that enables users to save their coding snippets and create a marketplace for selling their code. The platform fosters collaboration, enhances coding skills, and provides opportunities for developers to monetize their work in a user-friendly environment.",
      image: "https://ugc.production.linktr.ee/303fce13-825b-436a-aada-8f422df57207_IMG-20230926-203642-585.png?io=true&size=thumbnail-stack-v1_0",
      mlh: "",
      links: []
    },
    {
      title: "Hack JEC 2.0",
      dates: "September 8th - 9th, 2024",
      location: "JEC Jabalpur",
      description:
        "Developed an Ayush register portal designed to streamline the registration process for practitioners in the Ayush system. The platform provides easy access to essential resources, facilitates communication, and promotes efficient management of practitioner information, enhancing overall user experience and accessibility.",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQE1tArMo8topg/feedshare-shrink_800/feedshare-shrink_800/0/1695575294377?e=2147483647&v=beta&t=dXdngP9_xCpW-3Vgf3Vb8WhIpbqwJ4k7P9e0jeMiyKY",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: []
    },
    {
      title: "Hack JEC 1.0",
      dates: "September 14th - 15th, 2023",
      location: "JEC Jabalpur",
      description:
        "Developed Lawverse, a website aimed at streamlining the lawyer hiring process. The platform connects clients with qualified legal professionals, simplifies communication, and enhances the search experience, ensuring efficient matching of legal needs with the right expertise in a user-friendly environment.",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQE1tArMo8topg/feedshare-shrink_800/feedshare-shrink_800/0/1695575294377?e=2147483647&v=beta&t=dXdngP9_xCpW-3Vgf3Vb8WhIpbqwJ4k7P9e0jeMiyKY",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: []
    }
  ]
} as const;
