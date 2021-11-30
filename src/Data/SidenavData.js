import InboxIcon from '@material-ui/icons/MoveToInbox'; 
const SidenavData = [
    {
  
      title:"Main",
      drawerListItems:
      [
        {
          id:"1",
          label: "Dashboard",
          href: "/dashboard",
          icon: <InboxIcon />,
        },
        {
          id:"2",
          label: "About",
          href: "/about",
          icon: <InboxIcon />,
        }
      ]
    },
  
    {
  
      title:"Jobs",
      drawerListItems:
        [
          {
          id:"1",
          label: "Applications",
          href: "/about",
          icon: <InboxIcon />,
        },
        {
          id:"2",
          label: "Bookmarks",
          href: "/about",
          icon: <InboxIcon />,
        },
        {
          id:"3",
          label: "Map",
          href: "/map",
          icon: <InboxIcon />,
        }
      ],
   
    }
  ]
    export default SidenavData
  