import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function AdminLogInModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        alert('Authentication not set up, navigating to dashboard.');
        onClose();
    };

    return (
        <>
            <Button variant="ghost" onClick={onOpen}>
                Admin Log In
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader>Admin Log In</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl id="username" isRequired={true} mb="0.75rem">
                                <FormLabel>Username</FormLabel>
                                <Input name="username" type="text" placeholder="admin" ref={register({ required: true })} />
                            </FormControl>
                            <FormControl id="password" isRequired={true} mb="0.75rem">
                                <FormLabel>Password</FormLabel>
                                <Input name="password" type="password" placeholder="admin" ref={register({ required: true })} />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} type="submit">
                                Sign in
                            </Button>
                            <Button as={RouterLink} to="/admin" variant="ghost">
                                Go to dashboard
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AdminLogInModal;
