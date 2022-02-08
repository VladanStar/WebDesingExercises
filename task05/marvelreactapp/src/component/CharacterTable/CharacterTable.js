import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';

const CharacterTable = ({items, isLoading}) => {
  return isLoading ? <h1>Loading</h1> :
  <section className='contents'>
      {
          items.map((item)=>{
             return <CharacterItem  key={item.id} item={item} />

          })
      }

  </section>
  
};

export default CharacterTable;
