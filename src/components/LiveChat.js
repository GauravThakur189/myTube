import React,{useEffect, useState} from 'react'
import ChatView from './ChatView'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';


// var nameList = [
//   'Time', 'Past', 'Future', 'Dev',
//   'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
//   'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
//   'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
//   'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
//   'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
//   'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
//   'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
//   'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
//   'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
//   'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
//   'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
//   'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
//   'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
//   'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
//   'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
//   'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
//   'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
//   'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
//   'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
//   'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
// ];


// function makeid(length) {
//   let result = '';
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const charactersLength = characters.length;
//   let counter = 0;
//   while (counter < length) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     counter += 1;
//   }
//   return result;
// }




const LiveChat = () => {
   const [liveMessage,setLiveMessage] = useState('');
  
    const dispatch = useDispatch();
    const chatMessage = useSelector((state) => state.chat.messages);

    useEffect(() => {
     const i= setInterval(() => {
        
        // console.log("api polling")
        dispatch(
          addMessage({
          name:generateRandomName(),
          messages:makeRandomMessage(20)
        }));
      }, 1500);
    
      return () => {
        clearInterval(i);
      }
    }, [])
    
    return (
      <>
    <div className='w-full h-full border border-black rounded-lg bg-slate-100 '>
      <div className=" h-96 overflow-y-auto flex-col-reverse">
      {chatMessage.map((chat ,index)=>(
        <ChatView key={index} name={chat.name} message={chat.messages} />
      ))}
      </div>
    </div>
    <form className='m-1 p-2'
    onSubmit={e=>{
      e.preventDefault()
      dispatch(addMessage(
        {
          name:"Gaurav singh",
          messages:liveMessage
        }
      ))
      setLiveMessage("");
      console.log(liveMessage)}}>
      <input className='p-1 w-72' 
      type='text' 
      placeholder='Type your message here...'
      value={liveMessage}
      onChange={(e)=>setLiveMessage(e.target.value)}
       />
      <button className=' m-2 p-1  border border-gray-400 shadow-lg  rounded-md'>Send Chat</button>
    </form>
    </>
  )
}

export default LiveChat