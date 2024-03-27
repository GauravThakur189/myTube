import React from 'react'
import ButtonList from './ButtonList'
import VedioContainer from './VedioContainer'

const MainContainer = () => {
  return (
    <div className='flex flex-wrap'>
    <div><ButtonList/></div>
    <div><VedioContainer /></div>
    </div>
  )
}

export default MainContainer