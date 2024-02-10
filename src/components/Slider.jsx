import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import '../scss/Slider.scss';



export  function Slider({ sliders }) {

  const [currentSlide, setCurrentSlides] = useState(1);
  const [visible, setVisible] = useState(true);


     

  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide();
    }, 7000);

    return () => clearInterval(interval);
}, [currentSlide]);

const nextSlide = () => {
    if (currentSlide !== sliders.length) {
        setCurrentSlides(currentSlide + 1);
    } else {
        setCurrentSlides(1);
    }

    titleAnimations();
}

const prevSlide = () => {
    if (currentSlide !== 1) {
        setCurrentSlides(currentSlide - 1);
    } else {
        setCurrentSlides(sliders.length);
    }

    titleAnimations();
}

const moveCircle = (index) => {
    setCurrentSlides(index);
    titleAnimations();
}

const titleAnimations = () => {
    setVisible(false);
    setTimeout(() => setVisible(true), 1000);
}


  return (
    <div className="Slider">
      {
        sliders.map((slider, index) => {
          return (
            <div
              key={slider.id}
              style={{backgroundImage: `url('https://shelby-backend-services.vercel.app/${slider.image}')`}}
              className={currentSlide === (index + 1) ? 'slide active': 'slide'}
            >
              <Animated animationIn='fadeIn' animationOut='' isVisible={visible}>
                  <div className="title">{slider.title}</div>
                  <Link to='/booking' className='btn'>{slider.btn_text}</Link>
              </Animated>
            </div>
          )
        })
      }
      <button onClick={nextSlide} className='btn-slide next'>
         <i className='fa-solid fa-chevron-right'></i>
      </button>

      <button onClick={prevSlide} className='btn-slide prev'>
          <i className='fa-solid fa-chevron-left'></i>
      </button>

      <div className='container-circle'>
                {sliders.map((obj, index) => (
                    <div
                        key={obj.id}
                        onClick={() => moveCircle(index + 1)}
                        className={currentSlide === (index + 1) ? 'circle active' : 'circle'}
                    />
                ))}
            </div>
    </div>
  )
}
