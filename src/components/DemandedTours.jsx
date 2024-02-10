import '../scss/DemandedTours.scss';

export  function DemandedTours({demandedTours}) {
  return (
    <div className='DemandedTours'>
        {
          demandedTours.map(demandedTour => <div className='demandedTour' key={demandedTour.id}>
            
              <div className='content'>
                  <div className='title'>{demandedTour.title}</div>
                  <div className='descr'>{demandedTour.descr}</div>
                  <button className='btn'>{demandedTour.btn_text}</button>
              </div>

              <div className='image'>
                  <img src={`https://shelby-backend-services.vercel.app/${demandedTour.image}`} alt='DemandedTours' />
              </div>
          </div>)
        }
    </div>
  )
}
