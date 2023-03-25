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
      <section className="bg-white p-20 z-30">
        <div className="xl:max-w-5xl mx-auto text-center pb-2 md:pb-20 md:pr-10 xl:pr-0">
          <h2 className="text-4xl sm:text-6xl font-normal italic mb-4 xl:text-8xl md:text-right text-gray-700">{text.skills.title}</h2>
        </div>
        <div className="max-w-6xl mx-auto ">
          <div className="py-3 md:py-3">
            <div className='sm:px-7'>
              <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
                {
                  skills &&
                  skills.map(({ img, format, name, description }) => {
                    return (
                      <Skill key={uuid()} img={img} ext={format} name={name} description={description} />
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



