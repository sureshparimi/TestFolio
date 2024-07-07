
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Suresh Parimi",
  title: "Hi all, I'm Suresh",
  subTitle: emoji("Automation Test Consultant,JIRA Administrator with Azure DevOps 🚀 automating and optimizin the business processes to help businesses focus on core problems of the business."
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/sureshparimi",
  linkedin: "https://www.linkedin.com/in/sparimi",
  gmail: "reachparimi@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/11113805/suresh-parimi"
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Optimizing testing business processes with Software Automation tools, JIRA Administration and DevOps",
  skills: [
    emoji("⚡ Playwright Cypress Pytest RobotFramework Selenium Postman Jmeter RestAssured Appium "),
    emoji("⚡ Web Mobile REST API and Microservices testing"),
    emoji("⚡ CI/CD using Azure DevOps, Jenkins, AWS"),
    emoji("⚡ Optimizing, improving the test management process")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Playwright",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Cypress",
      fontAwesomeClassname: "fab fa-selenium-alt"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fab fa-pytest"
    },
    {
      skillName: "Pytest",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "RESTAssured",
      fontAwesomeClassname: "fab fa-postman"
    },
    {
      skillName: "Azure DevOps",
      fontAwesomeClassname: "fab fa-cypress"
    },
    {
      skillName: "Jmeter",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-bdd"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Test Process Optimization",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Test Management",
      fontAwesomeClassname: "fas fa-jenkins"
    },
    {
      skillName: "JIRA Administration",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "JNTU,Hyderabad",
      logo: require("./assets/images/jntuhlogo.png"),
      subHeader: "Bachelors in Electrical and Electornics Engineering",
      duration: "May 1999 - April 2003",
      desc: "My academic project sold to Australian power project company - Optimizing the loss of Power transmission using neural networks",
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web - Playwright, Cypress, Selenium",  //Insert stack or technology you have experience in
      progressPercentage: "100%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Automation - REST APIs/Microservices",
      progressPercentage: "90%"
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    },
    {
      Stack: "Azure DevOps",
      progressPercentage: "90%"
    },
    {
      Stack: "JIRA Administration",
      progressPercentage: "100%"
    },
    {
      Stack: "Agile Testing optimization",
      progressPercentage: "100%"
    },
    {
      Stack: "Test Management",
      progressPercentage: "100%"
    },
    {
      Stack: "AWS",
      progressPercentage: "60%"
    },
    {
      Stack: "CI/CD",
      progressPercentage: "80%"
    },
    {
      Stack: "Github",
      progressPercentage: "60%"
    },
    {
      Stack: "Github Actions",
      progressPercentage: "80%"
    },
    {
      Stack: "System Testing",
      progressPercentage: "100%"
    },
    {
      Stack: "User Acceptance Testing",
      progressPercentage: "100%"
    },
    {
      Stack: "Usablity Testing",
      progressPercentage: "100%"
    },
    {
      Stack: "System Integration Testing",
      progressPercentage: "100%"
    },
    {
      Stack: "Functional Testing",
      progressPercentage: "100%"
    },
    {
      Stack: "Test Planning/Strategies",
      progressPercentage: "100%"
    },
    {
      Stack: "Test Process improvement",
      progressPercentage: "100%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
     {
      role: "Automation Test Engineer",
      company: "Canon Euurope",
      date: "November 2023 – Present",
      desc: "Automation Test and Release Manager",
      descBullets: [
        "Advocated for Test Frameworks: Initiated the adoption of robust test frameworks, emphasizing their role in ensuring high-quality products and services",
        "Developed Comprehensive Test Strategies: Implemented detailed test strategies outlining objectives, scope, resource plans, RACI matrices, defect management processes, and schedules",
        "Collaborated on Test Environment Governance: Spearheaded the definition of governance processes for test environments, data management, and non-production availability across various testing types",
        "Supported Automation Initiatives: Led efforts to secure funding and approval for automation initiatives, collaborating closely with the Engineering Chapter to allocate resources effectively",
        "Maintained Thorough Documentation: Ensured meticulous documentation of test strategies, plans, cases, results, requirement traceability matrices, and other testing artifacts",
        "Coordinated and Coached Teams: Orchestrated team efforts in FAT, BAT, Business Regression Testing (BRT), and Data Migration testing, providing coaching and support throughoutg",
        "Developed an automated solution that saved 30 hours of manual hours per week of the team's effort to improve the release readiness checks using Python, JIRA, Azure DevOps",
        "Introduced Playwright for Automation: Pioneered the adoption of Playwright for testing web and REST API services, significantly improving end-to-end testing capabilities"
        "Developed Automation Test Frameworks: Innovated by developing web and REST API automation frameworks using Playwright, Selenium, and UFT, streamlining testing processes",
        "Improved Test Coverage: Elevated overall test coverage by 11% to achieve a comprehensive 92%, through proactive testing strategies and tool implementations.",
        "Automated Release Readiness Checks: Engineered an automated solution using Python, JIRA, and Azure DevOps, saving 30 hours weekly and enhancing release deployment efficiency",
        "Conducted Root Cause Analysis and Improvement: Initiated and implemented improvement actions derived from root cause analysis, effectively reducing defect leakages across multiple domains",
        "Improved the existing software testing processes across Agile, Automation and Performance testing areas",
        "Tested, Delivered mulitple projects successfully with in the domain, as a Test Consultant and Release manager, on demand",
        "Administered JIRA for Organizational Implementation: Spearheaded the administration of JIRA, overseeing its implementation, migration, and customization to foster a DevOps mindset", 
        "Mentored and Coached Team Members: Mentored team members in test automation and release management processes, fostering skill development and knowledge sharing"
        
      ]
     },
        {
      role: "Automation Test Engineer",
      company: "Pfizer",
      companylogo: require("./assets/images/pfizer.png"),
      date: "April 2020 – Present",
      desc: "Automating testing of infrastructure as a code platform that helps in automatically build, deploy and host websites",
      descBullets: [
        "Automate the testing of Cloud based infrastructure as a code platform using pytest-BDD, selenium,Robot Framework,Postman",
        "Automating testing of various AWS components such as EC2, SNS,SQS,S3,EC2 etc using Pytest-BDD, Robot Framework",
        "Develop Automated testing frameworks to be integrated with CI/CD using Jenkins,Git",
        "Set up of Software testing best practices in Agile scrum team",
        "Engaged in improving the quality processes and frameworks deployed across Pfizer digital",
        "Mentor the QA members in testing the applications/ building the frameworks"
      ]
     },
    {
      role: "Automation Test Engineer",
      company: "Pfizer",
      companylogo: require("./assets/images/pfizer.png"),
      date: "April 2020 – Present",
      desc: "Automating testing of infrastructure as a code platform that helps in automatically build, deploy and host websites",
      descBullets: [
        "Automate the testing of Cloud based infrastructure as a code platform using pytest-BDD, selenium,Robot Framework,Postman",
        "Automating testing of various AWS components such as EC2, SNS,SQS,S3,EC2 etc using Pytest-BDD, Robot Framework",
        "Develop Automated testing frameworks to be integrated with CI/CD using Jenkins,Git",
        "Set up of Software testing best practices in Agile scrum team",
        "Engaged in improving the quality processes and frameworks deployed across Pfizer digital",
        "Mentor the QA members in testing the applications/ building the frameworks"
      ]
    },
    {
      role: "QA Lead",
      company: "Epsilon(Publicis Group)",
      companylogo: require("./assets/images/epsilon.png"),
      date: "April 2019 – April 2020",
      desc: "Worked as Quality Assurance Lead building the quality products developed using infrastructure as a code using AWS,Ansible nad Terraform etc",
      descBullets: [
        "Project#1: Automate the testing of Cloud based infrastructure as a code platform using pytest,Selenium,Robot Framework",
        "Project#2: Automated the REST APIs and Microservices testing of Big data eco system consists of Hadoop,Kafka,Data Lakes,NoSQL Database etc.",
        "Develop Automated testing frameworks to be integrated with CI/CD using Jenkins,Git,Docker",
        "Set up of Software testing best practices in Remotely distributed Agile scrum team",
        "Engaged in improving the quality processes and frameworks deployed across Epsilon Product development department",
        "Handled the user acceptance testing of the features developed and demoed to the end users",
        "Developed the user acceptance test cases based off User Stories and Epics",
        ]
    },
    {
      role: "Senior Quality Assurance Lead",
      company: "Gorodon Food Services(JRD Systems Pvt.Ltd)",
      companylogo: require("./assets/images/gfs.png"),
      date: "December 2014 – March 2019",
      desc: "Developed the Automated software test solutions using Selenium,Python,Pytest,Robot Framework,Cypress,Jenkins,JIRA",
      descBullets: [
        "Automated the testing of Supply chain management applications built on Java tech stack using Selenium and Java,Page Object Model,Cucumber,TestNG,Maven etc",
        "Automated the testing of Point of Sales systems built on Python using Robot Framework",
        "Develop Automated testing frameworks for testing of REST APIs,Batch mode data cleance,validation and buisiness logic in CI/CD environment.",
        "Set up of Software testing best practices to be followed with in the agile teams and across the departments",
        "Built the customized JIRA dashboards to have an insight into the software Testing projects run across multiple product streams",
        "Mentor the QA members in testing the applications/ building the frameworks and in best testing practices, test design techniques"
        ]
    }
 ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sureshparimi", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Brands I worked with",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO DELIVER THEIR PRODUCTS/PRJECTS WITH HIGH QUALITY",
  projects: [
    {
      image: require("./assets/images/T-mobile.png"),
      link: "https://www.t-mobile.nl/"
    },
    {
      image: require("./assets/images/canon.png"),
      link: "https://www.canon-europe.com/"
    },
    {
      image: require("./assets/images/infosys.png"),
      link: "https://www.infosys.com/"
    },
    {
      image: require("./assets/images/emids.png"),
      link: "https://emids.com"
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Professional Recommendations "),
  subtitle: "Recommendations,Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Linkedin Recommendation 1",
      subtitle: "I helped Xuan with testing of one of the critical projects that she is handling, for Test data management best practices",
      image: require("./assets/images/Xuan_reco1"),
      footerLink: [
        { name: "Linkedin Recommendation", url: "https://www.linkedin.com/in/sparimi/"}
      ]
    },
    {
      title: "Linkedin Recommendation 2",
      subtitle: "Worked with Larry in one of the critical projects in Gordon Food Services",
      image: require("./assets/images/Larry_reco2"),
      footerLink: [{ name: "Linkedin Recommendation", url: "https://www.linkedin.com/in/sparimi/"}]
    },

    {
      title: "Linkedin Recommendation 3",
      subtitle: "Implemented Automation test projects for VIAVI solutions",
      image: require("./assets/images/devangreco4"),
      footerLink: [
         { name: "Linkedin Recommendation", url: "https://www.linkedin.com/in/sparimi/"}]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Testing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@reacharimi/data-driven-testing-using-robot-framework-and-excel-24ff45b0551f",
      title: "Data Driven Testing using Robot Framework and Excel",
      description: "Do you know how easy it is to setup a scalable automated data driven testing using Robot Framework?"
    },
    {
      url: "https://medium.com/@reacharimi/approach-to-select-the-browsers-and-versions-for-automated-software-testing-8b672e2dc498",
      title: "Approach to select browsers and platforms to test your products?",
      description: "As a Software Tester, we should be ready to test / provide more test coverage on different browsers and devices using automation suites"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Improve quality using BDD",
      subtitle: "Know how to write good user stories",
      slides_url: "Coming soon",
      event_url: "Coming soon"
    },
    {
      title: "Automating REST API Testing - Postman",
      subtitle: "Automate REST APIs using Postman/Newman",
      slides_url: "https://www.youtube.com/watch?v=XL3uO5ZUs2k&feature=youtu.be",
      event_url: "https://www.youtube.com/watch?v=XL3uO5ZUs2k&feature=youtu.be"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK AND SHARE WHAT I KNOW IN TESTING",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Suresh-Parimi-from-Berlin--Germany-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Hi, I'm based out of Berlin,to hire me or just to say Hello, my inbox is open for all.",
  number: "+91-949-180-6256",
  Skype:"sureshparimi1",
  email_address: "suresh.parimi2@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : ""//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
