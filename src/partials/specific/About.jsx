import { useLanguage } from "../../context/LanguageContext";

const About = () => {

  const { text } = useLanguage();

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-col lg:flex-row mt-4'>
        <div className='mb-4 text-center lg:text-left flex justify-center lg:ml-10 xl:ml-0 lg:justify-start lg:mr-40'>
          <p className='mr-3 font-medium italic text-2xl mobile:text-3xl text-center sm:text-left sm:text-4xl xxl:text-5xl xxl:mr-8'>{text.about.title}</p>
          <p className='font-black text-2xl mobile:text-3xl sm:text-4xl xxl:text-5xl'>{text.about.title_me}</p>
        </div>
        <div className='flex flex-col justify-center w-full mb-5'>
          <p className='text-justify text-xxs leading-5 w-5/6 m-auto mobile:text-sm mobile:leading-6 surface:text-xs sm:text-lg lg:text-left sm:w-5/6 sm:leading-8 lg:text-sm xl:w-full xxl:text-xl xxl:w-full superxl:leading-8 mb-5'>{text.about.description1}</p>
          <p className='text-justify text-xxs leading-5 w-5/6 m-auto mobile:text-sm mobile:leading-6 surface:text-xs sm:text-lg lg:text-left sm:w-5/6 sm:leading-8 lg:text-sm xl:w-full xxl:text-xl xxl:w-full superxl:leading-8 mb-5'>{text.about.description2}</p>
          <p className='text-justify text-xxs leading-5 w-5/6 m-auto mobile:text-sm mobile:leading-6 surface:text-xs sm:text-lg lg:text-left sm:w-5/6 sm:leading-8 lg:text-sm xl:w-full xxl:text-xl xxl:w-full superxl:leading-8'>{text.about.description3}</p>
        </div>
      </div>
{/*       <div className='container md:max-w-sm text-center md:text-left'>
        <span className='font-semibold mr-1'>"{text.about.conclusion}"</span>
        {text.about.slogan}
      </div> */}
    </div>
  )
}

export default About;