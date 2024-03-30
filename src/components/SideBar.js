import React from 'react'
import { useSelector } from 'react-redux';

const SideBar = () => {

  const isMenuOpen = useSelector((state)=> state.app.isMenuOpen);
    
    if(!isMenuOpen) return null;
  return (
    <div className=' p-5 w-36 flex-col bg-gray-100  shadow-lg  '>
    <div>
      <ul className='my4'>
        <li>Home</li>
        <li>Live</li>
        <li>shorts</li>
        <li>vedios</li>
      </ul>
    </div>
    <div>
      <ul className='my-4'>
        <li className='font-bold'>You</li>
        <li>history</li>
        <li>liked Vedios</li>
      </ul>
    </div>
    <div>
      <h1 className='font-bold '>Subscriptions</h1>
      <ul className='my-4'>
        <li>music</li>
        <li>song</li>
        <li>sports</li>
        <li>gaming</li>
      </ul>
      </div>
      <div>
      <ul className='my-4'>
        <li className='font-bold '>Watch Later</li>
        <li>movies</li>
        <li>sports</li>
        <li>Gaming</li>
      </ul>
      </div>
    </div>
  )
}

export default SideBar