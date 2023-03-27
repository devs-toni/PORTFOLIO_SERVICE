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
      <section className="flex flex-col pb-10 lg:pt-10 lg:pb-16 justify-center z-30 superxl:justify-between bg-gray-300">
        <div className="mx-auto w-full text-center mobile:pt-6 md:mb-6 lg:text-right lg:max-w-3xl xl:mb-20 xl:max-w-5xl xl:pr-10">
          <h2 className="text-3xl w-full mobile:text-4xl sm:text-6xl font-normal italic mb-4 md:mb-0 xl:text-8xl text-gray-700">{text.skills.title}</h2>
        </div>
        <div className="max-w-6xl mx-auto ">
          <div className="lg:py-3">
            <div className='sm:px-7'>
              <div className="w-full px-6 mx-auto grid gap-x-10 gap-y-6 grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xxl:grid-cols-5 xxl:gap-14 superxl:grid-cols-5 superxl:gap-10 items-start" data-aos-id-blocks>
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



