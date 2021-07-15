import React, {useState} from 'react';
import Sidenav from './Sidenav/Sidenav';
import Header from './Header';
import {Flex, Box} from '@chakra-ui/react';

const Layout = ({ children }) => {

    const [collapse, setCollapse] = useState(true);

    return (
        <Flex>
            <Sidenav collapse={collapse} setCollapse={setCollapse}/>
            <Box >
                <Header collapse={collapse} setCollapse={setCollapse}/>
                <main>
                    {children}
                </main>
            </Box>
        </Flex>
    )
}

export default Layout;