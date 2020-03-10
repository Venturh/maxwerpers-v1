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
  import Resume from "./Components/Pages/Resume"
import { AnimatePresence, motion } from 'framer-motion'
import compose from 'recompose/compose';
import { Box, Button, IconButton , Toolbar, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { withStyles } from '@material-ui/styles';


const styles = {
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },

  nightmodetoggle: {
      borderRadius: 99,
  },
  tab: {
      '&:focus': {
          outline: 'none',
      },
      flexGrow: 1,
  },
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
  handleTabChange= (event, tabposition) => {
    this.setState({ tabposition });

  }

  render() {
    const { classes } = this.props;
    return (
        <div>
            <MuiThemeProvider theme={this.props.theme.theme}>
                <CssBaseline />
                <Box>
                <AppBar>
                    <Toolbar>
                        <section className={classes.rightToolbar}>
                        <Tabs  mr="auto" value={this.state.tabposition} onChange={this.handleTabChange} indicatorColor="secondary">
                            <Tab disableRipple className={classes.tab} label="Über"   component={Link} to='/' />} />
                            <Tab disableRipple className={classes.tab} label="Erfahrungen" component={Link} to='/resume' />
                            <Tab disableRipple className={classes.tab} label="Kontakt" component={Link} to='/kontakt' />
                            <IconButton className={classes.nightmodetoggle} onClick={() => {this.props.changeTheme(this.props.theme.themeType);}}>
                             {this.props.theme.themeType == "light" ? <Brightness4Icon/> : <BrightnessHighIcon /> }
                            </IconButton>
                        </Tabs>
                        </section>
                    </Toolbar>
                </AppBar>
            </Box>
                  <AnimatePresence>
                  <Switch location={this.props.location} key={this.props.location.pathname}>
                    <Route exact path="/" component={Main}/>
                    <Route path="/resume" component={Resume}/>
                  </Switch>
                  </AnimatePresence>
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
