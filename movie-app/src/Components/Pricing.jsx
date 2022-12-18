
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,FormControl,Input
  
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';


function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Pricing() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const[text,setText]=useState('')
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Choose Your Premium Plan
        </Heading>
       </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Premium HD
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
              ₹
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                399
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Premium Content
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Ad-Free
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Device
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline" onClick={onOpen}>
                Buy Now
              </Button>
              <Modal
              isOpen={isOpen}
              onClose={onClose}
             >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Continue with Email or Mobile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={10}>
              <FormControl>
                <Input value={text} p={6} placeholder='Email ID or Mobile Number' onChange={(e)=> setText(e.target.value)} />
              </FormControl>
              <Button  w="100%" mt={10}>Continue</Button>
             
            </ModalBody>
       </ModalContent>
        </Modal>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Premium HD
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                ₹
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  699
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Premium Content
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Ad-Free
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Device
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Mobile,TV,Laptop
                </ListItem>
               
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red" onClick={onOpen}>
                  Buy Now
                </Button>
                <Modal
              isOpen={isOpen}
              onClose={onClose}
             >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Continue with Email or Mobile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={10}>
              <FormControl>
                <Input p={6} placeholder='Email ID or Mobile Number' />
              </FormControl>
              <Button w="100%" mt={10}>Continue</Button>
             
            </ModalBody>
       </ModalContent>
        </Modal>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Premium 4K
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
              ₹
              </Text>
              <Text fontSize="5xl" fontWeight="900">
               1499
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
              Premium Content
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Ad-Free
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Device
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline" onClick={onOpen}>
                Buy Now
              </Button>
              <Modal
              isOpen={isOpen}
              onClose={onClose}
             >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Continue with Email or Mobile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={10}>
              <FormControl>
                <Input p={6} placeholder='Email ID or Mobile Number' />
              </FormControl>
              <Button w="100%" mt={10}>Continue</Button>
             
            </ModalBody>
       </ModalContent>
        </Modal>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}