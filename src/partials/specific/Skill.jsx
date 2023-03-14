import React, { useEffect, useState } from 'react'

const Skill = ({ img, name, description }) => {

  const [image, setImage] = useState()

  useEffect(() => {
    const getImage = async () => {
      //const imgAndExt = img.split('.')
      await import(`../../images/${img}.png`).then(img => setImage(img.default));
    }
    getImage();
  }, [])

  return (
    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
      {image && <img src={image} alt={name} className="w-24 h-24 mb-4 rounded-full" />}
      <h4 className="h4 mb-2">{name}</h4>
      <p className="text-lg text-gray-400 text-center">{description}</p>
    </div>
  )
}

export default Skill;