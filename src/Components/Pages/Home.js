import React, { Component } from 'react';
import Navigation from './Navigation';
import { Button, Toolbar, AppBar, Typography, IconButton } from "@material-ui/core";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        return(
            <div>
                <Navigation/>
                <Typography>Home</Typography>
            </div>
        )}
}



export default Home;
