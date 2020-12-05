import React from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { useHistory } from 'react-router-dom';
import { Button, Text, Select, FormControl } from '@chakra-ui/react';
import updateAction from 'updateAction';
import * as dayjs from 'dayjs';

const appointmentFormat = 'MM-DD-YYYY h:mm a';
const appointmentTimes = [
    '12-8-2020 9:00 am',
    '12-8-2020 11:00 am',
    '12-8-2020 1:00 pm',
    '12-9-2020 9:00 am',
    '12-9-2020 11:00 am',
    '12-9-2020 1:00 pm',
    '12-10-2020 9:00 am',
    '12-10-2020 11:00 am',
    '12-10-2020 1:00 pm',
];

const Step3 = props => {
    const { state, action } = useStateMachine(updateAction);
    const { register, handleSubmit } = useForm({
        defaultValues: state.register,
    });
    const { push } = useHistory();
    const onSubmit = data => {
        action(data);
        push('/register/complete');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <>
                <Text fontSize="2xl" mb="1rem">
                    Select appointment time
                </Text>
                <FormControl id="appointmentTime" isRequired={true} mb="0.75rem">
                    <Select name="appointmentTime" placeholder="Select time" ref={register({ required: true })}>
                        {appointmentTimes.map((time, i) => (
                            <option key={i} value={time}>
                                {dayjs(time, appointmentFormat).format('dddd, MMMM D, YYYY h:mm A')}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                <Button type="submit">Submit</Button>
            </>
        </form>
    );
};

export default Step3;
