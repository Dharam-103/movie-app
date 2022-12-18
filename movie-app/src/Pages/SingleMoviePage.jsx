import {useState ,useEffect} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import{Button} from "@chakra-ui/react";
import axios from "axios";
import {Box} from "@chakra-ui/react";
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContextProvider';
import SingleMovieData from '../Components/SingleMovieData';
import Loader from "../Components/Loader";
import YouTube from 'react-youtube';

const API_KEY='1d03c1935f024dc3e3f8bacd7ec0d029';

const getData=(id)=>{
   return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
}

function SingleMoviePage() {
    const{id}=useParams();
    const{loading,setLoading}=useContext(SearchContext);
    console.log(id);
    const[singleData,setSingleData]=useState({});
    const[player,setPlayer]=useState(false);

    useEffect(()=>{
        setLoading(true);
        getData(id).then((res)=> {
            console.log(res.data);
            console.log(res.data.videos.results)
            setSingleData(res.data)
            setLoading(false);
        })
        .catch((err)=> {
            console.log(err);
            setLoading(false);
        })

    },[])

   

    const RenderTrailer=()=>{
      const trailer=singleData.videos.results.find(vid=> vid.name==="Official Trailer")
      console.log(trailer);

      const opts={
          width:'100%',
          height:'500px',
          playerVars: {
            autoplay: 1,
            controls:0,
          },
      }

      return(
          <>
             <YouTube 
                videoId={trailer.key}
                opts={opts}
             />
          </>
      )
    }

   

  return (
    <div>
       <Navbar />
       <Box w="80%" display="block" m="auto" mt={150} position="relative">
       {singleData.videos && player? <RenderTrailer /> :null}
       <Button w='10%' mt={3} colorScheme='teal' variant='outline' onClick={()=> setPlayer(true)}>Watch Trailer</Button>
       {player ?<Button w='7%' position="absolute" bottom="60px" left="10px" colorScheme='teal' variant='outline' onClick={()=> setPlayer(false)}>Close</Button> :null}
       </Box>
         {
           loading ? <Loader /> : <Box cursor={'pointer'} w='80%' display='block' m={'auto'} mt={50}><SingleMovieData {...singleData} /></Box>
         }
       
       <Footer />
    </div>
  )
}

export default SingleMoviePage;