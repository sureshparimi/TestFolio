﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Suresh Parimi",
  title: "Hi all, I'm Suresh",
  subTitle: emoji("A passionate Software Tester 🚀 providing quality assurance solutions for small,medium and big size companies and building scalable automated software testing frameworks for Web and Mobile applications, REST APIs and Microservices with Python / Selenium / Postman & newman / Pytest/ Java and some other cool libraries and frameworks."),
  resumeLink: "https://www.linkedin.com/in/sparimi"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/sureshparimi",
  linkedin: "https://www.linkedin.com/in/sparimi",
  gmail: "suresh.parimi2@gmail.com",
  facebook: "https://www.facebook.com/iamparimi/",
  //medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/11113805/suresh-parimi"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE TEST CONSULTANT WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Test highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Test REST APIs & Microservices of prodcuts/applications"),
    emoji("⚡ Test Infrastructure as a code built on AWS,Terraform "),
    emoji("⚡ Building scalable automated software test frameworks using Python/Selenium/Cypress/Robot Framework/Postman/SoapUI")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fab fa-selenium-alt"
    },
    {
      skillName: "Pytest",
      fontAwesomeClassname: "fab fa-pytest"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fab fa-postman"
    },
    {
      skillName: "Cypress",
      fontAwesomeClassname: "fab fa-cypress"
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "BDD",
      fontAwesomeClassname: "fab fa-bdd"
    },
    {
      skillName: "MongoDB-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-jenkins"
    },
    {
      skillName: "docker",
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
      desc: "Participated in the power tranmission loss prevention project using neural networks",
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Automation Testing of web & Mobile applications",  //Insert stack or technology you have experience in
      progressPercentage: "100%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Automation - REST APIs/Microservices",
      progressPercentage: "90%"
    },
    {
      Stack: "Python Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Robot Framework",
      progressPercentage: "90%"
    },
    {
      Stack: "JIRA",
      progressPercentage: "80%"
    },
    {
      Stack: "Testing Agile",
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
      Stack: "Shell Scripting",
      progressPercentage: "60%"
    },
    {
      Stack: "Git",
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
      image: require("./assets/images/Xuan Liao-reco1"),
      footerLink: [
        { name: "Linkedin Recommendation", url: "https://www.linkedin.com/in/sparimi/"}
      ]
    },
    {
      title: "Linkedin Recommendation 2",
      subtitle: "Worked with Larry in one of the critical projects in Gordon Food Services",
      image: require("./assets/images/Larry-reco2"),
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
      title: "How to tell stories using test cases using BDD",
      subtitle: "Know how to write good test cases using BDD",
      slides_url: "Coming soon",
      event_url: "Coming soon"
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

  userName : "geekivillager"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};