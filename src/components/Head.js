import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import VedioContainer from './VedioContainer';
import { useSearch } from '../store/context';
const Head = ({handleSearch}) => {
  const { search, setSearch } = useSearch();
  
  const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery);
   // State to handle the visibility of sidebar.
   const toggleSideBar = ()=>{
       dispatch(toggleMenu());
   }

  //  const searchResult = ()=>{
  //     // <VedioContainer  query={searchQuery}/>;
  //  }

  
  return (
    <div className='flex justify-between p-2 m-2 shadow-lg fixed'>
    <div className='flex gap-4'>
    <img 
    onClick={()=>toggleSideBar()}
     className='h-8 w-8 hover:shadow-lg cursor-pointer'
     alt='menu'
     src='https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png'  />
     <img className='h-6 w-24' 
     alt='icon'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TdQa9xvFpj9ZPBKS2HlJauJZyVzqOuUI8ROCBMAX&s' />
    </div>
    <div className='flex '>
   
        <input className=' px-3 h-8 w-80 border border-gray-600 rounded-l-full '  type="text" 
         value={searchQuery}
         onChange={e=>setSearchQuery(e.target.value)}
         onClick={searchResult}
        placeholder="Search"/>
        <button onClick={()=>setSearch(searchQuery)} className=' px-5 border border-gray-600 rounded-r-full bg-slate-400'>
         🔍
        </button>  
    </div>
    <div className='flex gap-6 '>
        <button className='h-6 w-6'>
            <img alt='create' src='https://static.thenounproject.com/png/3750242-200.png'/>
        </button>
        <button className='h-6 w-6 gap-6'>
            <img alt='notification' src='https://w1.pngwing.com/pngs/930/970/png-transparent-notification-icon-ios-7-iphone-icon-design-zooming-user-interface-button-apple-push-notification-service-computer-software.png' />
        </button>
        <button className='h-6 w-6  gap-6'>
          <img src='https://w7.pngwing.com/pngs/416/62/png-transparent-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer-monochrome.png' alt='signIn' />
        </button>
    </div>
    </div>
  )
}

export default Head