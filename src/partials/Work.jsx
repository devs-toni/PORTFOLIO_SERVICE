import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Work = ({ id, img, link }) => {

  const handleClick = () => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return <img src={img} alt="img" width="" height="" className='work-image' onClick={link && handleClick} data-aos="fade-up" data-aos-delay={`${id+4}00`} />

}

export default Work;