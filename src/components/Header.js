import { useState,useRef } from "react"
import Lists from "./Lists";

const Header = () => {
   const  [inputField,setInputField] = useState([]);
   const mainInput = useRef(null);

   const onChangeHandler = (e) => {
       console.log(e.target.value);
   }
    const addTask = () => {
    
        if(mainInput.current.value){
        setInputField([...inputField,mainInput.current.value]);
        }
        else{
            alert('please input some task')
        }
       
        console.log('actual value', inputField);
        console.log('input value field',mainInput.current.value);
         mainInput.current.value = '';

    }
    return(
        <>
            <div className="ui input">
            <input type="text" placeholder="Search..." ref={mainInput} onChange={onChangeHandler}/>
            <br/>
            <button className="ui positive basic button" onClick={addTask}>Add</button>
            </div>
            <br/>
            <div>
            <Lists tasks = {inputField}/>
            </div>
        </>
        
    )
}

export default Header;