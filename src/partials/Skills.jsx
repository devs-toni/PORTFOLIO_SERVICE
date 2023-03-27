import { useState } from "react";
import uuid from "react-uuid";
import { useGlobal } from "../context/GlobalContext";
import { useLanguage } from "../context/LanguageContext";
import Skill from './specific/Skill';

function Skills() {

  const { text } = useLanguage();
  const { database } = useGlobal();

  const [skills, setSkills] = useState(database.skills)

  return (
    <>
      <section className="bg-white h-screen flex flex-col justify-center z-30">
        <div className="mx-auto w-full text-center mobile:pt-6 md:mb-6 lg:text-right lg:max-w-3xl xl:mb-8">
          <h2 className="text-2xl mobile:text-4xl sm:text-6xl font-normal italic mb-4 md:mb-0 xl:text-8xl text-gray-700 -mr-20">{text.skills.title}</h2>
        </div>
        <div className="max-w-6xl mx-auto ">
          <div className="lg:py-3">
            <div className='sm:px-7'>
              <div className="w-full px-2 mx-auto grid gap-4 grid-cols-5 mobile:grid-cols-4 mobile:gap-x-10 surface:gap-x-4 md:grid-cols-4 lg:grid-cols-7 xxl:grid-cols-5 xxl:gap-14 superxl:grid-cols-5 superxl:gap-10 items-start" data-aos-id-blocks>
                {
                  skills &&
                  skills.map(({ img, format, name, description }, ind) => {
                    return (
                      <Skill key={uuid()} id={ind} img={img} ext={format} name={name} description={description} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;



