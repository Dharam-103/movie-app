import React, { useContext } from 'react'
import {useState,useEffect} from "react";
import axios from "axios";
import { SearchContext } from '../Context/SearchContextProvider';
import Loader from './Loader';
import{Box,Grid,Image,Heading,Text} from "@chakra-ui/react";
import Navbar from './Navbar';
import Footer from './Footer';
import Carousel from './Carousel';
const API_KEY='1d03c1935f024dc3e3f8bacd7ec0d029';
const getData=()=>{
   return axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
};




function Trending() {
 const[trending,setTrending]=useState([]);
 const{loading,setLoading}=useContext(SearchContext);
 const image='https://image.tmdb.org/t/p/w500';

  useEffect(()=>{
    setLoading(true);
    getData().then((res)=> {
     console.log(res.data.results);
     setTrending(res.data.results);
     setLoading(false);
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false);
    })
 },[]);

  return (
    <>
     <Navbar />
     <Carousel />
    <Heading mt={4} ml={5} fontSize="15px">Latest Trending Category</Heading>
         {loading ? <Loader /> :
        <Box w={'90%'} display="block" m={'auto'} mt={5} >
          <Grid  templateColumns='repeat(4, 1fr)' gap={6} >
             {
                trending.map((trend)=>{
                 return <Box cursor={'pointer'} textAlign={'center'} >
                          <Image  w={'100%'} h={'400px'} borderRadius="10px" src={ trend.poster_path ? `${image}${trend.poster_path}`:'https://www.whoa.in/download/raees-shah-rukh-khan-bollywood-movies-poster'} alt="error" _hover={{transform:'scaleY(1.3)'}}/>
                          <Text>{trend.title}</Text>
                         </Box>
                
                 })
              }
            </Grid>
         </Box>
       }
      <Footer />
    </>
  )
}

export default Trending;