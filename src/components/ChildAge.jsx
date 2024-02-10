
export  function ChildAge({bookingPageLabel}) {
  return (
    <select defaultValue={bookingPageLabel[0]?.childrenAge} className="childAge">
      <option value={bookingPageLabel[0]?.childrenAge} disabled>{bookingPageLabel[0]?.childrenAge}</option>
      {
        Array.from({length:18}).map((_, index) => (
          <option className="option" key={index} value={`${index} ${bookingPageLabel[0]?.childAgeText}`}>
            {index} {bookingPageLabel[0]?.childAgeText}
          </option>
        ))
      }
    </select>
  )
}
