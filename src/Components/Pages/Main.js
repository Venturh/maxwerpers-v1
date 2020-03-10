import React, { Component } from 'react';
import { Avatar , Box, Button, ButtonBase,  Card , CardContent , CardActions, CardMedia , Container, Grid, Paper, IconButton , Toolbar, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import avatar from '../../assets/avatar2.png';

import { AnimatePresence, motion } from 'framer-motion'
import { pageTransition, pageVariants} from '../../Constants/AnimationConstants'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


const styles = {
    root: {
        flexGrow: 1,
      },
      paper: {
        margin: 'auto',
        maxWidth: 800,
      },
      image: {
        width: 1000,
        height: 1300,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
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
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                <Grid item>
                    <Avatar variant="square" src={avatar} className={classes.image}>
                    </Avatar>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography variant="h3" gutterBottom>
                        Ich bin Maximilian Werpers
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        Remove
                        </Typography>
                    </Grid>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                    </Grid>
                </Grid>
                </Grid>
            </Paper>
            </div>
        )}
}



export default withStyles(styles) (Main);
