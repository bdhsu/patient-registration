import React from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { useHistory } from 'react-router-dom';
import {
    Button,
    Text,
    // FormControl, FormLabel, Input
} from '@chakra-ui/react';
import updateAction from 'updateAction';

const Step2 = props => {
    const { state, action } = useStateMachine(updateAction);
    const {
        // register,
        handleSubmit,
    } = useForm({
        defaultValues: state.register,
    });
    const { push } = useHistory();
    const onSubmit = data => {
        action(data);
        push('/register/step3');
        console.log(JSON.stringify(state, null, 2));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <>
                <Text fontSize="2xl" mb="1rem">
                    Upload Drivers License
                </Text>
                {/* <FormControl id="frontDriversLicense" isRequired={true} mb="0.75rem">
                    <FormLabel>Front of Drivers License</FormLabel>
                    <Input name="frontDriversLicense" type="file" ref={register({ required: true })} />
                </FormControl>
                <FormControl id="backDriversLicense" isRequired={true} mb="0.75rem">
                    <FormLabel>Back of Drivers License</FormLabel>
                    <Input name="backDriversLicense" type="file" ref={register({ required: true })} />
                </FormControl> */}
                <Button type="submit">Continue</Button>
            </>
        </form>
    );
};

export default Step2;
