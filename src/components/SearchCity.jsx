import {useState, useRef, useEffect} from 'react'

export function SearchCity({cities, selectedCity,  setSelectedCity, bookingPageLabel}) {

  const [dropdown, setDropDown] = useState(false);
  const bookingRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutSide);
  }, []);

  const handleClickOutSide = (e) => {
      if (!bookingRef.current.contains(e.target)) setDropDown(false);
  };


  const onChangeInput = (e) => {
    setSelectedCity(e.target.value);

    if (selectedCity.length > 1) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  const handeClickListItem = (name) => {
    setDropDown(false);
    setSelectedCity(name);
  };


  return (
    <div className='SearchCity' ref={bookingRef} >

      <div className='searchBar'> 
        <i className='fa-solid fa-hotel'></i>

        <input type='search'
          value={selectedCity}
          onChange={onChangeInput}
          onClick={() => setDropDown(true)}
          placeholder={bookingPageLabel[0]?.inputPlaceholder} />
      </div>

      {
        dropdown &&
        <div className='cities'>
          {
            cities
              .filter(el => el.name.toLowerCase().includes(selectedCity.toLowerCase()))
              .map(el => <div key={el.id} onClick={() => handeClickListItem(el.name)} className='city'>
                <i className="fa-solid fa-location-dot"></i>
                {el.name}
              </div>)
          }
        </div>
      }


    </div>
  )
}
