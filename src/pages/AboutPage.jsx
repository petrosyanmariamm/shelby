import { useEffect, useState } from "react";
import { HotTours } from '../components/HotTours';
import axios from '../axios';

export  function AboutPage() {

  const [hotTours, setHotTours] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('am');

  useEffect(() => {
      loadingData()
      window.scrollTo(0, 0);
      setCurrentLanguage(localStorage.getItem('shelby-Language'))
  }, [currentLanguage]);

  const loadingData = async () => {
    const hotToursData = await axios.get(`hottour?lang=${currentLanguage}`);
    setHotTours(hotToursData.data);
  }

  return (
    <div className='About'>
      <HotTours hotTours={hotTours}/>
    </div>
  )
}
