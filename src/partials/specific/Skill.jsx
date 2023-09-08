import React, { useEffect, useState } from 'react'

const Skill = ({ id, img, name, description }) => {

  const [image, setImage] = useState()

  useEffect(() => {
    const getImage = async () => {
      //const imgAndExt = img.split('.')
      await import(`../../assets/skills/${img}.png`).then(img => setImage(img.default));
    }
    getImage();
  }, [])

  return (
    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay={`${id+2}00`}>
      {image && <img src={image} alt={name} className="w-10 h-10 surface:w-12 surface:h-12 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-14 lg:h-14 xl:w-20 xl:h-20 mb-4 rounded-full" />}
      <h4 className="text-gray-900 text-xs font-bold sm:mb-2 md:text-sm xl:text-sm">{name}</h4>
      <p className="text-xxs md:text-sm lg:text-xs xl:text-sm xxl:text-sm text-gray-800 text-center">{description}</p>
    </div>
  )
}

export default Skill;