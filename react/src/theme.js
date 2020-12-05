import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                fontFamily: 'Futura, Helvetica, Arial, sans-serif',
            },
        },
    },
});

export default theme;
