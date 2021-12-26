import {
    Container,
    Divider,
    IconButton,
    Stack,
    Text,
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
import React, { useEffect, useState } from 'react';
import { FaEdit as EditIcon } from "react-icons/fa";
import { IoIosLink as LinkIcon } from "react-icons/io";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import db from '../firebase';

function View() {
    const { id } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { hasCopied, onCopy } = useClipboard(`https://notes-taker.web.app/view/${id}`)
    const [note, setNote] = useState(null);
    const navigate = useNavigate();

    useEffect(async () => {
        const ref = db.collection('notes_taker_notes').doc(id);
        const doc = await ref.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            setNote(doc.data())
        }
    }, [])

    return (
        <Container marginY={5} maxW='container.xl'>
            <Stack direction='row' h='100px' p={4} bg='gray.100' borderRadius={5}>
                <Divider orientation='vertical' />
                <Text>{note?.content}</Text>
            </Stack>

            <Container marginY={5} maxW='container.xl'>
                <Tooltip label="Edit" aria-label='A tooltip'>
                    <IconButton
                        onClick={() => navigate(`/edit/${id}`)}
                        colorScheme='teal'
                        aria-label='Call Segun'
                        size='lg'
                        icon={<EditIcon />}
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
                            <Input value={`https://notes-taker.web.app/view/${id}`} isReadOnly />
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

export default View