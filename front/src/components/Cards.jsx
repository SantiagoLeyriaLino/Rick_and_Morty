import styled from 'styled-components';
import Card from './Card.jsx';

const DivCards= styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   height: 40 em;
`

export default function Cards({characters, onClose }) {
   
   return(
       <DivCards>
      {characters.map(({id, name, species, gender, image}) => {
            return (
               <Card
            key={id}
            id={id} 
            onClose = {onClose}
            image = {image}
            name = {name}
            species = {species}
            gender = {gender}
            />
            );
         })}
   </DivCards>
   );
}
