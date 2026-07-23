// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#6366f1, #8b5cf6, #a78bfa, #6366f1",
  firstName: "Stephen",
  middleName: "",
  lastName: "Anino",
  message: " Senior Full Stack Developer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/aninostephen",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/stepshadow08",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/stephen-anino",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ssanino.jpg"),
  imageSize: 375,
  message:
    `Full Stack Web Developer with 10 years of experience building enterprise applications using React,
Node.js, Laravel, and TypeScript. Experienced in scalable micro-frontend architecture, REST APIs,
CI/CD pipelines, and cloud deployment. Passionate about developing high-performance web
applications and solving complex technical challenges.`,
  resume: "https://drive.google.com/file/d/1RtK8zvU273WQjpuLyv_f9rRroVJiXQ-R/view",
};

// PROJECTS SECTION
const repos = {
  show: false,
  heading: "Projects",
  gitHubUsername: "aninostephen",
  reposLength: 4,
  specificRepos: [],
};

const eHistory = {
  show: true,
  heading: "Employment History",
  specific: [
    {
      companyName: "Comfac Technology Options",
      startDate: "September, 2024",
      endDate: "Present",
      address: "Remote — Philippines",
      position: "Senior Full Stack Developer",
      description:
        "Leading full-stack development of ReplyanAI, an AI-powered customer communication platform that automates business responses across messaging channels.",
      whatIDo: [
        "Architected and developed ReplyanAI SaaS platform from ground up using React, Node.js, Express, and PostgreSQL with Prisma ORM",
        "Integrated multiple AI providers (OpenAI, Anthropic Claude, Google Gemini) for intelligent response generation",
        "Built real-time communication pipeline using WebSockets for live chat and notification systems",
        "Implemented subscription and billing management with Stripe payment integration",
        "Developed multi-tenant architecture supporting isolated business workspaces",
        "Set up CI/CD pipelines and cloud deployment on AWS (EC2, S3, RDS)",
        "Created comprehensive API documentation and developer onboarding guides",
      ],
      mostWork: [
        "ReplyanAI SaaS Platform",
        "AI Integration Engine (OpenAI, Claude, Gemini)",
        "Real-time WebSocket Communication System",
        "Stripe Subscription & Billing Module",
      ],
    },
    {
      companyName: "Freelance / Independent Projects",
      startDate: "November, 2023",
      endDate: "September, 2024",
      address: "Remote — Philippines",
      position: "Full Stack Developer",
      description:
        "Worked on multiple freelance projects, delivering custom web applications and e-commerce solutions for various clients.",
      whatIDo: [
        "Built custom e-commerce platforms with Laravel and React",
        "Developed REST APIs and integrated third-party payment gateways",
        "Provided technical consultation for startup MVPs",
        "Maintained and upgraded legacy PHP applications to modern stacks",
      ],
      mostWork: [],
    },
    {
      companyName: "Collabera Technologies",
      startDate: "November, 2021",
      endDate: "November, 2023",
      address:
        "17th & 40th Floor, Rufino Pacific Tower, 6784 Ayala Avenue, Makati City, Philippines",
      position: "Web Developer (React.js Developer)",
      description:
        "Collabera Digital is at the forefront of innovation, driving transformative solutions. I worked on large-scale banking applications for Unionbank of the Philippines.",
      whatIDo: [
        "Developed and maintained the frontend system using React.js with Redux for state management",
        "Collaborated with the Backend team using REST APIs for data exchange",
        "Utilized CI/CD pipeline for code validation and deployment using GitLab",
        "Added features and fixed frontend bugs for both Unionbank Portal and BackOffice applications",
        "Participated in daily Scrum meetings for project updates and coordination",
        "Maintained and contributed to reusable component libraries in React.js",
      ],
      mostWork: [
        'Development for Unionbank "The Portal" application',
        "Development for Unionbank BackOffice",
        "Content Module Development",
      ],
    },
    {
      companyName: "Quantum Hotel Solution Inc",
      startDate: "March, 2018",
      endDate: "March, 2021",
      address:
        "Unit D, Level 21 Rufino Pacific Tower, 6784 Ayala Avenue cor. VA Rufino St. 1200",
      position: "Full Stack Web Developer (PHP and React.js)",
      description:
        "Quantum Hotels and Resorts provides hospitality management, international sales, and online reservation services for high to mid-level hotels and resorts.",
      whatIDo: [
        "Developed and maintained systems written in PHP (CodeIgniter, Laravel) and JavaScript",
        "Built and maintained module-based projects following business process flows",
        "Developed REST APIs using Laravel",
        "Configured and managed CodeIgniter, Laravel, Apache, and MySQL on hosting servers",
        "Built mobile-responsive web applications",
        "Maintained reusable frontend components using React.js",
        "Monitored website performance using Google PageSpeed Insights",
      ],
      mostWork: [
        "Property Management System (PMS) for Hotels",
        "Booking Engine Development",
        "OTA Integration Development",
        "WordPress Site Management",
      ],
    },
    {
      companyName: "RapidcloudPhilippines Inc.",
      startDate: "February, 2014",
      endDate: "February, 2018",
      address:
        "Unit 1506, Cityland 10 Tower 2, H.V. Dela Costa Street, Salcedo Village, Makati, 1200 Metro Manila",
      position: "Full Stack Web Developer",
      description:
        "Rapidcloud PH Inc is an IT firm that provides web applications such as e-commerce, web customization, and informative websites.",
      whatIDo: [
        "Developed and maintained systems written in PHP and JavaScript",
        "Created websites using MVC frameworks with maintainable and reusable code",
        "Used Object-Oriented patterns for modular and fast development",
        "Created templates and plugins for the WordPress platform",
        "Built CodeIgniter MVC applications from scratch",
      ],
      mostWork: [],
    },
  ],
};

const contentImage = {
  show: true,
  heading: "Some of my Work",
  specific: [
    {
      name: "Unionbank The Portal",
      url: "https://www.unionbankph.com/corporate/the-portal",
      image: require("../editable-stuff/img/the-portal.jpg"),
    },
    {
      name: "The Portal Dashboard",
      url: "https://portal.unionbankph.com/business/login",
      image: require("../editable-stuff/img/the-portal-2.jpg"),
    },
    {
      name: "SMSRooms",
      url: "https://www.smsrooms.com/",
      image: require("../editable-stuff/img/smsrooms.jpg"),
    },
    {
      name: "Modliving",
      url: "https://modliving.com.ph/",
      image: require("../editable-stuff/img/modliving.jpg"),
    },
    {
      name: "BSA Mansion Makati",
      url: "https://bsamansion-makati.com/",
      image: require("../editable-stuff/img/bsa-mansion.jpg"),
    },
    {
      name: "Pontefino Hotel",
      url: "https://www.pontefinohotel.com/en/",
      image: require("../editable-stuff/img/pontifino.jpg"),
    },
    {
      name: "CEO Suite",
      url: "https://www.ceosuite.com/",
      image: require("../editable-stuff/img/ceo.jpg"),
    },
    {
      name: "Mezzo Hotel",
      url: "https://www.mezzohotel.com/",
      image: require("../editable-stuff/img/mezzo.jpg"),
    },
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message: "",
  images: [],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  categories: [
    {
      name: "Frontend",
      items: [
        "React.js",
        "Redux",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "jQuery",
        "HTML5",
        "CSS3 / SCSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      name: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "PHP",
        "Laravel",
        "CodeIgniter",
        "Prisma ORM",
        "REST API",
        "WebSockets",
      ],
    },
    {
      name: "Database",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      name: "DevOps & Tools",
      items: [
        "Git / GitHub / GitLab",
        "CI/CD Pipelines",
        "Docker",
        "Nginx",
        "Apache",
        "Linux Server Admin",
        "VS Code",
        "Postman",
      ],
    },
    {
      name: "Cloud & Services",
      items: ["AWS (EC2, S3, RDS)", "Google Cloud Platform", "Stripe API", "Vercel", "Heroku"],
    },
    {
      name: "AI & Integration",
      items: [
        "OpenAI API",
        "Anthropic Claude API",
        "Google Gemini API",
        "AI Chatbot Development",
        "Prompt Engineering",
      ],
    },
  ],
  // Legacy support
  hardSkills: [],
  softSkills: [],
};

// EDUCATION SECTION
const education = {
  show: true,
  heading: "Education",
  data: [
    {
      school: "Philippine State College of Aeronautics",
      degree: "Bachelor of Science in Computer Science",
      year: "2010 — 2014",
      location: "Villamor, Pasay City, Philippines",
    },
  ],
};

// REFERENCES SECTION
const references = {
  show: true,
  heading: "References",
  data: [
    {
      name: "Cedrick Avendaño",
      position: "Manager",
      company: "Collabera Technologies",
      email: "cedrick.avendano@collabera.com",
      phone: "09369296927",
    },
    {
      name: "Jude Aletas",
      position: "CEO / IT Head",
      company: "RapidCloud Philippines",
      email: "jude.aletas@rapidcloud.ph",
      phone: "09478273629",
    },
    {
      name: "Edrick Oco",
      position: "IT Manager",
      company: "Quantum Hotel Solutions Inc",
      email: "edrick@quantumhotels.com.ph",
      phone: "09285528575",
    },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently open to full-time Senior Full Stack Developer opportunities! If you know of any positions available, have any questions, or just want to say hi, please feel free to reach out.",
  email: "aninostephen01@gmail.com",
  phone: "09196881634",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  eHistory,
  contentImage,
  skills,
  leadership,
  getInTouch,
  experiences,
  education,
  references,
};
