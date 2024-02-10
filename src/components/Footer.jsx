import { Link } from 'react-router-dom';
import '../scss/Footer.scss';


export  function Footer({footer}) {

  const infoData = footer[0]?.info.split('&');
  const linksData = footer[0]?.links.split('&');

  return (
    <div className='Footer'>
      <div className='info'>
        <Link to='/'>
            <img src='/images/logo.png' alt='logo' />
        </Link>
        <div className='content'>{infoData && infoData[0]}</div>
      </div>
      <div className='support'>
        <div> <i className='fa-solid fa-phone'></i> {infoData && infoData[1]} </div>
        <div> <i className='fa-solid fa-envelope'></i> {infoData && infoData[2]} </div>
        <div> <i className='fa-solid fa-location-dot'></i> {infoData && infoData[3]} </div>
      </div>
      <div className='links'>
        <div >{footer[0] && footer[0].heading}</div>
        <Link className='link' to='/booking'>{linksData && linksData[0]}</Link>
        <Link className='link' to='/about'>{linksData && linksData[1]}</Link>
      </div>
    </div>
  )
}
