import '../scss/MainTours.scss';




export  function MainTours({mainTours, homePageLabel}) {

  return (
    <div className='MainTours'>
       <div className='label'>{homePageLabel[0]?.label}</div>

       <div className='container'>
            {
              mainTours.map(mainTour => <div className='mainTour' key={mainTour.id}>
                  <img src={`https://shelby-backend-services.vercel.app/${mainTour.image}`} alt='mainTours' />
                  
                  <div className='content'>
                      <div className='title'>{mainTour.title}</div>
                      <div className='descr'>{mainTour.descr}</div>
                  </div>
              </div>)
            }
       </div>
    </div>
  )
}
