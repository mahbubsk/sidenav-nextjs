import Link from 'next/link';

import {
    Flex, Box, Icon, Spacer, chakra
} from '@chakra-ui/react';
import {BiRightArrow} from 'react-icons/bi';

const NavItem = ({name, icon, collapse, setCollapse, hasChild, link}) => {
    return (
        <Link href={link}>
            <Flex 
                alignItems="center" 
                height="40px" _hover={{bg:'gray'}} 
                cursor="pointer" 
                transition="all 0.3s"
                overflow="hidden"
            >
                <Box mx="5">

                    <Icon fontSize="20px" as={icon}/>
                </Box>
                <Box transition="all 0.3s" 
                    visibility={{md:!collapse ? "visible" : "hidden", lg: collapse ? "visible" : "hidden"}}
                >
                    <chakra.span fontSize="18px">{name}</chakra.span>
                </Box>

                {
                    hasChild && 
                    <>
                        <Spacer/>
                        <Box padding="4">
                            <BiRightArrow/>
                        </Box>
                    </>
                }
            </Flex>
        </Link>
        
    )
}

export default NavItem
