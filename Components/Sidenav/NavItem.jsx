import Link from 'next/link';
import { useRouter } from 'next/router'

import {
    Flex, Box, Icon, Spacer, chakra
} from '@chakra-ui/react';
import {BiRightArrow} from 'react-icons/bi';

import sidebarStyles from '../../styles/Sidebar.module.css';
import Tooltip from './Tooltip';

const NavItem = (props) => {
    const {
            name, icon, collapse, 
            setCollapse, hasChild, link, 
            menuNumber, isChild, toggleChild, 
            setSidebar, sidebar, childItem, matchPath
        } = props;
    
    const {pathname} = useRouter();
    const bgColor_Hover_Active = "#4a5568";

    const clickHandler = (menuNumber) => {

        if(window.innerWidth > 1024 && sidebar  && hasChild){
            let sidebarClone = [...sidebar];
            sidebarClone[menuNumber-1].toggleChild = !sidebarClone[menuNumber-1].toggleChild;
            setSidebar(sidebarClone);
            setCollapse(true);  


        } else if(window.innerWidth < 1024 && sidebar && hasChild ) {
            let sidebarClone = [...sidebar];
            sidebarClone[menuNumber-1].toggleChild = !sidebarClone[menuNumber-1].toggleChild;
            setSidebar(sidebarClone);
            setCollapse(false);
        }
    }


    return (
        <Link href={link} key={menuNumber}>
            <Box className={sidebarStyles.sidenavItem}>
                <Flex 
                    bg={pathname===matchPath && bgColor_Hover_Active}
                    color={pathname===matchPath ? "teal.200" : 'white'}
                    alignItems="center" 
                    height="40px"
                    _hover={{bg:bgColor_Hover_Active}}
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
                {
                    !collapse && window.innerWidth > 1024 &&
                    <Tooltip 
                        childItem={childItem} 
                        menuNumber={menuNumber} 
                        hasChild={hasChild}
                        name={name}
                    />
                }
            </Box>
            
        </Link>
        
    )
}

export default NavItem
