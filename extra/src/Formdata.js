import React, {useRef, useState, useEffect} from "react";

function Formdata(){
    // const inputNameRef = useRef("Atmiya");
    const inputCityRef = useRef(null);
    const [name, setName] = useState("")
    const [city, setCity] = useState("")

    function handleSubmit(){
        alert(`Name: ${inputCityRef.current.value}`);
    }

    useEffect(()=>{
        //console.log("called");
        const data = {"name":"Prakash Gujarati", "city":"rajkot"}
        setName(data.name)
        setCity(data.city)
    },[])

    return (
        <>
        <div className="App">            
            <h3>{name} {city}</h3>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                />
                 <input
                    type="text"
                    name="city"
                    onChange={(e)=>setCity(e.target.value)}
                    ref={inputCityRef}
                    value={city}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Formdata;