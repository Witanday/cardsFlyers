import React from 'react';

import './card.styles.css';

export const Card = (props)=>{
    console.log(props.monster.id)
    return(
        <div className='card-container'>
        <img className="card-image" alt="monster" src={`https://source.unsplash.com/random/180×180/?${props.monster.id}`}/>
            <h2 >{props.monster.name}</h2>
            <p>{props.monster.email}</p>
          </div>)
    
}