import React from 'react';

import PageIllustration from '../partials/PageIllustration';
import Title from '../partials/Title';
import Skills from '../partials/Skills';
import Projects from '../partials/Projects';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <main className="grow z-30"> 
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
        <Title />
        <Skills />
        <Projects />
      </main>
      <Testimonials />
      <div className='h-fit flex flex-col items-center min-h-screen superxl:justify-between py-10 xl:py-20'>
       {/*<Newsletter />*/}
        <Footer />
      </div>
      <Banner />
    </div>
  );
}

export default Home;