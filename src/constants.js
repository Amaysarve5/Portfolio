// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import ghrualogo from './assets/education_logo/gh-logo.jpg';
import sfsLogo from './assets/education_logo/sfs_logo.png';
import spsLogo1 from './assets/education_logo/sps_logo1.png';



// Project Section Logo's
import passop from './assets/work_logo/passop.png';
import modera from './assets/work_logo/e-commerce.png';
import spotify from './assets/work_logo/spotify_img.png';
import stonepaper from './assets/work_logo/stone_paper_game.png';
import taskapp from './assets/work_logo/todo_app.png';
import twitter from './assets/work_logo/Twitter.png';
import tictactoe from './assets/work_logo/tic_tac_toe.png';
import NewsAggrigator from './assets/work_logo/NewsAggrigator.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: ghrualogo,
      school: "Gh Raisoni University, Amravati",
      date: "current",
      desc: "I am pursuing my Bachelor's degree in Computer Science and Engineering from G H Raisoni University, Amravati. My academic journey has exposed me to a wide range of subjects, from Data Structures and Algorithms to Web Development and Database Management Systems. Along the way, I’ve applied theoretical knowledge to real-world projects, strengthening my problem-solving skills and deepening my passion for software development.",
      degree: "Bachelor of technology - CSE (Computer Science Engineering)",
    },
    {
      id: 1,
      img: sfsLogo,
      school: "S.F.S. High School & Junior College",
      date: "2023",
      desc: "I completed my class 12 education from ,St. Francis De'Sales High School, Nagpur, under the HSC board, where I studied Physics, Chemistry,Mathematics and Biology ",
      degree: "Senior Secondary (Science – PCMB)",
    },
    {
      id: 2,
      img: spsLogo1,
      school: "Sayona Public School, Nagpur",
      date: "2021",
      desc: "I completed my class 10 education from Sayona Public School, Nagpur, under the SSC board, where I studied foundational subjects.",
      degree: "Secondary",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "News Aggregator Web Application",
      description:
        "A full-stack news aggregator that displays real-time news using NewsAPI. Built with React and Tailwind CSS for a responsive UI, and Node.js with Express for secure API handling. Supports category-wise filtering and dynamic content rendering.",
      image: NewsAggrigator,
      tags: ["React JS", "Node.js", "Express","JavaScript","Tailwind Css","NewsAPI"],
      github: "https://github.com/Amaysarve5/News_Aggrigator",
      webapp: "https://news-aggrigator-mrv6.onrender.com/",
    },
    {
      id: 1,
      title: "PassOp – Password Manager",
      description:
        "PassOp is a full-stack password manager application with a React + Vite + TailwindCSS frontend and a Node.js + Express + MongoDB backend.",
      image: passop,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Tailwind Css"],
      github: "https://github.com/Amaysarve5/Password-Manager.git",
      webapp: "https://github.com/Amaysarve5/Password-Manager.git",
    },
    {
      id: 2,
      title: "MODERA",
      description:
        "Modera is a fully responsive e-commerce web application designed for clothing sales. Built with the MERN (MongoDB, Express.js, React, Node.js) stack, Modera offers a clean user experience with features such as product browsing, category filtering, cart management, admin panel, and secure authentication.",
      image: modera,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Amaysarve5/MODERA.git",
      webapp: "https://modera.onrender.com/",
    },
    {
      id: 3,
      title: "Twitter UI Clone",
      description:
        "UI of X (formerly Twitter) using HTML and Tailwind CSS. Built with a focus on clean, responsive design, this project helps sharpen UI development skills while closely mimicking a modern social media interface.",
      image: twitter,
      tags: ["HTML", "TailwindCSS"],
      github: "https://github.com/Amaysarve5/x-clone.git",
      webapp: "https://twitter-clone-01.netlify.app/",
    },
    {
      id: 4,
      title: "iTask",
      description:
        "A sleek and efficient to-do list app built with Vite + React to enhance task management and boost productivity.",
      image: taskapp,
      tags: ["React JS", "Tailwindcss"],
      github: "https://github.com/Amaysarve5/Todo-list-app.git",
      webapp: "https://todo-list-app-zeta-flax.vercel.app/",
    },
    {
      id: 5,
      title: "Spotify UI Clone",
      description:
        "The Spotify Clone UI is a front-end project that replicates the look and feel of Spotify. This UI includes essential components like the homepage, music player, playlists, and a responsive design.",
      image: spotify,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Amaysarve5/Spotify-Ui-Clone.git",
      webapp: "https://github.com/Amaysarve5/Spotify-Ui-Clone.git",
    }
  ];  