import React, { useEffect ,useState} from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VedioCart from './VedioCart';
import { Link } from 'react-router-dom';



const VedioContainer = () => {
  const [vedios, setVedios] = useState([]);
  const[selectedVideo,setSelectedVideo]=useState([]);
   useEffect(()=>{
      getVedios();
   },[])


   const getVedios = async()=>{
    const data  = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json(); 
    setVedios(json.items)
    setSelectedVideo(json.items);
   }

   
  // const filteredVedios = selectedVideo.filter((res)=>{
  //  res.data.title.toLowerCase().includes(query.toLowerCase());
  //  })
  //  {setVedios(filteredVedios)}

  
return (
  <> 
  
  <div className='m-5 flex flex-wrap'>
    {vedios.map((vedio) => (
      <Link to={'/watch?v=' + vedio.id} key={vedio.id}>
        <div><VedioCart info={vedio} /></div>
      </Link>
    ))}
   
  </div>
  </>
);
    }


export default VedioContainer


