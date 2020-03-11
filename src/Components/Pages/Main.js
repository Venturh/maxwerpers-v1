import React, { Component } from 'react';
import { Avatar , Box, Button, ButtonBase,  Card , CardContent , CardActions, CardMedia , Container, Grid, Paper, IconButton , Toolbar, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import avatar from '../../assets/avatar2.png';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Resume from "./Resume"
import Start from "./Start"


const styles = {

  };

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }


    render() {
        const { classes } = this.props;
        const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
        return(
            <div className={classes.root}>




            </div>
        )}
}



export default withStyles(styles) (Main);
