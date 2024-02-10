import '../scss/SelectLanguage.scss';
export  function SelectLanguage() {

    const onChangeSelect = (e) =>{
        localStorage.setItem('shelby-Language', e.target.value);
        window.location.reload();
        sessionStorage.clear();
    }
  return (
        <select onChange={onChangeSelect}>
            {/* <div onClick={()=> onChangeSelect('en')}>en</div> */}
            <option value="en">en</option>
            <option value="am">am</option>
            <option value="ru">ru</option>
        </select>
    )  
}
