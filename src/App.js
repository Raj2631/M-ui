import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";

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
  typography: {
    h2: {
      fontSize: 36,
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
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Theme</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle2">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />
            <Grid container spacing={3} justify="center">
              <Grid item xs={8} md={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={8} md={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={8} md={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>
            {/* <TextField
              variant="outlined"
              color="primary"
              type="email"
              label="Email"
              // placeholder, value works too.
            /> */}
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
