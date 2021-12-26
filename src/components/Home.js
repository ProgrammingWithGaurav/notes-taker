import { Button, Container, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const ImgStyle = {
        width: '100%',
        height: '400px',
        position: 'absolute',
        top: '60px',
        left: 0,
        zIndex: 1
    }

    const TextStyle = {
        position: 'absolute',
        zIndex: 2,
        top: '100px',
        left: '50px'
    }
    return (
        <div>
            <Image src='https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' style={ImgStyle} />
            <Container style={TextStyle}>
                <Text fontSize='4xl'>Write Your First Note in Notes Taker.</Text>
                <Link to='/new'>
                    <Button colorScheme='blue' marginY={5}>
                        Get Started
                    </Button>
                </Link>
            </Container>
        </div>
    )
}

export default Home
