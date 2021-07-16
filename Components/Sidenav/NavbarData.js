import {BiRightArrow} from 'react-icons/bi';
import {
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
        icon: MdDashboard,
        toggleChild: false,
        menuNumber: 1
    },
    {
        name: "Products",
        matchPath: "/products",
        link:"/products",
        hasChild: false,
        icon: GrProductHunt,
        toggleChild: false,
        menuNumber: 2
    },
    {
        name: "Business",
        matchPath: "/business",
        link:"/business",
        hasChild: false,
        icon: GrProductHunt,
        toggleChild: false,
        menuNumber: 3
    },
    {
        name: "About",
        matchPath: "",
        link:"",
        hasChild: true,
        icon: GrProductHunt,
        toggleChild: false,
        menuNumber: 4,
        child:[
            {
                name: "About Us",
                matchPath: "/about-us",
                link:"/about-us",
                hasChild: false,
                isChild:true,
                icon: SiGoogleanalytics
            },
            {
                name: "About Company",
                matchPath: "/about-company",
                link:"/about-company",
                hasChild: false,
                isChild: true,
                icon: SiGoogleanalytics
            }
        ]
    },
    {
        name: "Settings",
        matchPath: "",
        link:"",
        hasChild: true,
        icon: AiTwotoneSetting,
        toggleChild: false,
        menuNumber: 5,
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