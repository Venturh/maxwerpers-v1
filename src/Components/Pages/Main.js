import React, { Component } from 'react';
import { Box, Button, Card , CardContent , CardActions , Container, Paper, IconButton , Toolbar, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import Resume from "./Resume"
import Start from "./Start"
import Grids from "./Grid"
import { AnimatePresence, motion } from 'framer-motion'
import { pageTransition, pageVariants} from '../../Constants/AnimationConstants'


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    onScroll(info) {
        console.log(info.offset, info.velocity)
      }
    render() {
        return(
            <div>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}>
            <Box display="flex" justifyContent="flex-center" m={50} p={1}>
                <Typography variant="h3" color="secondary">Start</Typography>
            </Box>
            </motion.div>
            </div>
        )}
}



export default Main;
