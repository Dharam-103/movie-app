import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Button,
  TriangleLeftIcon,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import {GoTriangleRight} from "react-icons/go";
import {GiQueenCrown} from "react-icons/gi"
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(0);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '0px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'KGF 2',
      image:
        "https://rukminim1.flixcart.com/image/416/416/l3bx5e80/poster/h/y/x/small-kgf-poster-kgf-yash-movie-poster-for-room-kgf-chapter-2-original-imageh8rqar2dzgg.jpeg?q=70"
    },
    {
      title: 'Seven 7',
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/88b34288432989.5dd5e72e4fffa.jpg',
    },
    {
      title: 'Satymev Jayete:2',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-rzrDpTTCdzVtP0RC6U8IptAH1my3X8Cew&usqp=CAU',
    },
    {
        title: 'Tanhaji',
        image:
          'https://boldoutline.in/wp-content/uploads/2019/10/Web-Cover-99.jpg',
      },
      {
        title: 'Rayees',
        image:
          'https://www.whoa.in/download/raees-shah-rukh-khan-bollywood-movies-poster',
      },
      {
        title: 'RRR',
        image:
          'https://media2.bollywoodhungama.in/wp-content/uploads/2021/12/RRR-New-480x270.jpg',
      },
  ];

  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'85%'}
      overflow={'hidden'}
      display={"block"}
      m={'auto'}
      mt={'8%'}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box 
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
           <Container position={'absolute'} top="35%">
           <Heading   color='white'>{card.title}</Heading>
            <Stack direction={"row"} spacing={4}  mt={2}>
               <Button leftIcon={<GoTriangleRight />} bg="yellow.700" border="1px solid white">
                   Watch
               </Button>
               <Button leftIcon={<GiQueenCrown />} bg='Blue' variant='outline'>
                   BUY PLAN
               </Button>
           </Stack>
           </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}



