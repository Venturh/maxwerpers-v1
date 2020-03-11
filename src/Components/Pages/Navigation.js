import React, { Component } from 'react';
import { Box, Button, IconButton , Toolbar, AppBar, Menu, MenuItem , Typography, Tabs, Tab } from "@material-ui/core";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { withStyles } from '@material-ui/styles';
import { HashLink } from 'react-router-hash-link';
import compose from 'recompose/compose';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { themeAction } from "../../actions/ThemeAction"
import { withTranslation } from 'react-i18next';

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
            tabposition: 0,
            anchorEl: null
        };
        this.handleMenuOpen = this.handleMenuOpen.bind(this);
    }
    

    handleTabChange= (e,tabposition ) => {
        this.setState({ tabposition });
      }

    handleMenuOpen(event){
        this.setState({ anchorEl: event.currentTarget });
    }

    handleMenuClose(language){
        this.setState( {anchorEl: null} );
        this.props.i18n.changeLanguage(language);
    }

    render() {
        const { classes, i18n } = this.props;
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
          };

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
                    <Button label="Sprache" onClick={this.handleMenuOpen}> Sprache</Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    >
                        <MenuItem onClick={() => this.handleMenuClose("de")}>
                        <Typography  color="textSecondary">Deutsch</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => this.handleMenuClose("en")}>
                        <Typography  color="textSecondary">English</Typography>
                        </MenuItem>
                    </Menu>
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
    withTranslation(),
    withRouter,
    connect(mapState, actionCreators)  )(Navigation);
  
