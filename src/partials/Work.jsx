import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Work = ({ img, link }) => {

  const handleClick = () => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <img src={img} alt="img" width="" height="" className='work-image' onClick={link && handleClick}/>
  )
}

export default Work;