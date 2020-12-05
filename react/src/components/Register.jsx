import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, Button, Container, Progress, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

import Step0 from 'components/Step0';
import Step1 from 'components/Step1';
import Step2 from 'components/Step2';
import Step3 from 'components/Step3';
import Complete from 'components/Complete';

function Register(props) {
    const [progress, setProgress] = useState(26);
    const [breadcrumb, setBreadcrumb] = useState('Account');

    useEffect(() => {
        switch (props.match.params.step) {
            case 'step0':
                setProgress(26);
                setBreadcrumb('Account');
                break;
            case 'step1':
                setProgress(44.5);
                setBreadcrumb('Address');
                break;
            case 'step2':
                setProgress(63);
                setBreadcrumb('Drivers License');
                break;
            case 'step3':
                setProgress(81.5);
                setBreadcrumb('Appointment Time');
                break;
            case 'complete':
                setProgress(100);
                setBreadcrumb('Complete');
                break;
            default:
                console.log('Step not recognized');
        }
    }, [props.match.params.step]);

    return (
        <Box>
            <Flex as="header" direction="row" justify="space-between" align="center" p="1rem 1.5rem" borderBottom="1px solid #C4C4C4" bg="#1D1B26">
                <RouterLink to="/">
                    <Image src="https://donefirst.com/assets/img/logo-white.svg" alt="Logo" h="3rem" />
                </RouterLink>
                <Flex direction="row">
                    <Button variant="ghost">Admin Log In</Button>
                    <Button as={RouterLink} to="/register" colorScheme="white" variant="outline">
                        Get Started
                    </Button>
                </Flex>
            </Flex>
            <Progress value={progress} colorScheme="orange" mb="1rem" />
            <Container maxW="4xl">
                <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mb="1rem">
                    <BreadcrumbItem>
                        <BreadcrumbLink as={RouterLink} to="/">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={RouterLink} to="/register">
                            Get Started
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink>{breadcrumb}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Flex direction="column" p="2rem" borderRadius="lg" boxShadow="dark-lg">
                    {props.match.params.step === 'step0' && <Step0 />}
                    {props.match.params.step === 'step1' && <Step1 />}
                    {props.match.params.step === 'step2' && <Step2 />}
                    {props.match.params.step === 'step3' && <Step3 />}
                    {props.match.params.step === 'complete' && <Complete />}
                </Flex>
            </Container>
        </Box>
    );
}

export default Register;
