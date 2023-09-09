import React, { useState } from 'react'
import st from './Slider.module.css'
import { RiArrowDropRightFill, RiArrowDropLeftFill } from "react-icons/ri";

const Slider = ({ images }) => {

  const [currentImage, setCurrentImage] = useState(0);
  const total = images?.length;

  if (!Array.isArray(images) || total === 0) return;

  const nextImage = () => {
    setCurrentImage(currentImage === total - 1 ?
      0 : currentImage + 1);
  }

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ?
      total - 1 : currentImage - 1);
  }

  const openLink = (url) => {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className={st.container}>
      <RiArrowDropLeftFill onClick={previousImage} className={st.arrow} />
      {
        images.map(({ id, name, image, technologies, description, description2, description3, link }, index) => {
          return (
            <div key={index}  className={currentImage === index ? `${st.slide} ${st.active}` : `${st.slide}`} >
              {
                currentImage === index &&
                (
                  <>
                    <img src={image} alt='imagen' onClick={() => openLink(link)} className={st.image} />
                    <div className={st.data}>
                      <h1 className='mt-8 font-bold text-4xl font-architects-daughter mb-2 md:text-2xl mobile:text-base'>{name}</h1>
                      <h2 className='mt-4 text-2xl font-architects-daughter md:text-lg mobile:text-sm'>{technologies}</h2>
                      <h2 className='mt-6 text-lg text-center font-architects-daughter max-w-7xl md:text-base  mobile:text-sm'>{description}</h2>
                      <h2 className='mt-6 text-lg text-center font-architects-daughter max-w-7xl md:text-base  mobile:text-sm'>{description2}</h2>
                      <h2 className='mt-6 text-lg text-center font-architects-daughter mb-4 max-w-7xl md:text-base  mobile:text-sm'>{description3}</h2>
                    </div>
                  </>
                )
              }
            </div>
          )
        })
      }
      <RiArrowDropRightFill onClick={nextImage} className={`${st.arrow} ${st.right}`} />
    </div>
  )
}

export default Slider