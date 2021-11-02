import Logo from './Logo';
import {
    AppBar,
    Toolbar,
    Drawer,
    IconButton,
    } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Styles from './Styles';

const HeaderNav = ({getMenuButtons,handleDrawerOpen,
                    handleDrawerClose,
                    getDrawerChoices,
                    drawerOpen,
                    mobileView}) => {
    const classes = Styles();
    return ( 
        <AppBar position="fixed" className={classes.appBar}>
        {mobileView && <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "default",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              className : classes.drawer,
              classes:{
                  paper: classes.drawerPaper2,
                },
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
         
          <div>{Logo()}</div>
        </Toolbar>}
        {!mobileView && <Toolbar className={classes.toolbar}>
            {Logo()}
            <div>{getMenuButtons()}</div>
          </Toolbar>}
        </AppBar>
     );
}
 
export default HeaderNav;