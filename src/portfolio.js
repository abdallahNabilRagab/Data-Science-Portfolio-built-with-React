/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdullah Nabil",
  title: "Hi all, I'm Abdullah",
  subTitle: emoji(
    "Data Scientist & Machine Learning Engineer 🚀 specializing in building data-driven solutions, predictive models, and intelligent recommendation systems. Passionate about transforming raw data into actionable insights and scalable ML applications."
  ),
  resumeLink:
    "ضع_هنا_رابط_السيرة_الذاتية_PDF",
  displayGreeting: true
};


// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/abdallahNabilRagab",
  linkedin: "https://www.linkedin.com/in/abdullah-nabil-51a6a727a",
  gmail: "abdallah.nabil.ragab94@gmail.com",
  kaggle: "https://www.kaggle.com/abdallahnabil94",
  youtube: "https://www.youtube.com/@DrAbdullahNabil",
  tiktok: "https://www.tiktok.com/@abdallah.nabil5",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "DATA SCIENTIST BUILDING INTELLIGENT DATA SYSTEMS, ANALYTICS PLATFORMS AND AI-DRIVEN APPLICATIONS",

  skills: [
    emoji(
      "⚡ Design and develop end-to-end data systems integrating analytics, machine learning and web applications"
    ),
    emoji(
      "⚡ Build intelligent recommendation and analytics platforms transforming raw data into actionable insights"
    ),
    emoji(
      "⚡ Develop full data workflows including data processing, backend APIs and interactive dashboards"
    ),
    emoji(
      "⚡ Deploy scalable analytical systems combining Data Science with modern web technologies"
    )
  ],

  /* SOFTWARE SKILLS */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Data Science",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Machine Learning Systems",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Data Analytics",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Statistics",
      fontAwesomeClassname: "fas fa-square-root-alt"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "Scikit-Learn",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Recommendation Systems",
      fontAwesomeClassname: "fas fa-star"
    },
    {
      skillName: "Data Visualization",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "Streamlit",
      fontAwesomeClassname: "fas fa-window-maximize"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName:
        "Helwan University - Faculty of Commerce (English Section)",
      logo: require("./assets/images/images_bis.png"),
      subHeader:
        "Master's Degree in Business Information Systems (BIS) - AI & Advanced Recommendation Systems Research",
      duration: "2021 - Present",
      desc:
        "Currently pursuing a Master's degree specializing in Artificial Intelligence applications for Business Information Systems. Research focuses on advanced hybrid recommendation systems, machine learning optimization, and intelligent decision-support systems.",
      descBullets: [
        "Research Topic: Advanced Hybrid Recommendation Systems",
        "End-to-End Machine Learning Pipeline Design",
        "Model Optimization & Evaluation",
        "Applied AI for Business Intelligence and Data-Driven Decision Making"
      ]
    },

    {
      schoolName:
        "Helwan University - Faculty of Commerce (English Section)",
      logo: require("./assets/images/images_bis.png"),
      subHeader:
        "Postgraduate Diploma in Business Information Systems",
      duration: "2020 - 2021",
      desc:
        "Postgraduate studies focused on Business Intelligence, Data Analytics, Information Systems Architecture, and advanced data-driven business solutions.",
      descBullets: [
        "Business Intelligence & Analytics",
        "Database Systems & Data Modeling",
        "Information Systems Strategy",
        "Applied Data Analysis for Business Applications"
      ]
    },

    {
      schoolName:
        "Higher Institute of Management and Information Technology - Kafr El-Sheikh",
      logo: require("./assets/images/himit.png"),
      subHeader:
        "Bachelor's Degree in Management Information Systems (MIS)",
      duration: "2013 - 2017",
      desc:
        "Studied Management Information Systems combining business administration, software systems, and data management foundations.",
      descBullets: [
        "Programming Fundamentals & Databases",
        "System Analysis and Design",
        "Management & Information Systems",
        "Foundations of Data Analysis and Computing"
      ]
    }
  ]
};


// Your top 4 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Machine Learning & Predictive Modeling",
      progressPercentage: "85%"
    },
    {
      Stack: "Recommender Systems & Model Optimization",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Analysis & Feature Engineering",
      progressPercentage: "90%"
    },
    {
      Stack: "Python, SQL & ML Tools",
      progressPercentage: "88%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Freelance Data Scientist & Machine Learning Engineer",
      company: "Independent Contractor",
      companylogo: require("./assets/images/freelanceLogo.png"), // يمكنك وضع لوجو عام أو حذفه
      date: "2024 – Present",
      desc: "Providing end-to-end data science and machine learning solutions for clients, including data analysis, predictive modeling, and recommendation systems development.",
      descBullets: [
        "Developed and optimized machine learning models for real-world business problems",
        "Built hybrid recommender systems using collaborative and content-based filtering",
        "Performed advanced data preprocessing, feature engineering, and model evaluation",
        "Deployed ML applications using Streamlit and integrated scalable workflows"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Featured Data Science Projects",
  subtitle: "Selected machine learning and recommendation systems deployed as interactive applications",
  projects: [
    {
      image: require("./assets/images/project1.png"), // ضع صورة مناسبة أو اسكرين شوت
      projectName: "Flight Fare Prediction System",
      projectDesc:
        "A machine learning-based web application that predicts flight ticket prices using advanced feature engineering and regression modeling techniques.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://data-science-project-for-flight-fare-prediction-9hdyn3xrqgqcyv.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/project2.png"),
      projectName: "Intelligent Recommendation Engine",
      projectDesc:
        "A hybrid recommendation system combining collaborative and content-based filtering to generate personalized recommendations with optimized model performance.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://intelligent-recommendation-engine-ddgjugmkvrcyrmeutdmiwy.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/project3.png"),
      projectName: "Smart Merchant Recommendation System",
      projectDesc:
        "A data-driven recommendation platform designed to match users with relevant merchants using similarity modeling and ranking optimization techniques.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://smart-merchant-recommendation-system-xnbptmrzpipgkrb46nexle.streamlit.app/"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Professional Development 🎓"),
  subtitle:
    "Formal training and certifications in Data Science and Machine Learning.",

  achievementsCards: [
    {
      title: "Data Science Program – Epsilon AI",
      subtitle:
        "Comprehensive training covering Machine Learning, Data Analysis, Model Evaluation, and real-world ML project development.",
      image: require("./assets/images/epsilonLogo.png"), 
      imageAlt: "Epsilon AI Logo",
      footerLink: []
    },
    {
      title: "Machine Learning Internship – Epsilon AI",
      subtitle:
        "Hands-on internship experience applying data preprocessing, feature engineering, and model development on practical industry-focused projects.",
      image: require("./assets/images/epsilonLogo.png"),
      imageAlt: "Epsilon AI Logo",
      footerLink: []
    }
  ],
  display: true
};



const blogSection = {
  title: "📘 Technical Research & Engineering Insights",
  subtitle:
    "Hybrid Recommendation Systems  |  Adaptive ML Architectures  |  Model Performance Optimization  |  Scalable Intelligent Systems 🚀",

  displayMediumBlogs: "false",

  blogs: [
    {
      url: "#",
      title: "🔍 Designing a Scalable Hybrid Recommender System",
      description:
        "A structured technical exploration of hybrid recommendation architectures.\n" +
        "Integrating collaborative filtering and content-based models.\n" +
        "Enhancing scalability using efficient similarity search techniques.\n" +
        "Focused on large-scale, production-ready systems."
    },
    {
      url: "#",
      title: "⚙️ Production-Grade Machine Learning Optimization",
      description:
        "Advanced strategies for improving model accuracy.\n" +
        "Reducing computational overhead and latency.\n" +
        "Optimizing memory usage and inference speed.\n" +
        "Ensuring robust and scalable ML deployment."
    }
  ],

  display: true
};

// Talks Sections
// AI Conferences & Research Engagements
const talkSection = {
  title: "AI Conferences & Research Engagements",
  subtitle: emoji(
    "Active participation in leading AI conferences and research-driven industry discussions, focusing on intelligent systems, hybrid recommendation architectures, and professional networking."
  ),

  talks: [
    {
      title: "AI Everything Middle East & Africa 2026",
      subtitle: "Conference Participation & Professional Networking | Cairo, Egypt",
      slides_url: "https://www.linkedin.com/posts/abdullah-nabil-51a6a727a_artificialintelligence-datascience-airesearch-activity-7428596990046801921-YrR4?utm_source=share&utm_medium=member_android&rcm=ACoAAEQXBCYBhFw2thBJ6GGVfaNNCakNj_gsEWw",
      event_url: "https://www.linkedin.com/posts/abdullah-nabil-51a6a727a_artificialintelligence-datascience-airesearch-activity-7428596990046801921-YrR4?utm_source=share&utm_medium=member_android&rcm=ACoAAEQXBCYBhFw2thBJ6GGVfaNNCakNj_gsEWw"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "01018956526",
  email_address: "abdallah.nabil.ragab94@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
