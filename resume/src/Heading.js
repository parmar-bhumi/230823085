function Heading(props){
return (
    <>
    <div >
        <img src="profile.jpg" style={{"float":"right","height":"150px","width":"200px"}}/>
    </div> 
    <div >
        <h1 style={{"fontSize":"50px"}}>VANESSA FORD</h1>
        <p style={{"margin-top":"10px"}}>I solve the program and help people overcome obstacles</p>
        <p style={{"float":"left"}}><img  src="call.jpg" style={{"height":"20px","width":"30px"}}/>600-00-000</p>
        <p style={{"float":"left"}}><img src="image.png" style={{"height":"20px","width":"20px"}}/>v-ford@gmail.com</p>
        <p style={{"float":"left"}}><img src="weblink.jpg" style={{"height":"20px","width":"30px"}}/>www.linkedin.com/vanessa-ford</p>
        <p style={{"float":"left"}}><img src="location.jpg" style={{"height":"20px","width":"30px"}}/>san Francisco,CA</p>
    </div>  
    {/* <div>
    <header>
    <h3>Summary</h3>
    </header>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt eligendi deserunt amet sed, repudiandae ex similique earum iure officiis repellat voluptate voluptatum aut ipsum alias necessitatibus dolorum quas, esse consectetur? Blanditiis modi mollitia autem unde, suscipit quo nobis cum in doloribus cumque, quae ipsum commodi deserunt a enim qui.</p>
    </div>  */}
    </>
    );
}

export default Heading;