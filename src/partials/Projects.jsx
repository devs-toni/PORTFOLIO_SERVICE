import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import bianxi from '../assets/works/bianxi.png';
import movies from '../assets/works/movies.png';
//import wishlist from '../assets/works/wishlist.png';
//import calculator from '../assets/works/calculator.png';
//import calendar from '../assets/works/calendar.png';
//import hangman from '../assets/works/hangman.png';
//import shop from '../assets/works/shop.png';
import smoothsick from '../assets/works/smooth.png';
//import lord from '../assets/works/lord.png';
import expenditures from '../assets/works/gastos.png';
import Slider from './specific/Slider/Slider';

function Projects() {

  const { text } = useLanguage();
  const listRef = useRef();

  const works = [
    {
      id: 0,
      name: "Bianxi Store",
      image: bianxi,
      technologies: "< SPRINGBOOT + REACT />",
      description: "... backend developed with SpringBoot, Spring Security and Spring Data with JPA, data persistence managed with MySQL and dependencies management with Maven Lifecycle. Hexagonal arcuitecture and clean code, integration tests with TestContainers to simulate a real database, 100% testable, scalable and maintainable",
      description2: "...frontend developed with React and styles implemented with Sass, using Google SSO and Stripe for the payment",
      description3: "... devOps implement CI/CD pipeline using GitHub Actions, with build (push, pull request) and release workflows. Kubernetes with Docker containers to manage deployment in my own server",
      link: "https://bianxi.arcprojects.es"
    },
    {
      id: 1,
      name: "Smoothsick",
      image: smoothsick,
      technologies: "< NODE & TYPESCRIPT + REACT />",
      description: "... backend developed with Node, using Typescript, Express.js and Cloudinary, data persistence managed with MongoDB using Atlas and dependencies management with NPM. Clean code, 100% scalable and maintainable",
      description2: "...frontend developed with React and styles implemented with Tailwind, using Google SSO for the login.",
      description3: "... devOps implement CI/CD pipeline using GitHub Actions, with build (push, pull request) and release workflows. Kubernetes with Docker containers to manage deployment in my own server",
      link: "https://smoothsick.arcprojects.es"
    },
    {
      id: 2,
      name: "Gastos",
      image: expenditures,
      technologies: "< KOTLIN & SPRINGBOOT + REACT & TYPESCRIPT />",
      description: "... backend developed with Kotlink using SpringBoot with Spring Data JPA for data persestence, with MySQL as database and Maven for dependencies management. Hexagonal architecture and clean code, integration tests with TestContainers to simulate a real database, 100% testable, scalable and maintainable",
      description2: "... frontend developed with React, Typescript and styles managed with Tailwind",
      description3: "... devOps implement CI/CD pipeline using GitHub Actions, with build (push, pull request) and release workflows. Kubernetes with Docker containers to manage deployment in my own server",
      link: "https://gastos.arcprojects.es"
    },
    {
      id: 3,
      name: "Movie House",
      image: movies,
      technologies: "< PHP />",
      description: "... backend developed with PHP using MySQL for data persistence",
      description2: "... frontend developed with JavaScript, CSS and HTML",
      description3: "",
      link: "https://movies.arcprojects.es"
    }
  ];

  return (
    <section className='flex flex-col justify-center py-10 xl:py-20 min-h-screen'>
      <div className="max-w-7xl mx-auto px-4 xxl:max-w-full sm:px-6 superxl:h-full superxl:flex superxl:flex-col superxl:justify-between">
        <div className="text-center mb-10 lg:pb-0 xl:pb-20 ">
          <h1 className="text-3xl sm:text-6xl xl:text-8xl font-bold lg:text-left">{text.works.title}</h1>
        </div>
        <section >
          <Slider images={works} />
        </section>
      </div>
    </section>
  );
}

export default Projects;


/*{
  id: 1,
    img: smooth,
      link: "https://smoothsick.arcprojects.es",
        back: "@Node @Express @MongoDb",
          front: "@React",
            name: "Smoothsick"
},
{
  id: 3,
    img: expenditures,
      link: "https://gastos.arcprojects.es",
        back: "@Kotlin @SpringBoot",
          front: "@React @Typescript",
            name: "Expenditures"
},
{
  id: 4,
    img: wishlist,
      link: "https://tasks.arcprojects.es",
        back: "",
          front: "@React @LocalStorage",
            name: "ToDo List"
},
{
  id: 6,
    img: lord,
      back: "",
        link: "https://github.com/devs-toni/lord-rings-java",
          front: "",
            name: "The Lord Of The Rings"
},
{
  id: 8,
    img: calendar,
      link: "https://calendar.arcprojects.es",
        back: "",
          front: "@HTML @CSS @Javascript",
            name: "Calendar Js"
},
{
  id: 9,
    img: shop,
      link: "https://shop.arcprojects.es",
        back: "",
          front: "@HTML @CSS @Javascript",
            name: "Buy Mock"
},
{
  id: 10,
    img: hangman,
      link: "https://hangman.arcprojects.es",
        back: "",
          front: "@HTML @CSS @Javascript",
            name: "Hangman Game"
},
{
  id: 11,
    img: calculator,
      link: "https://calculator.arcprojects.es",
        back: "",
          front: "@HTML @CSS @Javascript",
            name: "Calculator Js"
}*/