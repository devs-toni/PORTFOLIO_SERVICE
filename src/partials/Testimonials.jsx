import React from 'react';
import { useLanguage } from '../context/LanguageContext';

import TestimonialImage01 from '../images/sergi.png';

function Testimonials() {

  const { text } = useLanguage();

  return (
    <section className='bg-white py-20 z-30'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="xl:max-w-5xl mx-auto text-center pb-2 md:pb-2 md:pr-10 xl:pr-0">
          <h2 className="text-5xl sm:text-7xl font-normal italic mb-10 xl:text-9xl md:text-right text-gray-700">{text.opinions.title}</h2>
        </div>

        <div className="max-w-2xl ml-96 text-right pb-12 md:pb-10">
          <p className="text-xl text-gray-800 pb-10">{text.opinions.description}</p>
        </div>

        <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none  pt-10">
          <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <div>
              <div className="relative inline-flex flex-col mb-4">
                <img className="rounded-full" src={TestimonialImage01} width="48" height="48" alt="Testimonial 01" />
                <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-lg text-gray-400 grow">— Antonio es una persona muy capaz. Que no duda en compartir sus conocimientos técnicos con el resto de sus compañeros con el fin de ayudar.</blockquote>
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
              <cite className="text-gray-200 not-italic">Sergi Clemente</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://github.com/scs87">GitHub</a>
            </div>
          </div>

          <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
            <div>
              <div className="relative inline-flex flex-col mb-4">
                <img className="rounded-full" src="https://avatars.githubusercontent.com/u/110405006?v=4" width="48" height="48" alt="Testimonial 02" />
                <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-lg text-gray-400 grow">— ¡Tony es un profesional top-to-bottom!!. Conoce y domina muy bien las herramientas con las que trabaja y no pierde ese espíritu de superación e ilusión para continuar aprendiendo y avanzando cada vez más. No duda en compartir sus conocimientos con total desinterés. ¡Personas como él se cuentan con los dedos de una mano!</blockquote>
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
              <cite className="text-gray-200 not-italic">Dayan Alvarez</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://github.com/Psicowar">GitHub</a>
            </div>
          </div>

          <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <div>
              <div className="relative inline-flex flex-col mb-4">
                <img className="rounded-full" src="https://media.licdn.com/dms/image/C5603AQFNF0_hA6hQCA/profile-displayphoto-shrink_800_800/0/1662742280273?e=1684972800&v=beta&t=essTLyYCA7rxEroXlwBH1eQPoQYqsXYtJOnDXZsbnvw" width="48" height="48" alt="Testimonial 03" />
                <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-lg text-gray-400 grow">— Buen compañero de trabajo, sobre todo por su gran aporte en el Backend al equipo y su gran interés por aprender otras tecnologías.</blockquote>
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
              <cite className="text-gray-200 not-italic">David Moina</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://github.com/davidmoina">GitHub</a>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}

export default Testimonials;
