import {useState} from 'react';
import { 
    Box, Flex, Icon, Spacer 
} from '@chakra-ui/layout';
import {
    AiOutlineMenuFold, 
    AiOutlineMenuUnfold, 
} from 'react-icons/ai';
import NavItem from './NavItem';
import NavbarData from './NavbarData';
import sidebarStyles from '../../styles/Sidebar.module.css';
import Tooltip from './Tooltip';



const Sidenav = ({collapse, setCollapse}) => {

    // useEffect(()=>{
    //     axios("./NavbarData.json")
    //     .then(res => {
    //         let data = res.data;
    //         console.log({data});
    //     })
    // },[])

    const [sidebar, setSidebar] = useState(NavbarData)


    const collapseHandler = () => {            
        setCollapse(!collapse);
        for (let i = 0; i < sidebar.length; i++) {
            const menuNumber = sidebar[i].menuNumber;
            sidebar[menuNumber-1].toggleChild = false;
            setSidebar(sidebar);
        }
    }


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
            <ul className={sidebarStyles.sidenavWrapper}>
                {
                   sidebar && sidebar.map((item,index)=>{
                        return (
                            <>
                                <NavItem 
                                    link={item.link}
                                    hasChild={item.hasChild}
                                    name={item.name} 
                                    icon={item.icon} 
                                    collapse={collapse} 
                                    setCollapse={setCollapse}
                                    sidebar={sidebar}
                                    setSidebar={setSidebar}
                                    menuNumber={item.menuNumber}
                                    toggleChild={item.toggleChild}
                                    childItem={item.child}
                                    matchPath={item.matchPath}
                                />
                                {
                                    item.toggleChild && item.child && item.child.length > 0 && item.child.map((childItem,j)=>{
                                        return (
                                            <>
                                               <Box>
                                                    <NavItem 
                                                        key={j}
                                                        link={childItem.link}
                                                        isChild={childItem.isChild}
                                                        hasChild={childItem.hasChild}
                                                        name={childItem.name} 
                                                        icon={childItem.icon} 
                                                        collapse={collapse} 
                                                        setCollapse={setCollapse}
                                                        matchPath={childItem.matchPath}
                                                    />
                                               </Box>
                                            </>
                                        )
                                    }) 
                                }
                            </>
                        )
                    })
                }


                
            </ul>

            <Spacer/>
            <Flex 
                bg="#4a5568" cursor="pointer" 
                height="50px"
                justifyContent="center"
                alignItems="center"
                onClick={collapseHandler}>
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
