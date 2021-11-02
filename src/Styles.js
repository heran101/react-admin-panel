import {makeStyles} from "@material-ui/core";
const drawerWidth = 240;
const Styles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "white",
      paddingRight: "20px",
      paddingLeft: "20px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
      
      
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      
  
      
    },
    drawerPaper: {
      width: drawerWidth, 
      paddingTop: "50px"  
    },
    drawerPaper2: {
      width: drawerWidth,
       marginTop: "56px",
       paddingTop: "40px"   
    },
    drawerContainer: {
      overflow: 'auto',
      padding: "5px 5px",
      textAlign: "left",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      color: "#333"
    },
    divider: {
      
      margin: theme.spacing(3),
    },
    menuButton: {  
      marginRight: theme.spacing(2),
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      color: "black",
      marginLeft: "38px",
      padding: "1px 1px",
    },
    title: {
      flexGrow: 1,   
    },
  
  
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "black",
      textAlign: "left",
    },
    
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      
    },
   
    drawerTitle: {
      paddingLeft: "20px",
      color: "#aaa"
    },
    
  }));

  export default Styles;