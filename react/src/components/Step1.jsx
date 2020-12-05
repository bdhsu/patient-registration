import React from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { useHistory } from 'react-router-dom';
import { Button, Text, FormControl, FormLabel, Input } from '@chakra-ui/react';
import updateAction from 'utils/updateAction';

// Step 1 - Enter address information
const Step1 = props => {
    const { state, action } = useStateMachine(updateAction);
    const { register, handleSubmit } = useForm({
        defaultValues: state.register,
    });
    const { push } = useHistory();
    const onSubmit = data => {
        action(data);
        push('/register/step2');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <>
                <Text fontSize="2xl" mb="1rem">
                    Where should your medication be shipped?
                </Text>
                <FormControl id="streetAddress" isRequired={true} mb="0.75rem">
                    <FormLabel>Street Address</FormLabel>
                    <Input name="streetAddress" type="text" placeholder="185 Berry Street Suite 550" ref={register({ required: true })} />
                </FormControl>
                <FormControl id="city" isRequired={true} mb="0.75rem">
                    <FormLabel>City</FormLabel>
                    <Input name="city" type="text" placeholder="San Francisco" ref={register({ required: true })} />
                </FormControl>
                <FormControl id="state" isRequired={true} mb="0.75rem">
                    <FormLabel>State</FormLabel>
                    <Input name="state" type="text" placeholder="CA" ref={register({ required: true })} />
                </FormControl>
                <FormControl id="zipCode" isRequired={true} mb="0.75rem">
                    <FormLabel>Zipcode</FormLabel>
                    <Input name="zipcode" type="text" placeholder="94107" ref={register({ required: true })} />
                </FormControl>
                <Button type="Submit">Continue</Button>
            </>{' '}
        </form>
    );
};

export default Step1;
