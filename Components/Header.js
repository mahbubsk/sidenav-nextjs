import React, {useState} from 'react';
import {
    useDisclosure, Flex, Icon, Spacer, chakra
} from '@chakra-ui/react'
import {AiOutlineMenu} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import SignIn from './SignIn';

function Header({collapse, setCollapse}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState("right");
    return (
        <Flex
            alignItems="center"
            boxShadow="md" 
            h="64px"  
            bg="#F7FAFC"
            borderBottom="1px solid #b1b0b0"
            position="fixed"
            top="0"
            left="0"
            transition="all 0.5s"
            w="100%"
            paddingLeft={{md: collapse ? "70px" : " 270px", lg: collapse ? "280px" : "70px"}}
        >
            <Icon as={FaUserCircle} />
            <chakra.span 
                cursor="pointer"
                onClick={()=>{
                    setCollapse(!collapse);
                }} 
                >
                <Icon 
                    as={AiOutlineMenu} 
                    w={{base:'60px', sm:'60px', md:'0px', lg:'0px'}}
                       
                />
            </chakra.span>


            
            <Spacer />
            <chakra.span cursor="pointer" onClick={onOpen}>
                <Icon as={FaUserCircle} h="30px" w="60px"/> 
            </chakra.span> 
            <SignIn 
                isOpen={isOpen} 
                onOpen={onOpen} 
                onClose={onClose} 
                placement={placement} 
                setPlacement={setPlacement}
            />

        </Flex>
    )
}

export default Header