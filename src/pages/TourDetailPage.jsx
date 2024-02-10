import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import  axios from '../axios';
import '../scss/TourDetailPage.scss'


export  function TourDetailPage() {

  const [tour, setTour] = useState({});
  const {id} = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();


  useEffect(() => {
    loadingTour();
  }, []);

  const loadingTour = async() => {
    const tourData = await axios.get('tour/' + id);
    setTour(tourData.data);
  }


    return (
      <div>
         
         <div className='back' onClick={() => navigate(-1)}>
              <i className='fa-solid fa-arrow-left'></i>
          </div>
      <div className="container">
         
        <div className='left'>
          <div>Search Data</div>
          <div>Tour Name</div>
          <div>Tour City</div>
          <div>Tour Hotel</div>
          <div>Transport Depart</div>
          <div>Transport Arrive</div>
          <div>Checkin Date</div>
          <div>Checkout Date</div>
          <div>Rooms</div>
          <div>Adults</div>
          <div>Children</div>
          <div>Price</div>

        </div>
        <div className='right'>
          <div>Search Result</div>
          <div>{tour.name}</div>
          <div>{tour.city}</div>
          <div>{tour.hotel}</div>
          <div>{tour.transport_depart}</div>
          <div>{tour.transport_arrive}</div>
          <div>{searchParams.get('checkin')}</div>
          <div>{searchParams.get('checkout')}</div>
          <div>{searchParams.get('rooms')}</div>
          <div>{searchParams.get('adults')}</div>
          <div>{searchParams.get('children')}</div>
          <div>{searchParams.get('price')}</div>

        </div>
      </div>
     </div>
    
    )
}
