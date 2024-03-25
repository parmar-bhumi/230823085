function Tag(props) {
    return (
      <div style={{"display":"flex", marginLeft:"10px"}}>
        <div className="one">
        <h2>
          {props.post}
        </h2>
        <p>
          Posts
        </p>
        </div>
        <div className="two" style={{marginLeft:"10px"}}>
        <h2>   
          {props.followers}    
        </h2>
        <p>
          Followers
        </p>
        </div>
        <div className="three" style={{marginLeft:"10px"}}>
        <h2>
          <div className="" style={{"display":"flex"}}></div>
          {props.following}    
        </h2>
        <p>
          Following
        </p>
        </div>
      </div>
      
      
    );
  }
  
  
  export default Tag;
