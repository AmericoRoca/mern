import { Link } from "react-router-dom"
import React, { useState } from 'react';


const CoasterPage = () =>{

    const [coasters, setCoasters] = useState([])

    const loadCoaster = () =>{

        fetch('http://localhost:5005/api/coaster')
            .then(res => res.json())
            .then(allCoasters => setCoasters(allCoasters))
    }

    loadCoaster()

    return(
        <main>
            <h1>Lista</h1>
            <hr/>
            {coasters.map(eachCoaster =>{
                return (
                    <article className="coaster-card">
                        <img src={eachCoaster.imageUrl}></img>
                        <h3>{eachCoaster.title}</h3>
                    </article>
                )
            })}
            <Link to="/">Ir a inicio</Link>
        </main>
    )
}

export default CoasterPage