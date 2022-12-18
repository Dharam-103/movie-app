import React from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Heading,
    Input,
    InputLeftElement,
    InputGroup,
    ButtonGroup,
} from '@chakra-ui/react';
  import { useState } from 'react';
  import { MoonIcon, SunIcon ,SearchIcon } from '@chakra-ui/icons';
  import { NavLink, Link} from 'react-router-dom';
  import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContextProvider';
  const links=[
      {path:"/",text:"Home"},
      {path:"/tvshows",text:"TV Shows"},
      {path:"/trending",text:"Trending"},
      {path:"/pricing",text:"Pricing"},
  ];

  export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const{input,setInput}=useContext(SearchContext);
    return (
      <>
     
    <Box bg={useColorModeValue('teal.200','black')} p={8} position="fixed" top='0' w={'100%'} zIndex={1000}>
      <Flex display="flex" justifyContent="space-between" alignItems="center">
         <Box>
              <Stack direction="row" spacing={10}>
               <Heading>Movie App</Heading>
                {
                    links.map((link)=>(
                         <NavLink style={({isActive})=>{
                             return isActive ? {color:'red',borderBottom:"1px solid white"} :{color:"blue"}
                         }}
                         key={link.path} to={link.path}>{link.text}</NavLink>
                    ))
                }
              </Stack>
        </Box>
         <Box>
            <Stack direction="row" spacing={10}>
               <InputGroup>
                     <InputLeftElement
                       pointerEvents='none'
                          children={<SearchIcon  />}
                      />
                  <Input value={input} type='text' placeholder='Search for movies,tv shows etc' onChange={(e)=> setInput(e.target.value)} />
                </InputGroup>
              <ButtonGroup gap='2'>
                   <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                   </Button>
                  <Link to="/register"> <Button colorScheme='black' color="white" border="1px solid white">Sign Up</Button></Link>
                  <Link to="/login"><Button colorScheme='black' color="white" border="1px solid white">Login</Button></Link>
                 </ButtonGroup>
            </Stack>
          
         </Box>
     </Flex>
 </Box>
  
      </>
    );
  }