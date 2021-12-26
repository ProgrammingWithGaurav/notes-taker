import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Navbar() {
    return (
        <Box bg='blue.500' w='100%' p={4} color='white'>
            <Text fontSize='xl'>Notes Taker</Text>
        </Box>
    )
}

export default Navbar
