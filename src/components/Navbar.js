import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Box bg='blue.500' w='100%' p={4} color='white'>
            <Link to='/'>
                <Text fontSize='xl'>Notes Taker</Text>
            </Link>
        </Box>
    )
}

export default Navbar
