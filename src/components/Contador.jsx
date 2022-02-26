import { useState } from "react";

export function Counter(){
const [conter, setCounter] = useState(0)

    function increment(){
        setCounter(conter + 1);
        console.log('Incrementing')
    }

    return(
        <div>
            <h2>{conter}</h2>
            <button type="button" onClick={increment}>Incrementing</button>
        </div>
    );
}