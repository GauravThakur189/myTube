import React,{useState} from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import "../App.css";
import VedioContainer from './VedioContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  
  return (
    <div className='flex ' >
        <SideBar/>
        <Outlet />
        
    </div>
  )
}

export default Body