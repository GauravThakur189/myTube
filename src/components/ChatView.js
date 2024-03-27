import React from 'react'

const ChatView = ({name,message}) => {
  return (
    <div className='flex m-2'>
        <img className='h-6 w-6' src='https://banner2.cleanpng.com/20180612/ih/kisspng-computer-icons-avatar-user-profile-clip-art-5b1f69f0e68650.4078880515287853929442.jpg' alt='users' />
        <h1 className='ml-1 mr-2 font-bold'>{name}</h1>
        <p>{message} </p>
    </div>
  )
}

export default ChatView