import React, { Component } from 'react';
import { Box, IconButton , Toolbar, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { withStyles } from '@material-ui/styles';
import { HashLink } from 'react-router-hash-link';
import compose from 'recompose/compose';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { themeAction } from "../../actions/ThemeAction"

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


class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes } = this.props;
        return(
            <AppBar  position="absolute">
            <Toolbar>
                <Box className={classes.rightToolbar}>
                <Tabs  mr="auto" value={this.state.tabposition} onChange={this.handleTabChange} indicatorColor="secondary">
                    <Tab  disableRipple className={classes.tab} label="Über"   component={HashLink} smooth to='/#start' />} />
                    <Tab disableRipple className={classes.tab} label="Erfahrungen" component={HashLink} smooth  to='/#resume' />
                    <Tab disableRipple className={classes.tab} label="Kontakt" component={Link}  to='/kontakt' />
                    <IconButton className={classes.nightmodetoggle} onClick={() => {this.props.changeTheme(this.props.theme.themeType);}}>
                     {this.props.theme.themeType == "light" ? <Brightness4Icon/> : <BrightnessHighIcon /> }
                    </IconButton>
                </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
        )}
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
    connect(mapState, actionCreators)  )(Navigation);
  
