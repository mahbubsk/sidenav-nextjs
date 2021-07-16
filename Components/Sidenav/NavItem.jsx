import Link from 'next/link';

import {
    Flex, Box, Icon, Spacer, chakra
} from '@chakra-ui/react';
import {BiRightArrow} from 'react-icons/bi';

const NavItem = (props) => {
    const {
            name, icon, collapse, 
            setCollapse, hasChild, link, 
            menuNumber, isChild, toggleChild, 
            setSidebar, sidebar
        } = props;

    const clickHandler = (menuNumber) => {
        

        if(window.innerWidth > 1363){
            let sidebarClone = [...sidebar];
            sidebarClone[menuNumber-1].toggleChild = !sidebarClone[menuNumber-1].toggleChild;
            setSidebar(sidebarClone);
            hasChild && setCollapse(true);
        } else if(window.innerWidth < 1363) {
            let sidebarClone = [...sidebar];
            sidebarClone[menuNumber-1].toggleChild = !sidebarClone[menuNumber-1].toggleChild;
            setSidebar(sidebarClone);
            hasChild && setCollapse(false);
        }
    }

    return (
        <Link href={link} key={menuNumber}>
            <Flex 
                alignItems="center" 
                height="40px" _hover={{bg:'gray'}} 
                cursor="pointer" 
                transition="all 0.3s"
                overflow="hidden"
                pl={isChild && "12px"}
                onClick={() => clickHandler(menuNumber)}
            >
                <Box mx="3.5">
                    <Icon fontSize="20px" as={icon}/>
                </Box>
                <Box transition="all 0.3s" 
                    visibility={{md: !collapse ? "visible" : "hidden", lg: collapse ? "visible" : "hidden"}}
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
