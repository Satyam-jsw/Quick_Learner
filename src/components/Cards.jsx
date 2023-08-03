import React from 'react'
import Card from './Card'
import './Cards.css'
import data from '../Data/data.json'
const Cards = ({subject}) => {
  return (
    <> 
    <h1>{subject}</h1>  
     <div className='cards'>
        {data["Operating System"].map(({ques,ans})=>(
            <Card ques={ques} ans={ans}/>
        ))}
    </div>
    </>

  )
}

export default Cards
