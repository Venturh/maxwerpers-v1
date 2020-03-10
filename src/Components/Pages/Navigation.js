import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Box, IconButton , Toolbar, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { themeAction } from "../../actions/ThemeAction"
import compose from 'recompose/compose';


import Home from "./Home"
import Resume from "./Resume"

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
        };
    }

      handleTabChange= (event, tabposition) => {
        this.setState({ tabposition });

      }



    render() {
        const { classes } = this.props;
        return(
            <Box>
                <AppBar>
                    <Toolbar>
                        <Typography>{this.props.theme.themeType}</Typography>
                        <section className={classes.rightToolbar}>
                        <Tabs  mr="auto" value={this.state.tabposition} onChange={this.handleTabChange} indicatorColor="secondary">
                            <Tab disableRipple className={classes.tab} label="Über"  color="secondary" />} />
                            <Tab disableRipple className={classes.tab} label="Erfahrungen"/>
                            <Tab disableRipple className={classes.tab} label="Portfolio"/>
                            <Tab disableRipple className={classes.tab} label="Kontakt"/>
                            <IconButton className={classes.nightmodetoggle} onClick={() => {this.props.changeTheme(this.props.theme.themeType);}}>
                             {this.props.theme.themeType == "light" ? <Brightness4Icon/> : <BrightnessHighIcon /> }
                            </IconButton>
                        </Tabs>
                        </section>
                    </Toolbar>
                </AppBar>


                
            </Box>

            
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
    connect(mapState, actionCreators)
    )(Navigation);
