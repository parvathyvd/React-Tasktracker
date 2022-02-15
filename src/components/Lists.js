import React from "react";
// import List from "./List";

const Lists = ({tasks}) => {
    const task = tasks.map(task => {
        return(
            <div className="ui relaxed divided list" key={Math.random()*121}>
            <div className="item">
              <div className="content">
              {task}
                <i className="large cut right aligned icon"></i>
                <div className="description">Updated 10 mins ago</div>
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