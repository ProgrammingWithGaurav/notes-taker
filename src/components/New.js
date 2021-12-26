import { Container, Heading, IconButton, Textarea, Tooltip } from '@chakra-ui/react';
import { IoIosSave as SaveIcon } from 'react-icons/io';
import React, { useState, useContext } from 'react';
import context from '../context/Context';
import db from '../firebase';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function New() {
    const { noteId, setNoteId } = useContext(context);
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const toast = useToast()

    const createNote = async () => {
        if (value !== '') {
            let result = await db.collection('notes_taker_notes').add({
                content: value
            });
            await setNoteId(result.id);
            if (noteId !== null) {
                await navigate(`/view/${noteId}`);
                setValue('');
                toast({
                    title: 'Notes Created',
                    description: "We've created a note for you.",
                    status: 'info',
                    duration: 2000,
                    isClosable: true,
                })
            }
        } else {
            toast({
                title: 'Notes cannot be blank.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        }
    }

    return (
        <Container marginY={5} maxW='container.xl'>
            <Heading>Write a note</Heading>
            <Textarea
                value={value}
                onChange={e => setValue(e.target.value)}
                marginY={5}
                rows={10}
                placeholder='Write something...' />
            <Tooltip label="Save" aria-label='A tooltip'>
                <IconButton
                    onClick={createNote}
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
