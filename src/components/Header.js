import { useState,useRef } from "react"
import Lists from "./Lists";
import './css/Header.css';

const Header = () => {
   const  [inputField,setInputField] = useState([{id: 0, text: ''}]);
   const mainInput = useRef(null);
  
   const onClickHandler = (id) => {
    let itemId = id
    console.log('clicked on icon', itemId);
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
       
        console.log('input value field',mainInput.current.value);
        mainInput.current.value = '';
    }
    return(
        <>
            <div className="ui input mb-2">
            <input type="text" placeholder="Add Task" ref={mainInput}/>
            <br/>
            <button className="ui positive basic button" onClick={addTask}>Add</button>
            </div>
            <br/>
            <div>
                {(inputField.length > 1) ? <Lists tasks = {inputField} onClickHandler = {onClickHandler}/> : 'No tasks to show. Please add task'}
            </div>
        </>
        
    )
}

export default Header;