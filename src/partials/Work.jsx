import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Work = ({ id, img, link, name, setActive }) => {

  const handleClick = ({ target }) => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <>
      <img src={img} alt={name} width="" height="" className='work-image' onClick={link && handleClick} onMouseEnter={() => setActive(id)} onMouseLeave={() => setActive(-1)} />
      <p className="text-center mt-2 surface:hidden font-bold mb-8 italic">{name}</p>
    </>
  )
}

export default Work;