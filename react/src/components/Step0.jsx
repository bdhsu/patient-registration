import React from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { useHistory } from 'react-router-dom';
import { Button, Text, FormControl, FormLabel, Input } from '@chakra-ui/react';
import updateAction from 'updateAction';

const Step0 = props => {
    const { state, action } = useStateMachine(updateAction);
    const { register, handleSubmit } = useForm({
        defaultValues: state.register,
    });
    const { push } = useHistory();
    const onSubmit = data => {
        action(data);
        push('/register/step1');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <>
                <Text fontSize="2xl" mb="1rem">
                    Create Account
                </Text>
                <FormControl id="name" isRequired={true} mb="0.75rem">
                    <FormLabel>Full Name</FormLabel>
                    <Input name="name" type="text" placeholder="John Smith" ref={register({ required: true })} />
                </FormControl>
                <FormControl id="email" isRequired={true} mb="0.75rem">
                    <FormLabel>Email</FormLabel>
                    <Input name="email" type="email" placeholder="john@example.com" ref={register({ required: true })} />
                </FormControl>
                <FormControl id="phone" isRequired={true} mb="0.75rem">
                    <FormLabel>Phone Number</FormLabel>
                    <Input name="phone" type="tel" placeholder="1234567890" ref={register({ required: true })} />
                </FormControl>
                <FormControl id="dateOfBirth" isRequired={true} mb="0.75rem">
                    <FormLabel>Date of Birth</FormLabel>
                    <Input name="dateOfBirth" type="date" ref={register({ required: true })} />
                </FormControl>
                <Button type="submit">Continue</Button>
            </>
        </form>
    );
};

export default Step0;
