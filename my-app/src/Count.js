import {useState} from 'react';

function Count() {
  const [number, setNumber] = useState(0);
  const btnAdd = () => {
    setNumber(number + 1);
  }
  const btnSub = () => {
    if(number > 0) {
      setNumber(number - 1);
    }
  }
  return (
    <div className='custom-prd-num'>
      <button className="btnSub" onClick={btnSub}>-</button>
      <input type="num" className='prd-num-input' value={number} readOnly />
      <button className="btnAdd" onClick={btnAdd}>+</button>
    </div>
  )
}
export default Count;