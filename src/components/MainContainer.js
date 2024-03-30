import React from 'react'
import ButtonList from './ButtonList'
import VedioContainer from './VedioContainer'

const MainContainer = ({search}) => {
  console.log(search);
  return (
    <div className='flex flex-wrap'>
    <div><ButtonList/></div>
    <div><VedioContainer search={search} /></div>
    </div>
  )
}

export default MainContainer