const List  = ({task}) => {
    return(
        <div className="ui relaxed divided list">
        <div className="item">
          <div className="content">
          {task}
            <i className="large cut right aligned icon"></i>
            <div className="description">Updated 10 mins ago</div>
          </div>
        </div>
      </div>
    )
}

export default List;