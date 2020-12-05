import React from 'react';
import { Box, Flex, Image, Button, SimpleGrid, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import AdminLoginModal from 'components/AdminLogInModal';

function Landing() {
    return (
        <Box>
            <Flex as="header" direction="row" justify="space-between" align="center" p="1rem 1.5rem" borderBottom="1px solid #C4C4C4">
                <Image src="https://donefirst.com/assets/img/logo.svg" alt="Logo" h="3rem" />
                <Flex direction="row">
                    <AdminLoginModal />
                    <Button as={RouterLink} to="/register" colorScheme="orange" variant="outline" ml="0.5rem">
                        Get Started
                    </Button>
                </Flex>
            </Flex>
            <SimpleGrid columns={[1, null, 2]} spacing={10} pt={5} borderBottom="1px solid #C4C4C4" backgroundColor="rgb(203, 185, 181)">
                <Box h="100%" padding={['7.5rem 0 3.75rem', null, '15rem 0 7.5rem']} ml={[0, null, '5rem']} textAlign={['center', null, 'left']}>
                    <Text fontSize="6xl" fontWeight="bold" mb="1rem">
                        Kickstart your ADHD treatment.
                    </Text>
                    <Text fontSize="xl" mb="1.5rem">
                        Personalized online treatment for ADHD
                    </Text>
                    <Button as={RouterLink} to="/register" colorScheme="orange">
                        Am I a fit?
                    </Button>
                </Box>
                <Box display="flex" flexDirection="column-reverse" ml={[0, null, '5rem']}>
                    <Image
                        src="https://res.cloudinary.com/forhims/image/upload/q_auto,f_auto,fl_lossy/01_Hims_Skin_PLP_Hero_Updated"
                        alt="Man smiling"
                    />
                </Box>
            </SimpleGrid>
        </Box>
    );
}

export default Landing;
