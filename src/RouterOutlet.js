import {
    Toolbar,
    CssBaseline
    } from "@material-ui/core";
import Dashboard from'./pages/Dashboard/Dashboard'
import { BrowserRouter as Route,Switch } from "react-router-dom";
import About from'./pages/About/About'
import { BrowserRouter as Router } from "react-router-dom";
import Styles from './Styles';
import Leaflet from "./pages/Leaflet";
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
									<Route path="/map">
									<Leaflet/>
									</Route>
							</Switch>        
						</main>
					</div>
    		</Router>
     );
}
 
export default RouterOutlet;