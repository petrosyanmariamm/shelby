import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import '../scss/OurRatings.scss';


export  function OurRatings({ourRatings, homePageLabel}) {

  const [counter, setCounter] = useState(false);


  return (
    <div className='Ratings'>
       <div className="label">{homePageLabel[0]?.label}</div>

      <div className='container'>
      {
        ourRatings.map(ourRating => <div key={ourRating.id}>
          <ScrollTrigger onEnter={() => setCounter(true)}>
              {counter && <CountUp className='rating' start={0} end={ourRating.rating} duration={5} />}
           </ScrollTrigger>
           <div className='title'>{ourRating.title}</div>
           <div className='descr'>{ourRating.descr}</div>
        </div>)
       }
      </div>
      
    </div>
  )
}
