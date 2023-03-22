import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Detail = () =>{
    const {detailId} = useParams();
    const [characters, setCharacters] = useState([]);
    
    useEffect(()=>{
        const URL_BASE = "https://be-a-rym.up.railway.app/api"; 
        const KEY = "44c4ae584784.b53fa8338454b0c4c255";
        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then((response) => setCharacters(response.data));
    }, []);

    return( 
        <div>
            {
                characters.name ?
                (<>
                 <h1>{characters.name}</h1>
            <p>Status: {characters.status}</p>
            <p>Specie: {characters.species}</p>
            <p>Gender: {characters.gender}</p>
            <p>Origen: {characters.origin?.name}</p> 
            {/* el signo de pregunta sirve para decir que cuando nos aseguremos que llegó la informacion recien en ese momento muestre la propiedad name */}
            <img src={characters.image} alt="img" />
                </>)
                : (<h3>Loading...</h3>)
            }
        </div>
        
    )
};

export default Detail;