import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect, Connect } from 'react-redux';
import { addFavorite,removeFavorite } from '../redux/actions';

const DivCard= styled.div `
   width: fit-content;
   background-color: #0C8C1E;
   border-radius: 10px;
   `;
const Button= styled.button `
   background-color: #E42800;
   border-radius: 20%;
`;

 function Card({id,name,species,gender,image,onClose,addFavorite,removeFavorite}) {
   const[isFav,setIsFav]=useState(false);
   const handleFavorite=()=>{
      if (isFav){
         setIsFav(false);
         removeFavorite(id)
      }else{
         setIsFav(true);
         addFavorite({id,name,species,gender,image,onClose,addFavorite,removeFavorite})
      }
     
   }

   return (
      <DivCard>
          isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   );  
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img  src={image} alt="" /> 
         <h2>Species:{species}</h2>
         <h2>Gender:{gender}</h2>
         <Button onClick={()=> {onClose(id)}}>x</Button>
      </DivCard>
   );
}
const mapDispatchToProps=(dispatch)=>{
   return{
      addFavorite:(character)=>{dispatch(addFavorite(character))},
      removeFavorite:(id)=>{dispatch(removeFavorite(id))}
   }
};
export default connect(null,mapDispatchToProps)(Card);
