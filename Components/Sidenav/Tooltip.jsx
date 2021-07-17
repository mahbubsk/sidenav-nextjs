import React from 'react';
import Link from 'next/link';
import {
    Box
} from '@chakra-ui/react';

import sidebarStyles from '../../styles/Sidebar.module.css';


// import {Scrollbars} from 'react-custom-scrollbars';

function Tooltip({childItem, menuNumber, hasChild, name}) {

    // console.log(childItem, menuNumber);  

    
    const topValue = (menuNumber)*15;
    return (

        <Box 
            top={`${topValue}px`} 
            // top="50px"
            className={sidebarStyles.tooltipBox}> 
            <Box
                bg="#2d3748"
                fontWeight="600"
                py="2"
                color="white"
                fontSize="18px"
                borderRadius={!hasChild && "10px"}
                borderTopLeftRadius={hasChild && "10px"}
                borderTopRightRadius={hasChild && "10px"}
                textAlign="center"
                ml="10px"
                width="96%"
            >
                {name}
            </Box>
            {
                hasChild && 
                <ul className={sidebarStyles.tooltipItems}>
                    {
                        childItem && childItem.length > 0 && 
                        childItem.map((item,i)=>{
                            return (
                            <li className={sidebarStyles.tooltipItem}> 
                                    <Link href={item.link}> 
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            }
                
        </Box>
    )
}

export default Tooltip;