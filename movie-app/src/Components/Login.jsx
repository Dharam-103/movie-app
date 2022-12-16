import React from 'react'
import {Link} from "react-router-dom";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
 
  export default function Login() {
    const{userData,setStatus}=useContext(AuthContext);
    const navigate=useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState('');
    console.log(email,password);

    const handleClick=()=>{
        if(userData.email===email && userData.password){
            alert('Login successfully');
            setStatus(true);
            navigate('/');
        }else{
            alert('Please provide correct credential')
        }
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input value={email} type="email" onChange={(e)=> setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input value={password} type="password" onChange={(e)=> setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleClick}
                  >
                  Login
                </Button>
                <Text>Not Register?<Link to="/register">Register here</Link></Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }