import { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import '../scss/Header.scss';
import { SelectLanguage } from "./SelectLanguage";



export  function Header({navbar}) {

  const navigate = useNavigate();
  const [scrollDown, setScrollDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', onScrollWindow);
 }, [])

 const onScrollWindow = () => {
    if (window.scrollY > 750) setScrollDown(true);
    else setScrollDown(false);
 }

  return (
   
    <div className={scrollDown ? 'Header bg-color' : 'Header' }>
      <div  className={showMenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} id="menu-bar" onClick={()=> setShowMenu(!showMenu)}></div>
      <div className="left">

          <div className="logo" onClick={() => navigate('/')}>
            <img src="./images/logo.png" alt="logo"/>
          </div>

          <nav className={showMenu ? 'navbar active': 'navbar' }>
              {
                navbar.map(el => (
                  <Link key={el.id} to={el.route} className='link'>
                    {el.title}
                  </Link>
                ))
              }
          </nav>
      </div>

      <div className="right">
        <div className="phone">
          <i className="fa-solid fa-phone"></i>
          <a className="infotel" href="tel:555 6785">Call Us: 555 6785</a>
          <span className="separator"> | </span>
        </div>
         
        <div className="media">
          <a href="http://www.facebook.com/shelby.cjsco" target=" _blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>    
          </a>

          <a href="http://www.twitter.com" target=" _blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>    
          </a>

          <a href="http://www.pinterest.com" target=" _blank" rel="noreferrer">
              <i className="fa-brands fa-pinterest"></i>    
          </a>

          <SelectLanguage/>
          
        </div>
          
      </div>
      
    </div>
  )
}
