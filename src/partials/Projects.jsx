import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';
import { useGlobal } from '../context/GlobalContext';
import { useLanguage } from '../context/LanguageContext';
import PageIllustration from './PageIllustration';
import Work from './Work';
import bianxi from '../images/bianxi.png';
import wishlist from '../images/wishlist.png';
import calculator from '../images/calculator.png';
import calendar from '../images/calendar.png';
import hangman from '../images/hangman.png';
import bikers from '../images/bikers.jpg';
import moviehouse from '../images/moviehouse.png';
import pokemon from '../images/pokemon-console.jpg';
import shop from '../images/shop.png';
import { RiArrowDropRightFill, RiArrowDropLeftFill } from "react-icons/ri";

function Projects() {

  const { text } = useLanguage();
  const { database } = useGlobal();
  const listRef = useRef();
  const [workActive, setWorkActive] = useState(-1);

  const works = [
    {
      id: -1,
      img: {},
      link: "",
      back: "Backend: ",
      front: "Frontend:"
    },
    {
      id: 0,
      img: bianxi,
      link: "https://bianxi.arcprojects.es",
      back: "@SpringBoot @SpringSecurity @SpringData @MySQL",
      front: "@React"
    },
    {
      id: 1,
      img: moviehouse,
      link: "https://moviehouse.arcprojects.es",
      back: "@PHP",
      front: "@HTML @CSS @Javascript"
    },
    {
      id: 2,
      img: wishlist,
      link: "https://tasks.arcprojects.es",
      back: "",
      front: "@React @LocalStorage"
    },
    {
      id: 3,
      img: bikers,
      link: "https://github.com/devs-toni/bikers",
      back: "@SpringBoot @SpringSecurity @SpringData @Thymeleaf",
      front: "@HTML @CSS @Javascript"
    },
    {
      id: 4,
      img: pokemon,
      back: "Java 11",
      front: ""
    },
    {
      id: 5,
      img: calendar,
      link: "https://calendar.arcprojects.es",
      back: "",
      front: "@HTML @CSS @Javascript"
    },
    {
      id: 6,
      img: shop,
      link: "https://shop.arcprojects.es",
      back: "",
      front: "@HTML @CSS @Javascript"
    },
    {
      id: 7,
      img: hangman,
      link: "https://hangman.arcprojects.es",
      back: "",
      front: "@HTML @CSS @Javascript"
    },
    {
      id: 8,
      img: calculator,
      link: "https://calculator.arcprojects.es",
      back: "",
      front: "@HTML @CSS @Javascript"
    }

  ];

  const handleClick = (direction) => {
    if (direction === 'back') {
      listRef.current.scrollLeft -= (listRef.current.offsetWidth);
    } else if (direction === 'forward') {
      listRef.current.scrollLeft += (listRef.current.offsetWidth);
    }
  }

  return (
    <section className='h-screen flex flex-col justify-center'>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none z-30" aria-hidden="true">
        <PageIllustration />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 all-works">
        <div className="text-center lg:pb-0 xxl:pb-20 pl-40">
          <h1 className="text-3xl sm:text-5xl xl:text-8xl -ml-40 mb-4 font-bold lg:text-left">{text.works.title}</h1>
        </div>
        <section>
          <div className="mx-auto relative">
            <div className='works-container' ref={listRef}>
              <div className="works-container__arrows">
                <RiArrowDropLeftFill className='works-container__arrow left-arrow' onClick={() => handleClick('back')} />
                <RiArrowDropRightFill className='works-container__arrow right-arrow' onClick={() => handleClick('forward')} />
              </div>
              <div className='flex h-full w-full'>
                {
                  works.map(({ id, img, link }) => {
                    return (
                      id !== -1 && <Work key={uuid()} setActive={setWorkActive} id={id} img={img} link={link} />
                    )
                  })
                }
              </div>
            </div>

          </div>
          <div className='mx-auto mt-14 leading-10 text-center pb-10 hidden'>
            {
              <div className={`bg-white w-3/6 m-auto text-black ${workActive === -1 && ' invisible'} p-10 rounded-sm`}>
                <p className={`font-bold ${works.find(work => work.id === workActive).back.length === 0 && 'invisible'} ${workActive === -1 && 'invisible'}`}>Backend -
                  <span className='font-thin not-italic pl-2'>{works.find(work => work.id === workActive).back.length > 0 ? works.find(work => work.id === workActive).back : "Empty"}</span>
                </p>
                <p className={`font-bold ${workActive === -1 && ' invisible'}`}>Frontend -
                  <span className='font-medium not-italic pl-2'>{works.find(work => work.id === workActive).front}</span>
                </p>
              </div>
            }
          </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;