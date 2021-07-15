import {BiRightArrow} from 'react-icons/bi';
import {
    AiOutlineMenuFold, 
    AiOutlineMenuUnfold, 
    AiTwotoneSetting
} from 'react-icons/ai';
import {MdDashboard} from 'react-icons/md';
import {GrProductHunt} from 'react-icons/gr';
import {SiGoogleanalytics} from 'react-icons/si';

const sidenavData = [
    {
        name: "Dashboard",
        matchPath: "/dashboard",
        link:"/dashboard",
        hasChild: false,
        icon: MdDashboard
    },
    {
        name: "Products",
        matchPath: "/products",
        link:"/products",
        hasChild: false,
        icon: GrProductHunt
    },
    {
        name: "Business",
        matchPath: "/business",
        link:"/business",
        hasChild: false,
        icon: GrProductHunt
    },
    {
        name: "About",
        matchPath: "/about",
        link:"/about",
        hasChild: false,
        icon: GrProductHunt
    },
    {
        name: "Settings",
        matchPath: "",
        link:"",
        hasChild: true,
        icon: AiTwotoneSetting,
        child:[
            {
                name: "Google Analytics",
                matchPath: "/google-analytics",
                link:"/google-analytics",
                hasChild: false,
                isChild:true,
                icon: SiGoogleanalytics
            },
            {
                name: "Google Analytics",
                matchPath: "/google-analytics",
                link:"/google-analytics",
                hasChild: false,
                isChild: true,
                icon: SiGoogleanalytics
            }
        ]
    }
]


export default sidenavData;