import {
  CssBaseline,
  Button
  } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

import Styles from './Styles';
import headersData from './headersData';
import SideNav from "./Sidenav";
import HeaderNav from "./HeaderNav";
import DrawerListItems from "./DrawerListItems";
import RouterOutlet from "./RouterOutlet";
export default function Main() {

  const classes = Styles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;


//<useEffect>
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

//</useEffect>

//<displayDesktopSidebar>
  const displayDesktopSidebar = () => {
    return (
      <div className={classes.root}>
        <CssBaseline />
            <HeaderNav 
              mobileView={mobileView} 
              getMenuButtons={getMenuButtons}/>
            <SideNav/>
      </div>
      
    );
  };
//</displayDesktopSidebar>



//<displayMobile>
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <HeaderNav 
        mobileView={mobileView} 
        drawerOpen={drawerOpen} 
        handleDrawerClose={handleDrawerClose} 
        handleDrawerOpen={handleDrawerOpen} 
        getDrawerChoices={getDrawerChoices}/>
    );
  };
//</displayMobile>


//<getDrawerChoices>
const getDrawerChoices = () => {
    return (
      <DrawerListItems/>
      );
     };
 // </getDrawerChoices>


//getMenuButtons
const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: classes.menuButton,
          }}
         >
          {label}
        </Button>
      );
    });
  };

//</getMenuButtons>



//main 

  return (
    <RouterOutlet mobileView={mobileView} 
                  displayMobile={displayMobile} 
                  displayDesktopSidebar={displayDesktopSidebar} />
  );
}
