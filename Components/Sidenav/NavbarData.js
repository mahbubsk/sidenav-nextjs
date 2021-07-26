import {BiRightArrow} from 'react-icons/bi';
import {
    AiTwotoneSetting
} from 'react-icons/ai';
import {MdDashboard, MdBusinessCenter} from 'react-icons/md';
import {GrProductHunt} from 'react-icons/gr';
import {SiGoogleanalytics} from 'react-icons/si';
import {FcAbout} from 'react-icons/fc';

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
        matchPath: "",
        link:"",
        hasChild: true,
        icon: MdBusinessCenter,
        toggleChild: false,
        menuNumber: 3,
        child:[
            {
                name: "Business Config",
                matchPath: "/business-config",
                link:"/business-config",
                hasChild: false,
                isChild:true,
                icon: MdBusinessCenter
            },
            {
                name: "About business",
                matchPath: "/about-business",
                link:"/about-business",
                hasChild: false,
                isChild: true,
                icon: MdBusinessCenter
            }
        ]
    },
    {
        name: "About",
        matchPath: "",
        link:"",
        hasChild: true,
        icon: FcAbout,
        toggleChild: false,
        menuNumber: 4,
        child:[
            {
                name: "About Us",
                matchPath: "/about-us",
                link:"/about-us",
                hasChild: false,
                isChild:true,
                icon: FcAbout
            },
            {
                name: "About Company",
                matchPath: "/about-company",
                link:"/about-company",
                hasChild: false,
                isChild: true,
                icon: FcAbout
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
    },
    {
        name: "Settings",
        matchPath: "",
        link:"",
        hasChild: true,
        icon: AiTwotoneSetting,
        toggleChild: false,
        menuNumber: 6,
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
            },
            {
                name: "Google Analytics",
                matchPath: "/google-analytics",
                link:"/google-analytics",
                hasChild: false,
                isChild: true,
                icon: SiGoogleanalytics
            },
            {
                name: "Google Analytics",
                matchPath: "/google-analytics",
                link:"/google-analytics",
                hasChild: false,
                isChild: true,
                icon: SiGoogleanalytics
            },
            {
                name: "Google Analytics",
                matchPath: "/google-analytics",
                link:"/google-analytics",
                hasChild: false,
                isChild: true,
                icon: SiGoogleanalytics
            },
            {
                name: "Google Analytics",
                matchPath: "/google-analytics",
                link:"/google-analytics",
                hasChild: false,
                isChild: true,
                icon: SiGoogleanalytics
            },
            {
                name: "Google Analytics",
                matchPath: "/google-analytics",
                link:"/google-analytics",
                hasChild: false,
                isChild: true,
                icon: SiGoogleanalytics
            },
            {
                name: "Google Analytics",
                matchPath: "/google-analytics",
                link:"/google-analytics",
                hasChild: false,
                isChild: true,
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
    },
    {
        name: "Dashboard",
        matchPath: "/dashboard",
        link:"/dashboard",
        hasChild: false,
        icon: MdDashboard,
        toggleChild: false,
        menuNumber: 7
    },
    {
        name: "Dashboard",
        matchPath: "/dashboard",
        link:"/dashboard",
        hasChild: false,
        icon: MdDashboard,
        toggleChild: false,
        menuNumber: 8
    },
    {
        name: "Dashboard",
        matchPath: "/dashboard",
        link:"/dashboard",
        hasChild: false,
        icon: MdDashboard,
        toggleChild: false,
        menuNumber: 9
    },
    {
        name: "Dashboard",
        matchPath: "/dashboard",
        link:"/dashboard",
        hasChild: false,
        icon: MdDashboard,
        toggleChild: false,
        menuNumber: 10
    },
    {
        name: "Dashboard",
        matchPath: "/dashboard",
        link:"/dashboard",
        hasChild: false,
        icon: MdDashboard,
        toggleChild: false,
        menuNumber: 11
    },
    {
        name: "Dashboard",
        matchPath: "/dashboard",
        link:"/dashboard",
        hasChild: false,
        icon: MdDashboard,
        toggleChild: false,
        menuNumber: 12
    },
    {
        name: "Dashboard",
        matchPath: "/dashboard",
        link:"/dashboard",
        hasChild: false,
        icon: MdDashboard,
        toggleChild: false,
        menuNumber: 13
    },
    {
        name: "Dashboard",
        matchPath: "/dashboard",
        link:"/dashboard",
        hasChild: false,
        icon: MdDashboard,
        toggleChild: false,
        menuNumber: 14
    },
    {
        name: "Dashboard",
        matchPath: "/dashboard",
        link:"/dashboard",
        hasChild: false,
        icon: MdDashboard,
        toggleChild: false,
        menuNumber: 15
    }
]


export default sidenavData;