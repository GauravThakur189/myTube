import React from 'react'
import Button from './Button'


const ButtonList = () => {

  const  buttons = [ 'All','music','javascript', 'python', 'java','design','code','news','gaming','trains','aircrafts','satsang','software engineer'];
 
    

 
  return (
    <div className='flex'>
      {buttons.map((value,index)=>{
       return <button key={index}><Button name={value}/></button>
      })}
      
    </div>
  )
}

export default ButtonList