import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

const useStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6888, #FF8E53)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
    margin: "30px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function ButtonStyled() {
  const classes = useStyle();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
        />
      }
      label="Testing Checkbox"
    ></FormControlLabel>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField
            variant="outlined"
            color="primary"
            type="email"
            label="Email"
            // placeholder, value works too.
          />
          <CheckboxExample />
          <ButtonGroup variant="contained" color="primary">
            <Button
              // href="#"
              // onClick={() => alert("hello")}
              // style={{
              //   fontSize: 24,
              // }}
              size="large"
              // startIcon={<SaveIcon />}
              endIcon={<SaveIcon />}
            >
              Save
            </Button>
            <Button
              // href="#"
              // onClick={() => alert("hello")}
              // style={{
              //   fontSize: 24,
              // }}
              size="large"
              // startIcon={<SaveIcon />}
              endIcon={<DeleteIcon />}
              variant="contained"
            >
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
