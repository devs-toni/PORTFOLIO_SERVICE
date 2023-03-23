import { useLanguage } from "../../context/LanguageContext";

const About = () => {

  const { text } = useLanguage();

  return (
    <div className='flex flex-col justify-center p-10'>
      <div className='flex flex-col md:flex-row mb-12 mt-12'>
        <div className='mb-5 container text-center md:text-left flex justify-center md:justify-start j mr-8 md:mr-40'>
          <p className='mr-3 font-medium italic text-3xl text-center sm:text-left sm:text-4xl'>{text.about.title}</p>
          <p className='font-black text-3xl sm:text-4xl'>{text.about.title_me}</p>
        </div>
        <div className='sm:max-w-xl flex justify-center'>
          <p className='md:text-left '>{text.about.description}</p>
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