import React from 'react';
import { useStateMachine } from 'little-state-machine';
import { Text } from '@chakra-ui/react';
import updateAction from 'updateAction';

const Complete = props => {
    const { state } = useStateMachine(updateAction);

    return (
        <>
            <Text>Registration success</Text>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </>
    );
};

export default Complete;
