import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { themeAction } from "./actions/ThemeAction"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link,
  } from "react-router-dom";
  import Main from "./Components/Pages/Main"
  import Start from "./Components/Pages/Start"
  import Resume from "./Components/Pages/Resume"
import compose from 'recompose/compose';
import { Container, Box, Button, IconButton , Toolbar, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { withStyles } from '@material-ui/styles';
import { HashLink } from 'react-router-hash-link';
import Headroom from 'react-headroom';
import Navigation from "./Components/Pages/Navigation";



const styles = {

};

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabposition: 0,
  };
    
  }

  componentDidMount(){
      this.props.changeTheme("light")
  }


  render() {
    const { classes } = this.props;
    let theme = this.props.theme.theme
    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Headroom>
                  <Navigation />
                  
                </Headroom>
                <Toolbar />
                <Box display="flex" justifyContent="flex-center">
                  <Start id="start"/>
                </Box>
                <Box id="resume" display="flex" justifyContent="flex-center" mt={200}>
                  <Resume/>
                </Box>
        </MuiThemeProvider>
      </div>
    );
  }
}


function mapState(state) {
    const { theme } = state;
    return { theme  };
  }

const actionCreators = {
changeTheme: themeAction.changeTheme
};

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapState, actionCreators)
)(Theme);
