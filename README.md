# Sidebar (for Backend application)
This is a component of any kind backend application called sidebar.

1. fork or clone this repository. 
then run this command.
2.
```javascript
1. npm i or npm install
2. npm run dev or yarn dev
```
after getting successful message, go to the project folder then open it with any kind of text editor like vs code, brackets, atom etc.


file structure.
1. node-modules
2. [Components][1]
3. [pages][2]
4. public
5. styles

most important file is  [NavbarData.js][3]

```javascript
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
		}
	]
```
input your data on navbarData.js as like as  NavbarData.js file of this repo. just change the link or name it will autometically change the sidebar data.



[1]: https://github.com/mahbubsk/sidenav-nextjs/tree/main/Components "Components"
[2]: https://github.com/mahbubsk/sidenav-nextjs/tree/main/pages "pages"
[3]: https://github.com/mahbubsk/sidenav-nextjs/blob/main/Components/Sidenav/NavbarData.js "NavbarData.js"


# Happy Hacking. 

[![demo](https://i.ibb.co/vD1XpsV/Screenshot.png "demo")](https://i.ibb.co/vD1XpsV/Screenshot.png "demo")
