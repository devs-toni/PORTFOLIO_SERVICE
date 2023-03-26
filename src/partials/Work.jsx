import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Work = ({ id, img, link, setActive }) => {

  const handleClick = ({ target }) => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return <img src={img} alt="img" width="" height="" className='work-image' onClick={link && handleClick} onMouseEnter={() => setActive(id)} onMouseLeave={() => setActive(-1)} />
}

export default Work;