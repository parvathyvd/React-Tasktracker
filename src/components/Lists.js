import {React,useRef} from "react";
import './css/Lists.css';

const Lists = ({tasks, onClickHandler}) => {
    
    const item = useRef(null);

    const task = tasks.map((task,i) => {
        return(
            <div className="ui relaxed divided list" key={task.id} ref={item} index={i}>
            <div className="item">
              <div className="content">
                  <div className="task-content">
                        {task.text} 
                        {task.text ? <i className="large cut right aligned icon" onClick={(index)=> onClickHandler(index)}></i>: ''}
                  </div>
              </div>
            </div>
          </div>
        )
    }) 

    return(
        <div>
            {task}
        </div>
    )
    
}


export default Lists;