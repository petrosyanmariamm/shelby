
export  function Adults({adults, setAdults}) {
  return (
    <div className="Adults">
      <div>Adults</div>
      <div className="btnNumbers">
        <div onClick={() => setAdults(prev => +prev -1)} className="prev">-</div>
        <div>{adults}</div>
        <div onClick={() => setAdults(prev => +prev + 1)} className="next">+</div>
      </div>
    </div>
  )
}


