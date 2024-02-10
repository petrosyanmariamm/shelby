import { Link } from "react-router-dom";


export  function Tour({result, tour}) {


  return (
    
             <tr className="Tour">
                <td>1</td>
                <td>{tour.name}</td>
                <td>{tour.city}</td>
                <td>{tour.hotel}</td>
                <td>{tour.transport_depart}</td>
                <td>{tour.transport_arrive}</td>
                <td>{tour.price}</td>
                <td><Link className="link" to={`/booking/${tour.id}?checkin=${result.checkin}&checkout=${result.checkout}&rooms=${result.rooms}&adults=${result.adults}&children=${result.children}&price=${tour.price}`}>{tour.btn_text}</Link></td>
                
            </tr>)
        
    
}
