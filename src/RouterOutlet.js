import {
    Toolbar,
    CssBaseline
    } from "@material-ui/core";
import Dashboard from'./Dashboard'
import { BrowserRouter as Route,Switch } from "react-router-dom";
import About from'./About'
import { BrowserRouter as Router } from "react-router-dom";
import Styles from './Styles';
const RouterOutlet = ({mobileView,displayMobile,displayDesktopSidebar}) => {
	
	const classes = Styles();
    return ( 
        <Router>
					<div className={classes.root}>
						<CssBaseline />
						{mobileView ? displayMobile() :   displayDesktopSidebar()}
						<main className={classes.content}>
							<Toolbar />   
							<Switch>
									<Route exact path="/dashboard">
									<Dashboard/>
									</Route>
									<Route path="/about">
									<About/>
									</Route>
							</Switch>        
						</main>
					</div>
    		</Router>
     );
}
 
export default RouterOutlet;