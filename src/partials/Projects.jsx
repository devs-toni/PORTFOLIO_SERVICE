import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';
import { useGlobal } from '../context/GlobalContext';
import { useLanguage } from '../context/LanguageContext';
//import PageIllustration from './PageIllustration';
import Work from './Work';
import bianxi from '../images/bianxi.png';
//import wishlist from '../images/wishlist.png';
//import calculator from '../images/calculator.png';
//import calendar from '../images/calendar.png';
//import hangman from '../images/hangman.png';
//import bikers from '../images/bikers.jpg';
import moviehouse from '../images/moviehouse.png';
//import pokemon from '../images/pokemon-console.jpg';
//import shop from '../images/shop.png';
//import smooth from '../images/smooth.png';
//import lord from '../images/lord.png';
//import expenditures from '../images/gastos.png';
import { RiArrowDropRightFill, RiArrowDropLeftFill } from "react-icons/ri";

function Projects() {

  const { text } = useLanguage();
  const { database } = useGlobal();
  const listRef = useRef();
//  const [workActive, setWorkActive] = useState(-1);

  const works = [
    {
      id: -1,
      img: {},
      link: "",
      back: "Backend: ",
      front: "Frontend:",
      name: ""
    },
    {
      id: 0,
      img: bianxi,
      link: "https://bianxi.arcprojects.es",
      back: "@SpringBoot @SpringSecurity @SpringData @MySQL",
      front: "@React",
      name: "Bianxi Store"
    },
 /*   {
      id: 1,
      img: smooth,
      link: "https://smoothsick.arcprojects.es",
      back: "@Node @Express @MongoDb",
      front: "@React",
      name: "Smoothsick"
    }*/,
    {
      id: 2,
      img: moviehouse,
      link: "https://moviehouse.arcprojects.es",
      back: "@PHP",
      front: "@HTML @CSS @Javascript",
      name: "Movie House"
    },/*
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
      id: 7,
      img: pokemon,
      back: "Java 11",
      link: "https://github.com/devs-toni/pokemon-java",
      front: "",
      name: "Pokemon Console"
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
  ];

  const handleClick = (direction) => {
    if (direction === 'back') {
      listRef.current.scrollLeft -= (listRef.current.offsetWidth);
    } else if (direction === 'forward') {
      listRef.current.scrollLeft += (listRef.current.offsetWidth);
    }
  }

  return (
    <section className='flex flex-col justify-center py-10 xl:py-20 min-h-screen'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 all-works superxl:h-full superxl: superxl:flex superxl:flex-col superxl:justify-between">
        <div className="text-center lg:pb-0 xl:pb-20 ">
          <h1 className="text-3xl sm:text-6xl xl:text-8xl font-bold lg:text-left">{text.works.title}</h1>
        </div>
        <section>
          <div className="mx-auto relative">
            <div className='works-container' ref={listRef} data-aos="fade-up" data-aos-delay="400">
              <div className="works-container__arrows">
                <RiArrowDropLeftFill className='works-container__arrow left-arrow' onClick={() => handleClick('back')} />
                <RiArrowDropRightFill className='works-container__arrow right-arrow' onClick={() => handleClick('forward')} />
              </div>
              <div className='flex h-full w-full works-flex-container'>
                {
                  works.map(({ id, img, link, name, download , extension }) => {
                    return (
                      id !== -1 && <Work key={uuid()} id={id} img={img} link={link} name={name} isDownload={download} ext={extension} />
                    )
                  })
                }
              </div>
            </div>

          </div>
{/*           <div className='mx-auto mt-14 leading-10 text-center hidden'>
            {
              <div className={`bg-white w-3/6 m-auto text-black ${workActive === -1 && ' invisible'} pt-10 rounded-sm`}>
                <p className={`font-bold ${works.find(work => work.id === workActive).back.length === 0 && 'invisible'} ${workActive === -1 && 'invisible'}`}>Backend -
                  <span className='font-thin not-italic pl-2'>{works.find(work => work.id === workActive).back.length > 0 ? works.find(work => work.id === workActive).back : "Empty"}</span>
                </p>
                <p className={`font-bold ${workActive === -1 && ' invisible'}`}>Frontend -
                  <span className='font-medium not-italic pl-2'>{works.find(work => work.id === workActive).front}</span>
                </p>
              </div>
            }
          </div> */}
        </section>
      </div>
    </section>
  );
}

export default Projects;