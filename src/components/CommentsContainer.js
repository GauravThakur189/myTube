import React from 'react'

const commentsData = [
    {
        name:"gaurav singh",
        text:"this is the comment or nth level comment",
        replies:[]
    },
    {
        name:"gaurav singh",
        text:"this is the comment or nth level comment",
        replies:[{
            name:"gaurav singh",
            text:"this is the comment or nth level comment",
            replies:[{
                name:"gaurav singh",
                text:"this is the comment or nth level comment",
                replies:[{
                    name:"gaurav singh",
                    text:"this is the comment or nth level comment",
                    replies:[]
                },]
            },]
        },]
    },
    {
        name:"gaurav singh",
        text:"this is the comment or nth level comment",
        replies:[]
    },
    {
        name:"gaurav singh",
        text:"this is the comment or nth level comment",
        replies:[]
    },
    {
        name:"gaurav singh",
        text:"this is the comment or nth level comment",
        replies:[]
    },
    {
        name:"gaurav singh",
        text:"this is the comment or nth level comment",
        replies:[{
            name:"gaurav singh",
            text:"this is the comment or nth level comment",
            replies:[{
                name:"gaurav singh",
                text:"this is the comment or nth level comment",
                replies:[{
                    name:"gaurav singh",
                    text:"this is the comment or nth level comment",
                    replies:[{
                        name:"gaurav singh",
                        text:"this is the comment or nth level comment",
                        replies:[]
                    },]
                },]
            },]
        },]
    },
    {
        name:"gaurav singh",
        text:"this is the comment or nth level comment",
        replies:[{
            name:"gaurav singh",
            text:"this is the comment or nth level comment",
            replies:[]
        },]
    },
    {
        name:"gaurav singh",
        text:"this is the comment or nth level comment",
        replies:[]
    },
]


const Comments = ({data})=>{
    const {name,text,replies} = data;
   return(
    <div className=' flex shadow-sm bg-gray-100 rounded-lg' >
        <img className='h-8 w-8' src='https://w7.pngwing.com/pngs/134/220/png-transparent-person-illustration-india-login-computer-icons-emoticon-medicine-user-login-icon-miscellaneous-text-logo-thumbnail.png' alt='user' />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
   )
   } 


const CommentList = ({ comments }) => {
    // Check if comments is null or undefined, return null if true
    if (!comments) return null;
  
    return comments.map((comment, index) => (
      <div key={index}>
        <Comments data={comment} />
        <div className='pl-5 border border-l-8 rounded mt-2'>
          {/* Recursively render CommentList for replies */}
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ));
  };
  



const CommentsContainer = () => {
  return (
    <div className='m-4 p-2 '>
        <h1 className='text-lg font-bold'>Comments</h1>
        {/* <Comments data = {commentsData[0]}/> */}
        <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer