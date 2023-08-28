import React from 'react'
import Card from './Card'
import './Cards.css'
import data from '../Data/data.json'
import { useParams } from 'react-router-dom';
const Cards = () => {
  let { subject } = useParams(); 

  if (subject === undefined) {
    subject = "Operating System";
  }
  // alert(subject);
  const subjectData = data[subject] || [];

  return (
    <> 
    <h1>{subject}</h1>  
     <div className='cards'>
        {subjectData.map(({ques,ans})=>(
            <Card ques={ques} ans={ans}/>
        ))}
    </div>
    </>

  )
}

export default Cards
