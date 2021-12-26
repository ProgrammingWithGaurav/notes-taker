import {
    Container,
    IconButton,
    Textarea,
    Tooltip,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useClipboard,
    Flex,
    Input
} from '@chakra-ui/react';
import { IoIosSave as SaveIcon } from 'react-icons/io';
import React, { useEffect, useState } from 'react';
import { IoIosLink as LinkIcon } from "react-icons/io";
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Edit() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { id } = useParams();
    const { hasCopied, onCopy } = useClipboard(`https://notes-taker.web.app/edit/${id}`)
    const [value, setValue] = useState('');

    useEffect(async () => {
        const ref = db.collection('notes_taker_notes').doc(id);
        const doc = await ref.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            setValue(doc.data().content)
        }
    }, [])

    const saveNote = () => {
        db.collection('notes_taker_notes').doc(id).update({
            content: value
        })
    }
    return (
        <Container marginY={5} maxW='container.xl'>
            <Textarea
                value={value}
                onChange={e => setValue(e.target.value)}
                marginY={5}
                rows={10}
                placeholder='Write something...' />
            <Container marginY={5} maxW='container.xl'>
                <Tooltip label="Save" aria-label='A tooltip'>
                    <IconButton
                        onClick={saveNote}
                        colorScheme='teal'
                        aria-label='Call Segun'
                        size='lg'
                        icon={<SaveIcon />}
                        marginRight={3}
                    />
                </Tooltip>
                <Tooltip label="Share Url" aria-label='A tooltip'>
                    <IconButton
                        onClick={onOpen}
                        colorScheme='teal'
                        aria-label='Call Segun'
                        size='lg'
                        icon={<LinkIcon />}
                    />
                </Tooltip>
            </Container>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Share URL</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex mb={2}>
                            <Input value={`https://notes-taker.web.app/edit/${id}`} isReadOnly />
                            <Button onClick={onCopy} ml={2}>
                                {hasCopied ? 'Copied' : 'Copy'}
                            </Button>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    )
}

export default Edit
