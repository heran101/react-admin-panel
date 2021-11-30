
import {
  Toolbar,
  Drawer
  } from "@material-ui/core";
import Styles from '../../Styles';
import DrawerListItems from "./DrawerListItems";

function SideNav() {

  const classes = Styles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}>
      <Toolbar />
      <DrawerListItems/>
    </Drawer>
  );
}

export default SideNav;
