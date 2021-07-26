import React from 'react';
import Link from 'next/link';
import {
    Box
} from '@chakra-ui/react';

import sidebarStyles from '../../styles/Sidebar.module.css';


// import {Scrollbars} from 'react-custom-scrollbars';

function Tooltip({childItem, menuNumber, hasChild, name}) {

    // console.log(childItem, menuNumber);  

    
    const topValue = (menuNumber - 1 ) * 40;
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
                <Box 
                    className={sidebarStyles.tooltipItems}
                    height={childItem.length > 4 && "250px"}
                >
                    {
                        childItem && childItem.length > 0 && 
                        childItem.map((item,i)=>{
                            return (
                                <Link key={i} href={item.link}> 
                                    <li className={sidebarStyles.tooltipItem}> 
                                            <span>{item.name}</span>
                                    </li>
                                </Link>

                            )
                        })
                    }
                </Box>
            }
                
        </Box>
    )
}

export default Tooltip;