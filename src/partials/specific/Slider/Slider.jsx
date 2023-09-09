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

  return (
    <div className={st.container}>
      <RiArrowDropLeftFill onClick={previousImage} className={st.arrow} />

      {
        images.map(({ id, img }, index) => {
          return (
            <div className={currentImage === index ? `${st.slide} ${st.active}` : `${st.slide}`} >
              {
                currentImage === index &&
                <img key={index} src={img} alt='imagen' className={st.image} />
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