import {useState ,useEffect} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import axios from "axios";
import {Box} from "@chakra-ui/react";
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContextProvider';
import Loader from "../Components/Loader";
import SingleTvData from '../SingleData/SingleTvData';
const API_KEY='1d03c1935f024dc3e3f8bacd7ec0d029';

const getData=(id)=>{
   return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
}

function SingleTvPage() {
    const{id}=useParams();
    const{loading,setLoading}=useContext(SearchContext);
    console.log(id);
    const[singleData,setSingleData]=useState({});
    

    useEffect(()=>{
        setLoading(true);
        getData(id).then((res)=> {
            console.log(res.data);
            setSingleData(res.data)
            setLoading(false);
        })
        .catch((err)=> {
            console.log(err);
            setLoading(false);
        })

    },[])

  return (
    <>
       <Navbar />
   
         {
            loading ? <Loader /> : <Box w='80%' display='block' m={'auto'} mt={150}><SingleTvData {...singleData}/></Box>
         }
       
       <Footer />
    </>
  )
}

export default SingleTvPage;