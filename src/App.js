
import { useState } from "react";
import "./App.css";
import Login from "./login";
import Main from "./Main";


function App() {
const [loggedIn,setLoggedIn] = useState(localStorage.getItem("user"));
  return ( 
      <>
    {/* login */}
    <Login setLoggedIn={setLoggedIn} />
     {loggedIn && <Main/> }
      </>
  );
}
export default App;
