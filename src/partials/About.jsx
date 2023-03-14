import { useLanguage } from "../context/LanguageContext";

function About() {

  const { text } = useLanguage();

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <div className="py-3 md:py-3">

          <div className='sm:px-7'>
            <div className='flex flex-col p-3 justify-center'>
              <div className='flex flex-col md:flex-row mb-10'>
                <div className='mb-5 container text-center md:text-left flex justify-center md:justify-start j mr-8 md:mr-40'>
                  <p className='mr-3 font-medium italic text-3xl text-center sm:text-left sm:text-4xl'>{text.about.title}</p>
                  <p className='font-black text-3xl sm:text-4xl'>{text.about.title_me}</p>
                </div>
                <div className='sm:max-w-xl flex justify-center'>
                  <p className='md:text-left '>{text.about.description}</p>
                </div>
              </div>
              <div className='container md:max-w-sm text-center md:text-left'>
                <span className='font-semibold mr-1'>"{text.about.conclusion}"</span>
                {text.about.slogan}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
