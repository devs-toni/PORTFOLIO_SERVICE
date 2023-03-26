import React, { useRef } from 'react';
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

  const works = [
    {
      img: bianxi,
      link: "https://bianxi.arcprojects.es"
    },
    {
      img: moviehouse,
      link: "https://moviehouse.arcprojects.es"
    },
    {
      img: wishlist,
      link: "https://tasks.arcprojects.es"
    },
    {
      img: bikers,
    },
    {
      img: pokemon,
    },
    {
      img: calendar,
      link: "https://calendar.arcprojects.es"
    },
    {
      img: shop,
      link: "https://shop.arcprojects.es"
    },
    {
      img: hangman,
      link: "https://hangman.arcprojects.es"
    },
    {
      img: calculator,
      link: "https://calculator.arcprojects.es"
    } 

  ];

  const handleClick = (direction) => {
    if (direction === 'back') {
      listRef.current.scrollLeft -= (listRef.current.offsetWidth + 50);
    } else if (direction === 'forward') {
      listRef.current.scrollLeft += (listRef.current.offsetWidth + 50);
    }
  }

  return (
    <section className='pt-20 pb-40'>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none z-30" aria-hidden="true">
        <PageIllustration />
      </div>
      <div className="mx-auto px-4 sm:px-6 p-14 all-works">
        <div className="text-center py-12 md:pb-24 pl-40">
          <h1 className="text-5xl sm:text-7xl xl:text-9xl -ml-10 mb-4 font-bold md:text-left">{text.works.title}</h1>
        </div>
        <section>
          <div className="max-w-8xl mx-auto px-4 relative sm:px-6">
            <div className='works-container' ref={listRef}>
              <div className="works-container__arrows">
                <RiArrowDropLeftFill className='works-container__arrow' onClick={() => handleClick('back')} />
                <RiArrowDropRightFill className='works-container__arrow right-arrow' onClick={() => handleClick('forward')} />
              </div>
              <div className='flex h-full py-10'>
                {
                  works.map(({img, link}) => {
                    return (
                      <Work key={uuid()} img={img} link={link} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;