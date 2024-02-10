import { Link } from "react-router-dom";
import '../scss/HotTours.scss';




export  function HotTours({hotTours,homePageLabel}) {
  return (
    <div  className="HotTours">

        <div className="label">{homePageLabel[0]?.label}</div>

        <div className="container">
            {
              hotTours.map(hotTour => <div key={hotTour.id}>
                <img src={`https://shelby-backend-services.vercel.app/${hotTour.image}`} alt='countries' />
                <div className="title">{hotTour.title}</div>
                <div className="descr">{hotTour.descr}</div>
                <Link to='/booking' className='btn'>{hotTour.btn_text}</Link>
              </div>)
            }
        </div>
    </div>
  )
}
