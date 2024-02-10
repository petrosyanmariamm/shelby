import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import '../scss/BookingPage.scss';

import { SearchCity } from './../components/SearchCity';
import { Checkin } from '../components/Checkin';
import { Checkout } from '../components/Checkout';
import { Adults } from '../components/Adults';
import { Rooms } from './../components/Rooms';
import { Children } from '../components/Children';
import { ChildAge } from '../components/ChildAge';
import { Tour } from '../components/Tour';



export function BookingPage(){
  const [currentLanguage, setCurrentLanguage] = useState('am');
  const [dropdown, setDropDown] = useState(false);
  const controlCheckPersonRef = useRef(null);
  const [cities, setCities] = useState([]);
  const [bookingPageLabel, setBookingPageLabel] = useState({});
  const [tours, setTours] = useState([]);
  const [adults, setAdults] = useState('1');
  const [rooms, setRooms] = useState('1');
  const [children, setChildren] = useState('0');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [childrenAge, setChildrenAge] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [tableShow, setTableShow] = useState(false);
  const [result, setResult] = useState({});
  const navigate = useNavigate('');

console.log(tours);


  useEffect(() => {
    loadingData();
    window.scrollTo(0, 0);
    window.addEventListener("mousedown", handleClickOutSide);
  }, [currentLanguage]);


  useEffect(() => {
    let newArr = Array(+children).fill('');
    setChildrenAge(newArr);
  }, [children]);


  async function loadingData() {

    const citiesData = await axios.get(`city?lang=${currentLanguage}`);
    setCities(citiesData.data);
    const bookingPageLabelData = await axios.get(`booking_page_label?lang=${currentLanguage}`);
    setBookingPageLabel(bookingPageLabelData.data);
  }

  
  const handleClickOutSide = (e) => {  
    // if (!controlCheckPersonRef.current.contains(e.target)) setDropDown(false);
  }

  const closeTableHandler = () => {
    sessionStorage.clear();
    setTableShow(false);
    setSelectedCity('');
    setCheckin('');
    setCheckout('');
    setRooms('1');
    setAdults('1');
    setChildren('0');
  }

  const submitSearchPackages = async () => {
    if (!selectedCity || !checkin || !checkout) {
      return alert('Все поля обязательны.');
    }
    
    const childageArr = document.querySelectorAll('.childage-container .childeAge');
    const ages = [];
    
    for (let i = 0; i < childageArr.length; i++) {
      if(childageArr[i].value === '') {
        return alert('Укажите возраст детей.');
      }

      ages.push(childageArr[i].value);
    }

    const toursData = await axios.get(`tour/city?lang=${currentLanguage}&city=${selectedCity}`)
    setTours(toursData.data);

    setResult({
      selectedCity,
      checkin,
      checkout,
      rooms,
      adults,
      children,
      childageArr: JSON.stringify(ages)
    })

    sessionStorage.setItem('shelbyBookingPage', JSON.stringify({
      selectedCity,
      checkin,
      checkout,
      rooms,
      adults,
      children,
      childageArr: JSON.stringify(ages)
    }))

    setTableShow(true);
  }


  return(
    <div>

        <div className='background'></div>
          <div className="search">
            <div className='check-city'>
              <SearchCity 
                cities={cities} 
                setSelectedCity={setSelectedCity}
                selectedCity={selectedCity}
                bookingPageLabel={bookingPageLabel}
              />
            </div>

            <div className="check-date">
              <Checkin checkin={checkin} setCheckin={setCheckin} />
              <Checkout checkout={checkout} setCheckout={setCheckout} />
            </div>

            <div className="check-person">

            <div className='left'>
                <div className='title'>
                 <span>{rooms}</span> {bookingPageLabel[0]?.rooms}
                </div>

                <div className='circle'></div>

                <div className='title'>
                 <span>{adults}</span>  {bookingPageLabel[0]?.adults}
                </div>
                
                <div className='circle'></div>

                <div className='title'>
                  <span>{children}</span> {bookingPageLabel[0]?.children}
                </div>  

            </div>
             
            <div className={dropdown ? 'controlCheckPerson activeCheckPerson' : 'controlCheckPerson'}>
                
            <div className='right'>
                  <Rooms rooms={rooms} setRooms={setRooms} />
                  <Adults adults={adults} setAdults={setAdults} />
                  <Children children = {children} setChildren={setChildren} />
            </div>
  
                {
                children > 0 && <div className='childage-container'>
                {childrenAge.map((el, index) => <ChildAge key={index} bookingPageLabel={bookingPageLabel} /> )}
                </div>
                }

            </div>
           
        </div>  
            <button onClick={submitSearchPackages}>SEARCH</button>
     </div>

        {
        tableShow &&
        <div>
          <div className='tours-container'>
          <i className="fa-solid fa-xmark closeTable" onClick={closeTableHandler}></i> 

          <div className='tours'>
            <table>
              <thead>
                <tr>
                  {
                    bookingPageLabel && bookingPageLabel[0]?.table_headings?.split('/')
                      .map((el, index) => <th className='th' key={index}>{el}</th>)
                  }
                </tr>
              </thead>
           
              <tbody className='tours_body'>
                {
                  tours.map(el => <Tour
                    key={el.id}
                    tour={el}
                    result={result}
                  />
                 )
                } 
              </tbody>

            </table>
          </div>
        </div>
        </div>
        
        
      }

    </div>
  );
}



