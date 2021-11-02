import { useState } from "react";
function TextInput(props) {
    const [value,setValue] = useState('');
  return (
    <div>
      <label>{props.label} </label>
      <input type={props.type === undefined ? 'text' : props.type}
       name={props.identifier} 
       id={props.identifier}
       placeholder={props.identifier}
       onChange={(e)=>{setValue(e.target.value)}}
       value={value}
       />
      {value.length == 0 && <b style={{color:'red'}}> X</b>}
      {value.length != 0  && <b style={{color:'green'}}> O</b>}
      {value.includes('b')  && <b style={{color:'green'}}> B detected</b>}
    </div>
  );
}

export default TextInput;
