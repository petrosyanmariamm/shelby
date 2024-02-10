
export  function Children({children, setChildren}) {
  return (
    <div className="Children">
       <div>Children</div>

       <div className="btnNumbers">
          <div onClick={() => setChildren(prev => +prev - 1)} className="prev">-</div>
          <div>{children}</div>
          <div onClick={() => setChildren(prev => +prev + 1)} className="next">+</div>
       </div>
    </div>
  )
}
