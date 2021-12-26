import { Container, Heading, IconButton, Textarea, Tooltip } from '@chakra-ui/react';
import { IoIosSave as SaveIcon } from 'react-icons/io';
import React from 'react';

function New() {
    return (
        <Container marginY={5} maxW='container.xl'>
            <Heading>Write a note</Heading>
            <Textarea marginY={5} rows={10} placeholder='Write something...' />
            <Tooltip label="Save" aria-label='A tooltip'>
                <IconButton
                    colorScheme='teal'
                    aria-label='Call Segun'
                    size='lg'
                    icon={<SaveIcon />}
                />
            </Tooltip>
        </Container>
    )
}

export default New
