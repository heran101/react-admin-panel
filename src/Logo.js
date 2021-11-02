import {Typography} from "@material-ui/core";
import Styles from "./Styles";
const Logo = () => {
  const classes = Styles();
  return (
    <Typography variant="h6" component="h1" className={classes.logo}>
      Job4Her
    </Typography>
    );
}
 
export default Logo;
