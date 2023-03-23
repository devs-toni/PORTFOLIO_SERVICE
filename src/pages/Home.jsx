import React from 'react';

import Header from '../partials/Header';
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
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className='h-screen'>
        <Header />
        <main className="grow">
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>
          <Title />
        </main>
      </div>
      <Skills />
      <Projects />
      <Testimonials />
      <div className='h-screen'>
        <Newsletter />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}

export default Home;