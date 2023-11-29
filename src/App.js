import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState('');
  const writeText=(event)=>{
        setValue(value+event.target.value)
    }

  return (
    <>
    <div className='container'>
      <div className='calculator'>
        <div>
          <input type="text"  style={{width:"100%",  borderRadius:"5px", marginBottom:"5px" , textAlign:"right"}} value={value}/>
          </div>
        <div>
          <button type="button" class="btn btn-secondary" value="AC" onClick={(e)=>(setValue(''))}>AC</button>
          <button type="button" class="btn btn-secondary" value="DEL" onClick={(e)=>setValue(value.slice(0,-1))}>DEL</button>
          <button type="button" class="btn btn-secondary" value="/" onClick={writeText} >/</button>
          <button type="button" class="btn btn-secondary" value="*" onClick={writeText} >*</button>
        </div>
        <div>
          <button type="button" class="btn btn-secondary" value="7" onClick={writeText} >7</button>
          <button type="button" class="btn btn-secondary" value="8" onClick={writeText} >8</button>
          <button type="button" class="btn btn-secondary" value="9" onClick={writeText} >9</button>
          <button type="button" class="btn btn-secondary" value="-" onClick={writeText} >-</button>
        </div>
        <div>
          <button type="button" class="btn btn-secondary" value="4" onClick={writeText} >4</button>
          <button type="button" class="btn btn-secondary" value="5" onClick={writeText} >5</button>
          <button type="button" class="btn btn-secondary" value="6" onClick={writeText} >6</button>
          <button type="button" class="btn btn-secondary" value="+" onClick={writeText} >+</button>
        </div>
        <div>
          <button type="button" class="btn btn-secondary" value="1" onClick={writeText} >1</button>
          <button type="button" class="btn btn-secondary" value="2" onClick={writeText} >2</button>
          <button type="button" class="btn btn-secondary" value="3" onClick={writeText} >3</button>
          <button type="button" class="btn btn-secondary" value="." onClick={writeText} >.</button>
        </div>
        <div>
          <button type="button" class="btn btn-secondary" value="0" onClick={writeText}  style={{width:"162px"}}>0</button>
          <button type="button" class="btn btn-secondary" value="=" onClick={(e)=>setValue(eval(value))}>=</button>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
