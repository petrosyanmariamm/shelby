
export  function Rooms({rooms, setRooms}) {
  return (
    <div className='Rooms'>
    <div>Rooms</div>

    <div className='btnNumbers'>
      <span onClick={()=> setRooms(prev => +prev - 1)} className='prev'  >-</span>
      <span>{rooms}</span>
      <span onClick={() => setRooms(prev => +prev + 1)} className='next'>+</span>
    </div>
  </div>
  )
}
