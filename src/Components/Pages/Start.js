import React, { Component } from 'react';
import { Avatar , Box, Button, ButtonBase,  Card , CardContent , CardActions, CardMedia , Container, Grid, Paper, IconButton , Toolbar, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import avatar from '../../assets/avatar2.png';
import { motion } from "framer-motion"

const styles = {

  };

class Start extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        const { classes } = this.props;
        return(
            <motion.div>
                
            </motion.div>
        )}
}



export default withStyles(styles) (Start);
