import React, { Component } from 'react';
import { Avatar , Box, Button, ButtonBase,  Card , CardContent , CardActions, CardMedia , Container, Grid, Paper, IconButton , Toolbar, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import avatar from '../../assets/avatar2.png';
import { withTranslation, Trans } from "react-i18next";
import { compose } from 'recompose';

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

class Start extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        const { classes } = this.props;
        const { t, i18n } = this.props;
        const changeLanguage = lng => {
          i18n.changeLanguage(lng);
        };
        return(
            // <Paper id="start" className={classes.paper}>
            //     <Grid item>
            //         <Avatar variant="square" src={avatar} className={classes.image}>
            //         </Avatar>
            //     </Grid>
            //     <Grid item xs={12} sm container>
            //         <Grid item xs container direction="column" spacing={2}>
            //         <Grid item xs>
            //             <Typography variant="h3" gutterBottom>
            //             Ich bin Maximilian Werpers
            //             </Typography>
            //             <Typography variant="body2" color="textSecondary">
            //             ID: 1030114
            //             </Typography>
            //         </Grid>
            //         <Grid item>
            //             <Typography variant="body2" style={{ cursor: 'pointer' }}>
            //             Remove
            //             </Typography>
            //         </Grid>
            //         </Grid>
            //         <Grid item>
            //         <Typography variant="subtitle1">$19.00</Typography>
            //         </Grid>
            //     </Grid>>
            //     </Paper>
                <Container>
                    
        
                    <Typography id="start" variant="h3" color="textSecondary"><Trans i18nKey="greeting"/></Typography>
                </Container>
                

        )}
}



export default compose(
  withStyles(styles),
  withTranslation()
) (Start);
