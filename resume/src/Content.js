import React from 'react'
function Content(props){
    return (
        <>
        <div style={{"float":"left","width":"60%"}}>
        <div >
            <h3 style={{"padding":"20px","display":"flex"}}>Summary</h3><hr></hr>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt eligendi deserunt amet sed, repudiandae ex similique earum iure officiis repellat voluptate voluptatum aut ipsum alias necessitatibus dolorum quas, esse consectetur? Blanditiis modi mollitia autem unde, suscipit quo nobis cum in doloribus cumque, quae ipsum commodi deserunt a enim qui.</p>
        </div> 
        <div >
            <h3 >PROFESSIONAL EXPERIANCE</h3><hr></hr>
            <p>Senior IT Product Manager</p>
            <p>Rover Games</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt eligendi deserunt amet sed, repudiandae ex similique earum iure officiis repellat voluptate voluptatum aut ipsum alias necessitatibus dolorum quas, esse consectetur? Blanditiis modi mollitia autem unde, suscipit quo nobis cum in doloribus cumque, quae ipsum commodi deserunt a enim qui.
            </p>
        </div>
        <div>
            <h3>Project Manger</h3>
            <p>Tesla</p>
        
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt eligendi deserunt amet sed, repudiandae ex similique earum iure officiis repellat voluptate voluptatum aut ipsum alias necessitatibus dolorum quas, esse consectetur?</p><ul> <li>Blanditiis modi mollitia autem unde, suscipit quo nobis cum in doloribus cumque, quae ipsum commodi deserunt a enim qui.Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li><li> Eos nesciunt eligendi deserunt amet sed, repudiandae ex similique earum iure officiis repellat voluptate voluptatum aut ipsum alias necessitatibus dolorum quas, esse consectetur? </li><li>Blanditiis modi mollitia autem unde, suscipit quo nobis cum in doloribus cumque, quae ipsum commodi deserunt a enim qui.</li></ul>
        </div>
        <div>
            <table border="5">
                <tr>
                    <th>Project name</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Booster CRM</td>
                    <td>Eos nesciunt eligendi deserunt amet sed, repudiandae ex similique  </td>
                </tr>
                <tr>
                    <td>Permission System</td>
                    <td>Eos nesciunt eligendi deserunt amet sed, repudiandae ex similique </td>
                </tr>
            </table>    
        </div>
        <div>
            <h3>EDUCATION</h3><hr></hr>
            <h3>Master of science,Industrial Engineering</h3>
            <p>University of California</p>
            <h3>Bachelor of Science,Industrial Engineering</h3>
            <p>University of California</p>
        </div>
        </div>
        <div style={{"float":"right","width":"40%"}}>
            <div style={{"float":"left","margin":"40px"}}>
                <h3>KEY ACHIVEMENTS</h3><hr></hr>
                <p>Cost Saving Of $100m</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt eligendi deserunt amet sed, repudiandae ex similique earum iure officiis repellat voluptate voluptatum aut ipsum alias necessitatibus dolorum quas, esse consectetur? Blanditiis modi mollitia autem unde, suscipit quo nobis cum in doloribus cumque, quae ipsum commodi deserunt a enim qui.</p>
                <p>Exceeded Throughput target by 90%</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt eligendi deserunt amet sed, repudiandae ex similique earum iure officiis repellat voluptate voluptatum aut ipsum alias necessitatibus dolorum quas, esse consectetur? Blanditiis modi mollitia autem unde, suscipit quo nobis cum in doloribus cumque, quae ipsum commodi deserunt a enim qui.</p>
            </div>
            <div style={{"margin":"40px"}}>
                <h3>On the board of</h3><hr></hr>
                <p>Certified Scrum Product Owner and professional</p>
                <p>Scrum Alliance</p>
                <p>PMI Aglie Certified Practitioner(PMI_ACP)</p>
                <p>PMI Project Management Institute</p>
            </div>
            <div style={{"margin":"40px"}}>
                <h3>Proud OF</h3><hr></hr>
                <p>Craftign</p>
                <p>Composing music</p>
            </div>
        </div>
        </>
        );
    }
    
    export default Content;



