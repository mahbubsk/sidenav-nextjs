import Link from 'next/link';
import { useRouter } from 'next/router'

import {
    Flex, Box, Icon, Spacer, chakra
} from '@chakra-ui/react';
import {IoIosArrowDown, IoIosArrowForward} from 'react-icons/io';

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

        if(window.innerWidth >= 1024 && sidebar){
            let sidebarClone = [...sidebar];
            sidebarClone[menuNumber-1].toggleChild = !sidebarClone[menuNumber-1].toggleChild;
            setSidebar(sidebarClone);
            
            if(hasChild){
                setCollapse(true);  
            }


        } else if(sidebar){
            let sidebarClone = [...sidebar];
            sidebarClone[menuNumber-1].toggleChild = !sidebarClone[menuNumber-1].toggleChild;
            setSidebar(sidebarClone);
            if(hasChild) {
                setCollapse(false);
            }
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
                    transition="all 0.4s"
                    overflow="hidden"
                    pl={isChild && "12px"}
                    onClick={() => clickHandler(menuNumber)} 
                >
                    <Box mx="18px">
                        <Icon fontSize="19px" as={icon}/>
                    </Box>
                    <Box transition="all 0.3s" 
                        visibility={{md: !collapse ? "visible" : "hidden", lg: collapse ? "visible" : "hidden"}}
                    >
                        <chakra.span>{name}</chakra.span>
                    </Box>

                    {
                        hasChild && 
                        <>
                            <Spacer/>
                            <Box fontSize="16px" padding="4" transition="all 0.4s" className={toggleChild && sidebarStyles.iconRotate}>
                                <IoIosArrowForward/>
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
