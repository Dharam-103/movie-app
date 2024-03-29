import React from 'react'
import{Flex,Stack,Text,Button,Image} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
function SingleMovieData({poster_path,imdb_id,title,overview,release_date,status,tagline,popularity,vote_average,vote_count}) 
{

const image='https://image.tmdb.org/t/p/w500';
const navigate=useNavigate();
const handleClick=()=>{
 navigate('/');

}
return (
    <>
      <Flex justifyContent={'center'} alignItems='center'>
        <Image w="100%" h="400px" src={`${image}${poster_path}`} alt='error' _hover={{transform:'scaleY(1.3)'}} cursor='pointer'  />
        <Stack direction='column' spacing="10px" ml={10}>
        <Text color='red'>imdb_id : {imdb_id}</Text>
        <Text color='red'>Title : {title}</Text>
        <Text color='red'>Overview : {overview}</Text>
        <Text color='red'>Release_Date : {release_date}</Text>
        <Text color='red'>Status : {status}</Text>
        <Text color='red'>Tagline : {tagline ? tagline : 'Forever'}</Text>
        <Text color='red'>Popularity : {popularity}</Text>
        <Text color='red'>Vote_Average : {vote_average}</Text>
        <Text color='red'>Vote_Count : {vote_count}</Text>
        <Button w='20%' colorScheme='teal' variant='outline' onClick={handleClick}>Go Back</Button>
        </Stack>
      </Flex>
    </>
  )
}

export default SingleMovieData;