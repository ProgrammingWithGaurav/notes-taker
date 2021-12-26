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
import React from 'react';
import { IoIosLink as LinkIcon } from "react-icons/io";

function Edit() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { hasCopied, onCopy } = useClipboard('hello')
    return (
        <Container marginY={5} maxW='container.xl'>
            <Textarea
                marginY={5}
                value={'hello'}
                rows={10}
                placeholder='Write something...' />
            <Container marginY={5} maxW='container.xl'>
                <Tooltip label="Save" aria-label='A tooltip'>
                    <IconButton
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
                            <Input value='hello' isReadOnly />
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
