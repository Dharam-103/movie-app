import React from 'react'
import{Flex,Stack,Text,Button,Image} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
function SingleTvData({poster_path,name,vote_average,vote_count,first_air_date,popularity,overview}) 
{

const image='https://image.tmdb.org/t/p/w500';
const navigate=useNavigate();
const handleClick=()=>{
 navigate('/tvshows');

}
return (
    <>
      <Flex justifyContent={'center'} alignItems='center'>
        <Image w="100%" h="400px" src={`${image}${poster_path}`} alt='error' _hover={{transform:'scaleY(1.3)'}} cursor='pointer' />
        <Stack direction='column' spacing="10px" ml={10}>
        <Text color='red'>Title : {name}</Text>
        <Text color='red'>Released_Date : {first_air_date}</Text>
        <Text color='red'>Popularity : {popularity}</Text>
        <Text color='red'>Overview : {overview}</Text>
        <Text color='red'>Vote_Average : {vote_average}</Text>
        <Text color='red'>Vote_Count : {vote_count}</Text>
        <Button w='20%' colorScheme='teal' variant='outline' onClick={handleClick}>Go Back</Button>
        </Stack>
      </Flex>
    </>
  )
}

export default SingleTvData;