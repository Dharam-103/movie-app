import React from 'react';
import axios from "axios";
import{Link} from "react-router-dom";
import { useEffect,useContext } from 'react';
import { Grid,Text,Image,Box, Heading} from '@chakra-ui/react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';
import { SearchContext } from '../Context/SearchContextProvider';
import Loader from './Loader';
const API_KEY='1d03c1935f024dc3e3f8bacd7ec0d029';

const getData=(shown,input)=>{
   return axios.get(`https://api.themoviedb.org/3/${shown}/movie?api_key=${API_KEY}&query=${input}`)
}

function Home() {
  const{movies,setMovies,loading,setLoading,input}=useContext(SearchContext);
  console.log(input)
  const shown= input?'search':'discover'
 const image='https://image.tmdb.org/t/p/w500';
 useEffect(()=>{
   setLoading(true);
   const id=setTimeout(()=>{
    getData(shown,input).then(res=> {
      console.log(res.data.results)
        setMovies(res.data.results)
        setLoading(false);
     })
     .catch(err=> {
      console.log(err)
      setLoading(false);
    })
   },800)

   return ()=>{
     clearInterval(id);
   }
    
 },[input])

 
  return ( 
    <>
     <Navbar />
     <Carousel />
      <Heading mt={4} ml={5} fontSize="15px">Best Popular Movies</Heading>
      {loading ? <Loader /> :
        <Box w={'90%'} display="block" m={'auto'} mt={5} >
          <Grid  templateColumns='repeat(4, 1fr)' gap={6} >
             {
                movies.map((movie)=>{
                 return <Link to={`/movie/${movie.id}`} key={movie.id}><Box cursor={'pointer'} textAlign={'center'} >
                          <Image  w={'100%'} h={'400px'} borderRadius="10px" src={ movie.poster_path ? `${image}${movie.poster_path}`:'https://www.whoa.in/download/raees-shah-rukh-khan-bollywood-movies-poster'} alt="error" _hover={{transform:'scaleY(1.3)'}}/>
                         </Box>
                     </Link>
                 })
              }
            </Grid>
         </Box>
       }
         <Footer />
    </>
  )
}

export default Home;

