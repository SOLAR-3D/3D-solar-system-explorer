import { Box, Heading, Text, Link, Button } from '@chakra-ui/react';
import NextLink from 'next/link'; // Next.js link component for routing

const About = () => (
  <Box bg='black' w='100%' color='white' padding="6" maxW="3xl" margin="auto">
    <Text fontSize='3xl' marginBottom={4}>Welcome to</Text>
    <Heading as='h1' size='xl' marginBottom={6}>S O L A R</Heading> {/* Title */}
    <Text fontSize='lg' textAlign='left'  marginBottom={6} >
        This project aims to create an immersive, interactive and educational 3D Solar System to 
        engage students and grown ups to learn more about the celestial bodies in our solar system 
        and share their astronomic photography, notes and observations for school projects or hobbies.
    </Text> 
   
    <Box display="flex" justifyContent="flex-end">
        <Link as={NextLink} href='/explore' fontSize='lg'  fontWeight='bold' color='teal'>
            EXPLORE
        </Link>
    </Box>
  </Box>
);
  
  export default About;