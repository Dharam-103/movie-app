import {useState ,useEffect} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContextProvider';
import SingleMovieData from '../Components/SingleMovieData';
import Loader from "../Components/Loader";
const API_KEY='1d03c1935f024dc3e3f8bacd7ec0d029';

const getData=(id)=>{
   return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
}

function SingleMoviePage() {
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
    <div>
       <Navbar />

         {
            loading ? <Loader /> : <SingleMovieData {...singleData}/>
         }
         
       <Footer />
    </div>
  )
}

export default SingleMoviePage;