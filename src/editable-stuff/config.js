// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f",
  firstName: "Stephen",
  middleName: "",
  lastName: "Anino",
  message: " Transforming Your Imagination into Reality. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/aninostephen",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/stepshadow08",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/17AG1D9_5YyTK1NxxXEG4KWVEHxXfogLj/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ssanino.jpg"),
  imageSize: 375,
  message:
    "With 8 years of dedicated experience as a Web Developer, I am well-versed in meeting the comprehensive demands of this role. Proficient in database structuring, interactive website implementation, plugin development, and building websites from the ground up, I consistently deliver successful projects that not only meet, but exceed client expectations. My expertise extends to crafting mobile-responsive websites, ensuring client satisfaction through exceptional quality and functionality.",
  resume: "https://docs.google.com/document/d/17AG1D9_5YyTK1NxxXEG4KWVEHxXfogLj/edit",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Employment History",
  gitHubUsername: "stephenanino", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const eHistory = {
  show: true,
  heading: "Employment History",
  specific: [
    {
      'companyName': 'Collabera Technologies',
      'startDate': 'November, 2021',
      'endDate': 'November, 2023',
      'address': '17th & 40th Floor, Rufino Pacific Tower, 6784 Ayala Avenue , Makati City, Philippines',
      'position': 'Web Developer (Reactjs Developer)',
      'description': 'Collabera Digital is at the forefront of innovation, where collaborative minds merge with generative algorithms to drive transformative solutions. We engineer solutions that revolutionise industries and set new benchmarks for transformative excellence.',
      'whatIDo': [
        'Developed and maintain the current system using JavaScript with the Reactjs library for the Frontend.',
        'We Use redux state to make easier to manage and update data across in different component.',
        'Collaborated with the Backend team using APIs for data exchange.',
        'We use CI/CD pipeline for validating code and deployment using Gitlab',
        'Adding features and fixing frontend bugs for both the Unionbank Portal and the BackOffice application.',
        'Participated in daily Scrum meetings for project updates and coordination.',
        'Maintained and contributed to reusable components on the Frontend using Reactjs'
      ],
      'mostWork': [
        'Development for Unionbank “The Porta”l application',
        'Development for Unionbank Backoffice',
        'Content Module.'
      ]
    },
    {
      'companyName': 'Quantum Hotel Solution Inc',
      'startDate': 'March, 2018',
      'endDate': 'March, 2021',
      'address': 'Unit D, Level 21 Rufino Pacific Tower, 6784 Ayala Avenue cor. VA Rufino St. 1200',
      'position': 'Fullstack Web Developer (PHP and Reactjs)',
      'description': 'Quantum Hotels and Resorts hospitality management, international sales and online reservation services were specifically developed to meet the requirements and standards of high to mid-level serviced apartments, residences, resorts and hotels.',
      'whatIDo': [
        'Developed and maintaining current system written in PHP and Javascript',
        'Involved in Developing Module based on project specification',
        'Involved in designing and development in all module based on the flow of the business process',
        'Involved also in API development using laravel.',
        'Responsible for installing, configuration in codeigniter, laravel, apache and mysql in hosting server',
        'Development for mobile responsive in different web application',
        'Identifying bugs and solving issue in the code',
        'Working on bootstrap that allow us to boost our productivity',
        'Maintain a reusable component in frontend using Reactjs',
        'Monitor website performance using google page insights'
      ],
      'mostWork': [
        'Property Management System(PMS) Development for Hotel',
        'Booking Engine Development',
        'Modules Developments',
        'OTA`s Development',
        'Wordpress management'
      ]
    },
    {
      'companyName': 'RapidcloudPhilippines Inc.',
      'startDate': 'Feb, 2014',
      'endDate': 'Feb, 2018',
      'address': 'Unit 1506, Cityland 10 Tower 2, H.V. Dela Costa Street, Valero Access Road 4, Salcedo Village, Makati, 1200 Metro Manila',
      'position': 'Fullstack Web Developer',
      'description': 'Rapidcloud PH Inc is an IT Firm that provides Web Application such as E-commerce, Web Customization and Informative Website.',
      'whatIDo': [
        'Developed and maintaining current system written in PHP and Javascript',
        'Creating Website using frameworks, well structure Maintainable and Reusable Code',
        'Object Oriented Structure to make more Modular for fast development.',
        'Creating template and plugins for WordPress platform.',
        'Creating Mockup and Convert to Wordpress Template.',
        'Codeigniter Development MVC Framework.',
        'Editing Plugins or Template of Wordpress.',
      ],
      'mostWork': []
    }
  ],
};

const contentImage = {
  show: true,
  heading: "Some of my Work",
  specific: [
    {
      'name': 'Unionbank The Portal',
      'url': 'https://www.unionbankph.com/corporate/the-portal',
      'image': require("../editable-stuff/img/the-portal.jpg"),
    },
    {
      'name': 'The Portal Dashboard',
      'url': 'https://portal.unionbankph.com/business/login',
      'image': require("../editable-stuff/img/the-portal-2.jpg"),
    },
    {
      'name': 'SMSRooms',
      'url': 'https://www.smsrooms.com/',
      'image': require("../editable-stuff/img/smsrooms.jpg"),
    },
    {
      'name': 'Modliving',
      'url': 'https://modliving.com.ph/',
      'image': require("../editable-stuff/img/modliving.jpg"),
    },
    {
      'name': 'BSA Mansion Makati',
      'url': 'https://bsamansion-makati.com/',
      'image': require("../editable-stuff/img/bsa-mansion.jpg"),
    },
    {
      'name': 'Pontefino Hotel',
      'url': 'https://www.pontefinohotel.com/en/',
      'image': require("../editable-stuff/img/pontifino.jpg"),
    },
    {
      'name': 'CEO Suite',
      'url': 'https://www.ceosuite.com/',
      'image': require("../editable-stuff/img/ceo.jpg"),
    },
    {
      'name': 'Mezzo Hotel',
      'url': 'https://www.mezzohotel.com/',
      'image': require("../editable-stuff/img/mezzo.jpg"),
    }
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/ssanino.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/ssanino.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "PHP", value: 85 },
    { name: "MySQL", value: 70 },
    { name: "Javascript", value: 90 },
    { name: "Jquery", value: 90 },
    { name: "Reactjs/Redux", value: 75 },
    { name: "HTML/CSS", value: 95 },
    { name: "API/Ajax", value: 80 },
    { name: "Codeigniter", value: 75 },
    { name: "GIT", value: 75 },
  ],
  softSkills: [
    { name: "CI/CD Pipeline", value: 50 },
    { name: "JIRA Project Management", value: 45 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Web Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me or Call me at",
  email: "aninostephen01@gmail.com | 09196881634",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, eHistory, contentImage, skills, leadership, getInTouch, experiences };
