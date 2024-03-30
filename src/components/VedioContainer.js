import React, { useEffect ,useState} from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VedioCart from './VedioCart';
import { Link } from 'react-router-dom';
import { useSearch } from '../store/context';



const VedioContainer = () => {
  const { search } = useSearch();
  const [vedios, setVedios] = useState([]);
  const[selectedVideo,setSelectedVideo]=useState([]);
   useEffect(()=>{
      getVedios();
   },[search])


   const getVedios = async()=>{
    const data  = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json(); 
    console.log(json);
    // console.log(json.itmes);
    const newData = json.items.filter((data)=> data.snippet.title.toLowerCase().includes(search.toLowerCase()));
    console.log(newData);
    setVedios(newData)
    setSelectedVideo(newData);
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


