import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Work = ({ id, img, link, name }) => {

  const handleClick = ({ target }) => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <>
      <img src={img} alt={name} width="" height="" className='work-image' onClick={link && handleClick} />
      <p className="text-center mt-2 surface:hidden font-bold italic">{name}</p>
    </>
  )
}

export default Work;