import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Table from 'rc-table';

import 'utils/API';
import 'components/Admin.css';
import API from 'utils/API';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 100,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 150,
    },
    {
        title: 'Phone Number',
        dataIndex: 'phone',
        key: 'phone',
        width: 125,
    },
    {
        title: 'Date of Birth',
        dataIndex: 'dateOfBirth',
        key: 'dateOfBirth',
        width: 125,
    },
    {
        title: 'Street Address',
        dataIndex: 'streetAddress',
        key: 'streetAddress',
        width: 150,
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
        width: 100,
    },
    {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
        width: 100,
    },
    {
        title: 'Zipcode',
        dataIndex: 'zipcode',
        key: 'zipcode',
        width: 100,
    },
    {
        title: 'Appointment Time',
        dataIndex: 'appointmentTime',
        key: 'appointmentTime',
        width: 100,
    },
];

// Harcoded table data
// const data = [
//     {
//         name: 'Jack Harlow',
//         email: 'jack@gmail.com',
//         phone: '1234567890',
//         dateOfBirth: '00/00/0000',
//         streetAddress: '1 Infinite Loop',
//         city: 'Cupertino',
//         state: 'CA',
//         zipcode: '95014',
//     },
//     {
//         name: 'Jack Harlow',
//         email: 'jack@gmail.com',
//         phone: '1234567890',
//         dateOfBirth: '00/00/0000',
//         streetAddress: '1 Infinite Loop',
//         city: 'Cupertino',
//         state: 'CA',
//         zipcode: '95014',
//     },
//     {
//         name: 'Jack Harlow',
//         email: 'jack@gmail.com',
//         phone: '1234567890',
//         dateOfBirth: '00/00/0000',
//         streetAddress: '1 Infinite Loop',
//         city: 'Cupertino',
//         state: 'CA',
//         zipcode: '95014',
//     },
//     {
//         name: 'Jack Harlow',
//         email: 'jack@gmail.com',
//         phone: '1234567890',
//         dateOfBirth: '00/00/0000',
//         streetAddress: '1 Infinite Loop',
//         city: 'Cupertino',
//         state: 'CA',
//         zipcode: '95014',
//     },
//     {
//         name: 'Jack Harlow',
//         email: 'jack@gmail.com',
//         phone: '1234567890',
//         dateOfBirth: '00/00/0000',
//         streetAddress: '1 Infinite Loop',
//         city: 'Cupertino',
//         state: 'CA',
//         zipcode: '95014',
//     },
//     {
//         name: 'Jack Harlow',
//         email: 'jack@gmail.com',
//         phone: '1234567890',
//         dateOfBirth: '00/00/0000',
//         streetAddress: '1 Infinite Loop',
//         city: 'Cupertino',
//         state: 'CA',
//         zipcode: '95014',
//     },
//     {
//         name: 'Jack Harlow',
//         email: 'jack@gmail.com',
//         phone: '1234567890',
//         dateOfBirth: '00/00/0000',
//         streetAddress: '1 Infinite Loop',
//         city: 'Cupertino',
//         state: 'CA',
//         zipcode: '95014',
//     },
//     {
//         name: 'Jack Harlow',
//         email: 'jack@gmail.com',
//         phone: '1234567890',
//         dateOfBirth: '00/00/0000',
//         streetAddress: '1 Infinite Loop',
//         city: 'Cupertino',
//         state: 'CA',
//         zipcode: '95014',
//     },
//     {
//         name: 'Jack Harlow',
//         email: 'jack@gmail.com',
//         phone: '1234567890',
//         dateOfBirth: '00/00/0000',
//         streetAddress: '1 Infinite Loop',
//         city: 'Cupertino',
//         state: 'CA',
//         zipcode: '95014',
//     },
//     {
//         name: 'Jack Harlow',
//         email: 'jack@gmail.com',
//         phone: '1234567890',
//         dateOfBirth: '00/00/0000',
//         streetAddress: '1 Infinite Loop',
//         city: 'Cupertino',
//         state: 'CA',
//         zipcode: '95014',
//     },
// ];

function Admin() {
    const [data, setData] = useState(null);

    useEffect(() => {
        API.get('users').then(res => {
            console.log(res.data);
            setData(res.data);
        });
    });

    return (
        <Flex>
            <Flex bg="#1D1B26" w="250px" h="100vh" direction="column" align="center">
                <Flex w="100%" direction="row" justify="center" py="1rem">
                    <RouterLink to="/">
                        <Image src="https://donefirst.com/assets/img/logo-white.svg" alt="Logo" h="3rem" px="auto" />
                    </RouterLink>
                </Flex>
                <Flex>
                    <Link as={RouterLink} to="/admin" color="white">
                        Manage Users
                    </Link>
                </Flex>
            </Flex>
            <Box pl={10} pt={5}>
                <Text fontSize="3xl">Manage Users</Text>
                {data && <Box as={Table} columns={columns} data={data} mt={5} />}
            </Box>
        </Flex>
    );
}

export default Admin;
