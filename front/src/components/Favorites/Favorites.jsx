import { useSelector } from "react-redux";
import Card from "../Card";



const Favorites =()=>{
    
    const favorites = useSelector(state=>state.myFavorites);


    return(
        <>
        {
            favorites.map(({id, name, species, gender, image})=>{
                return( <Card
                key={id}
                id={id} 
                image = {image}
                name = {name}
                species = {species}
                gender = {gender}
                />)
            })
        }
        </>
    )
};

export default Favorites;