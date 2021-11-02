import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Texter from "./texter";
import TextInput from "./TextInput";
import { Grid } from "@material-ui/core";
import { TextFields } from "@material-ui/icons";
import { TextField } from "@material-ui/core";


function ReactLogo(props) {

  return (
    <header className="App-header">
      <form>
      <Grid
  container
  direction="column"
  justifyContent="space-between"
  alignItems="center"
>
<TextField id="standard-basic" label="Standard" />
        <TextInput label="Last Name" identifier="lname" />
        <TextInput label="Age" identifier="age" type="number"/>
        <TextInput label="Date" identifier="date" type="date" />

        </Grid>
      
      </form>
    </header>
  );
}

export default ReactLogo;
