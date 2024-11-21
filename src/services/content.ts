import { Bootstrap, Bulma, Css, Express, Git, Html, Javascript, Mongodb, React, Redux, Sass, Typescript } from "../components/SVGs/Icons";

const skills = [
  {
    name: 'html',
    logo: Html,
    descreption: 'The foundation of any website, a markup language for structuring and displaying content.',
  },
  {
    name: 'css',
    logo: Css,
    descreption: 'A language for styling web pages, defining colors, fonts, spacing, and other visual elements.',
  },
  {
    name: 'bootstrap',
    logo: Bootstrap,
    descreption: 'A set of pre-designed styles and components to quickly create responsive and stylish web pages.',
  },
  {
    name: 'bulma',
    logo: Bulma,
    descreption: 'A lightweight CSS framework with elegant components that simplifies building modern websites.',
  },
  {
    name: 'sass',
    logo: Sass,
    descreption: 'An extension of CSS that adds variables, nesting, and other features to make styling easier and more organized.',
  },
  {
    name: 'javascript',
    logo: Javascript,
    descreption: 'A programming language that makes websites interactive (e.g., buttons, pop-ups).',
  },
  {
    name: 'git',
    logo: Git,
    descreption: 'A version control system for tracking and managing code changes, great for teamwork.',
  },
  {
    name: 'typescript',
    logo: Typescript,
    descreption: 'A "supercharged" version of JavaScript with type-checking to simplify development and reduce errors.',
  },
  {
    name: 'react',
    logo: React,
    descreption: 'A library for building interactive user interfaces using components.',
  },
  {
    name: 'redux',
    logo: Redux,
    descreption: 'A tool for managing application state, making it easier to work with data.',  
  },
  {
    name: 'express',
    logo: Express,
    descreption: 'A minimalist backend framework for building APIs and web applications on Node.js.',  
  },
  {
    name: 'mongodb',
    logo: Mongodb,
    descreption: 'A database where data is stored as JSON-like objects, perfect for modern applications.',  
  },
];

const projects = [
  {
    key: 'value'
  },
  {
    key: 'value'
  },
  {
    key: 'value'
  },
];

export const content = {
  HomeSection: {
    greating: [
      "Hey,",
      "I'm Artem",
      "Full Stack Developer"
    ],
    descreption: "Dedicated to clean code, seamless collaboration, and helping your team deliver outstanding results.",
    counter: {
      projectsAmount: projects.length,
      carrierStarted: '2021',
      skillsAmount: skills.length
    }
  },
  AboutSection: {
    sectionName: 'About me',
    greating: 'Hello!',
    paragraphsList: [
      {
        paragraph: "My name is Artem and I specialize in Web Developement that utilizes JavaScript TypeScript, React, Express, and MongoDB etc."
      },
      {
        paragraph: "I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving."
      },
      {
        paragraph: "When I'm not coding, I am writing blogs, reading, or picking up some new hands-on art project like photography."
      },
      {
        paragraph: "With a strong focus on problem-solving, client and project management, and analytical thinking, I am self-motivated and equipped to deliver robust web solutions that align with business objectives."
      },
    ]
  },
  SkillsSection: {
    sectionName: 'Skills',
    sectionHeader: 'I am striving to never stop learning and improving',
    skillsList: skills,
  }
}