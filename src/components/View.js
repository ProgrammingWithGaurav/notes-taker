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
import React from 'react';
import { FaEdit as EditIcon } from "react-icons/fa";
import { IoIosLink as LinkIcon } from "react-icons/io";

function View() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { hasCopied, onCopy } = useClipboard('hello')
    return (
        <Container marginY={5} maxW='container.xl'>
            <Stack direction='row' h='100px' p={4} bg='gray.100' borderRadius={5}>
                <Divider orientation='vertical' />
                <Text>Hello, This is the best note in the world.</Text>
            </Stack>

            <Container marginY={5} maxW='container.xl'>
                <Tooltip label="Edit" aria-label='A tooltip'>
                    <IconButton
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
                            <Input value='hello' isReadOnly/>
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