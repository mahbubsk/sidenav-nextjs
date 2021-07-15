import Link from 'next/link';
import { 
    Box, Flex, Icon, Spacer 
} from '@chakra-ui/layout';
import {
    AiOutlineMenuFold, 
    AiOutlineMenuUnfold, 
    AiTwotoneSetting
} from 'react-icons/ai';
import {MdDashboard} from 'react-icons/md';
import {GrProductHunt} from 'react-icons/gr';

import NavItem from './NavItem';
const Sidenav = ({collapse, setCollapse}) => {



    return (
        <Flex 
            bg="#2d3748" 
            w={{
                base: collapse ? "0" : "70%", 
                sm: collapse ? "0" : "70%", 
                md: collapse ? "60px" : "250px", 
                lg: collapse ? "250px" : "60px"
            }}
            transition="all 0.5s" h="100vh"
            flexDirection="column"
            justifyContent="space-between"
            position={{base: "fixed", sm: "fixed", md: "relative", lg: "relative"}}
            color="white" zIndex="99" top="0" left="0"

        >
            <ul>
                <NavItem
                    link="/dashboard" 
                    name="Dashboard" 
                    icon={MdDashboard} 
                    collapse={collapse} 
                    setCollapse={setCollapse}
                />
               
                <NavItem 
                    link="/products"
                    hasChild
                    name="Products" 
                    icon={GrProductHunt} 
                    collapse={collapse} 
                    setCollapse={setCollapse}
                />

                <NavItem 
                    link="/settings"
                    name="settings" 
                    icon={AiTwotoneSetting} 
                    collapse={collapse} 
                    setCollapse={setCollapse}
                />
                
            </ul>

            <Spacer/>
            <Flex 
                bg="#4a5568" cursor="pointer" 
                height="50px"
                justifyContent="center"
                alignItems="center"
                onClick={()=>{
                    // setUsers(false);
                    // setTeachers(false);
                    setCollapse(!collapse);
                }}>
                {
                    collapse ? 
                        <AiOutlineMenuFold style={{fontSize:'30px'}}/> 
                        : <AiOutlineMenuUnfold style={{fontSize:'30px'}}/>
                }
            </Flex>

        </Flex>
    )
}

export default Sidenav
