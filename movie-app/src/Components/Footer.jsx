
import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue,
  } from '@chakra-ui/react';
  import React from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        mt={10}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'100%'} py={10}>
          <SimpleGrid
           columns={5}
            spacing={8}>
            <Stack spacing={6}>
              <Text fontSize={'sm'}>
                 Contact with us
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Popular TV Shows</ListHeader>
              <Link href={'#'}>KumKum Bhagya</Link>
              <Link href={'#'}>Kundali Bhagya</Link>
              <Link href={'#'}>Laxmi Bhagya</Link>
              <Link href={'#'}>Tujhse hai Raabta</Link>
              <Link href={'#'}>Kyun Rishton me Katti Ba</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Premium Movies</ListHeader>
              <Link href={'#'}>Kya Meri Sonam Gupta Bewafa hai</Link>
              <Link href={'#'}>Helmet</Link>
              <Link href={'#'}>Dial 100</Link>
              <Link href={'#'}>200 Halla Ho</Link>
              <Link href={'#'}>14 Phere</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Popular Live TV Channel</ListHeader>
              <Link href={'#'}>Aaj Tak</Link>
              <Link href={'#'}>Zee News</Link>
              <Link href={'#'}>&TV HD</Link>
              <Link href={'#'}>Zee TV HD</Link>
              <Link href={'#'}>Zee Marathi HD</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Popular Web Series</ListHeader>
              <Link href={'#'}>Sunflower</Link>
              <Link href={'#'}>Jeet Ki Zid</Link>
              <Link href={'#'}>Bicchoo Ka Khel</Link>
              <Link href={'#'}>Naxalbari</Link>
              <Link href={'#'}>Tripling</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }