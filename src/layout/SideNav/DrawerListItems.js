import {
  ListItemText,
  Link,
  ListItem,
  List,
  Divider,
  } from "@material-ui/core";
  
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link as RouterLink } from "react-router-dom";
import Styles from '../../Styles';
import SidenavData from '../../Data/SidenavData';
const DrawerListItems = () => {
  const classes = Styles();
    return ( 
      <div className={classes.drawerContainer}>     
      <List>
        {SidenavData.map(({title,drawerListItems}) =>  (
          <div key={title}>
          <h6 className={classes.drawerTitle} >{title}</h6>
          {drawerListItems.map(({id,label,href,icon }) =>  (
            <ListItem button key={id}>
              <ListItemIcon>{icon}</ListItemIcon>
              <Link
                {...{
                  component: RouterLink,
                  to: href,
                  color: "inherit",
                  style: { textDecoration: "none" },
                  key: label,
                }}
              >
              <ListItemText primary={label} />
              </Link>
            </ListItem>
          ))}
          <Divider className={classes.divider}  />
          </div>
        ))}
      </List> 
      </div>
     );
}
 
export default DrawerListItems;