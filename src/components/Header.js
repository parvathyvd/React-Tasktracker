import { useState,useRef } from "react"
import Lists from "./Lists";
import './css/Header.css';

const Header = () => {
   const  [inputField,setInputField] = useState([{id: 0,
text: ''}]);

   const mainInput = useRef(null);

   const onChangeHandler = (e) => {
       console.log(e.target.value);
       setInputField([...inputField])
   }
   const onClickHandler = (key) => {
    let itemId = key.target.parentElement.parentElement.parentElement.parentElement.getAttribute('index');
    console.log('clicked on icon', itemId);
    console.log('actual array of inputs',inputField);
    // Remove the index of task and then update state
    setInputField([...inputField.filter(inp => inp.id !== itemId)])


   }
    const addTask = () => {    
        setInputField([...inputField])
        if(mainInput.current.value && inputField.text !==''){
        setInputField([...inputField,
            {
                id : inputField.length,
                text : mainInput.current.value
            }]);

        }
        else{
            alert('please input some task')
        }
       
        console.log('actual value',[...inputField]);

        console.log('input value field',mainInput.current.value);
        mainInput.current.value = '';

    }
    return(
        <>
            <div className="ui input mb-2">
            <input type="text" placeholder="Search..." ref={mainInput} onChange={onChangeHandler}/>
            <br/>
            <button className="ui positive basic button" onClick={addTask}>Add</button>
            </div>
            <br/>
            <div>
            <Lists tasks = {inputField} onClickHandler = {onClickHandler}/>
            </div>
        </>
        
    )
}

export default Header;