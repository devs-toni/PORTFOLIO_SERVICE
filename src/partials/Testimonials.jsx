import React from 'react';
import { useLanguage } from '../context/LanguageContext';

import TestimonialImage01 from '../images/sergi.png';
import TestimonialImage02 from '../images/david.jpg';
import TestimonialImage03 from '../images/joe.jpg';
import PageIllustration from './PageIllustration';

function Testimonials() {

  const { text } = useLanguage();

  return (
    <section className='flex flex-col justify-center z-30 bg-gray-300 pb-10 xl:pb-20 min-h-screen'>
      <div className="relative w-3/6 mx-auto pointer-events-none z-30 xl:pt-10" aria-hidden="true">
        <PageIllustration />
      </div>
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 sm:max-w-full superxl:h-full superxl:py-20 superxl:flex superxl:flex-col superxl:justify-between">
        <div>
          <div className="xl:max-w-5xl mx-auto text-center pb-2 md:pb-0 md:pr-10 lg:text-right xl:pr-0">
            <h2 className="text-3xl mobile:text-3xl sm:text-5xl font-normal italic sm:mb-6 xl:text-8xl text-gray-900">{text.opinions.title}</h2>
          </div>
          <div className="max-w-2xl lg:ml-96 text-center hidden mobile:block pb-4 md:pb-0 lg:pb-4 surface:hidden sm:block lg:text-right">
            <p className="text-sm md:text-lg text-gray-900">{text.opinions.description}</p>
          </div>
        </div>

        <div className="max-w-sm lg:mx-auto grid gap-1 mobile:gap-6 surface:gap-2 sm:gap-2 sm:mx-auto sm:mt-6 grid-cols-1 lg:grid-cols-3 lg:gap-6 lg:max-w-5xl items-start">
          <div className="flex flex-col h-full px-6 py-2 mobile:py-5 md:py-6 bg-gray-800" data-aos="fade-up">
            <div>
              <div className="relative inline-flex flex-col mb-4">
                <img className="rounded-full w-8 h-8 mobile:w-10 mobile:h-10 md:w-14 md:h-14 md:mb-4" src={TestimonialImage01} width="" height="" alt="Testimonial 01" />
                <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-xs text-gray-400 grow md:text-sm">— Antonio es una persona muy capaz. Que no duda en compartir sus conocimientos técnicos con el resto de sus compañeros con el fin de ayudar.</blockquote>
            <div className="text-gray-700 font-medium mt-2 pt-2 border-t border-gray-700">
              <cite className="text-gray-200 not-italic text-xs md:text-sm">Sergio Clemente</cite>
            </div>
          </div>

          <div className="flex flex-col h-full px-6 py-2 mobile:py-5 md:py-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
            <div>
              <div className="relative inline-flex flex-col mb-4">
                <img className="rounded-full h-8 w-8 mobile:w-10 mobile:h-10 md:w-14 md:h-14 md:mb-4" src="https://avatars.githubusercontent.com/u/110405006?v=4" width="" height="" alt="Testimonial 02" />
                <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-xs text-gray-400 grow md:text-sm">— ¡Tony es un profesional top-to-bottom!!. Conoce y domina muy bien las herramientas con las que trabaja y no pierde ese espíritu de superación e ilusión para continuar aprendiendo y avanzando cada vez más. No duda en compartir sus conocimientos con total desinterés. ¡Personas como él se cuentan con los dedos de una mano!</blockquote>
            <div className="text-gray-700 font-medium mt-2 pt-2 border-t border-gray-700">
              <cite className="text-gray-200 not-italic text-xs md:text-sm">Dayan Álvarez</cite>
            </div>
          </div>

          <div className="flex flex-col h-full px-6 py-2 mobile:py-5 md:py-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <div>
              <div className="relative inline-flex flex-col mb-2">
                <img className="rounded-full h-8 w-8 mobile:w-10 mobile:h-10 md:w-14 md:h-14 md:mb-4" src={TestimonialImage02} width="48" height="48" alt="Testimonial 03" />
                <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-xs md:text-sm text-gray-400 grow">— Buen compañero de trabajo, sobre todo por su gran aporte en el Backend al equipo y su gran interés por aprender otras tecnologías.</blockquote>
            <div className="text-gray-700 font-medium mt-2 pt-2 border-t border-gray-700">
              <cite className="text-gray-200 not-italic text-xs md:text-sm">David Moina</cite>
            </div>
          </div>

          <div className="flex flex-col h-full px-6 py-2 mobile:py-5 md:py-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <div>
              <div className="relative inline-flex flex-col mb-2">
                <img className="rounded-full h-8 w-8 mobile:w-10 mobile:h-10 md:w-14 md:h-14 md:mb-4" src={TestimonialImage03} width="48" height="48" alt="Testimonial 03" />
                <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-xs md:text-sm text-gray-400 grow">— I'm grateful to have had the opportunity to work with Antonio Rufino, and I would highly recommend him to anyone looking for a talented and dedicated web developer. Thank you for all that you do, Antonio Rufino!</blockquote>
            <div className="text-gray-700 font-medium mt-2 pt-2 border-t border-gray-700">
              <cite className="text-gray-200 not-italic text-xs md:text-sm">Joe Alt</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
