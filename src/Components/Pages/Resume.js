import React, { Component } from 'react';
import { Button, Box, Toolbar, Grid, AppBar, Typography, IconButton } from "@material-ui/core";
import { AnimatePresence, motion } from 'framer-motion'
import { pageTransition, pageVariants} from '../../Constants/AnimationConstants'

class Resume extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }


    
    render() {
        return(
            <div>
            <Box display="flex" justifyContent="flex-center" m={50} p={1}>
                <Typography variant="h3" color="secondary">Lebenslauf</Typography>
            </Box>
            </div>
        )}
}



export default Resume;
