import React, {useState} from 'react';
import "./Style.css";

const Contador = () => {
    
    const [ageJane, setAgeJane]= useState(0)
    const [ageJohn, setAgeJohn] = useState(0)

    const aumentar = () =>{
        console.log('click');
        setAgeJane(ageJane + 1)
    }

    const aumentar2 = () =>{
        console.log('click');
        setAgeJohn(ageJohn + 1)
    }
   
    return (
        <div>
            <div>
            <h1>Doe, Jane</h1>
            <h2>Age: {ageJane}</h2>
            <h2>hair Color: Black</h2>
            <button onClick={() =>  aumentar()}> Happy Birthday for Jane</button>
            </div>

            <div>
            <h1>Smith, John</h1>
            <h2>Age: {ageJohn}</h2>
            <h2>hair Color: Brown</h2>
            </div>
            <button onClick={() =>  aumentar2()}> Happy Birthday for John</button>
        </div>
    )
}

export default Contador