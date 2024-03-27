import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import VedioContainer from './VedioContainer';

const Head = () => {
  
  const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery);
   // State to handle the visibility of sidebar.
   const toggleSideBar = ()=>{
       dispatch(toggleMenu());
   }

   const searchResult = ()=>{
      // <VedioContainer  query={searchQuery}/>;
   }

  
  return (
    <div className='flex justify-between p-2 m-2 shadow-lg'>
    <div className='flex gap-4'>
    <img 
    onClick={()=>toggleSideBar()}
     className='h-8 w-8 hover:shadow-lg cursor-pointer'
     alt='menu'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlrM_gPuWI1eV2W8gV053gI9fl_rFe9Tb5x1hMf08rA&s'  />
     <img className='h-8 w-32' 
     alt='icon'
     src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png' />
    </div>
    <div className='flex '>
   
        <input className='h-8 w-80 border border-gray-600 rounded-l-full '  type="text" 
         value={searchQuery}
         onChange={e=>setSearchQuery(e.target.value)}
         onClick={searchResult}
        placeholder="Search"/>
        <button className=' border border-gray-600 rounded-r-full bg-slate-400'>Search</button>  
    </div>
    <div className='flex gap-4 '>
        <button className='h-8 w-8'>
            <img alt='create' src='https://static.thenounproject.com/png/3750242-200.png'/>
        </button>
        <button className='h-8 w-8 gap-4'>
            <img alt='notification' src='https://www.seekpng.com/png/detail/130-1304578_notification-comments-notification-icon-svg.png' />
        </button>
        <button className='h-8 w-20 border border-red-500 gap-4'>sign in</button>
    </div>
    </div>
  )
}

export default Head