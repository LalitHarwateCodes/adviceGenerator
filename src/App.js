import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios'

function App() {
  const [advice,setAdvice] = useState([])
  const [id,setId] = useState(1)
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(true)

  useEffect(()=> {
    axios.get(`https://api.adviceslip.com/advice/${id}`)
    .then(res => {
      setLoading(false)
      console.log(res)
      // setLoading(false)
      
      setAdvice(res.data.slip)
      setError('')
    })
    .catch(
      err => {
        setLoading(false)
        console.log("error please resolve")
        setError('Something went wrong 😯')
      }
    )
  },[id])

  const slowreload =  () => {

   
      setId( Math.floor(Math.random() * 200))
    
  }

  return (
   
      <div className='app'>
          <div className='header'>
            <h2 className='white'>Advice<span className='colors'>Generator</span></h2>
          </div>
        

      <div className='hello'>   
     <div className='card'>
     
          {
            error?
            
            <h1 className='heading'>{error}</h1>:
            
              loading?<h1>loading...</h1>:<><h1>{advice.advice}</h1><button onClick={ slowreload}>Next Advice</button></>
            
          }
        
     </div>
     </div>
      
    </div>
  ); 
}

export default App;
