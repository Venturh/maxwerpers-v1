import React, { Component } from 'react'
import {
	Avatar,
	Box,
	Button,
	ButtonBase,
	Card,
	CardContent,
	CardActions,
	CardMedia,
	Container,
	Grid,
	Paper,
	IconButton,
	Toolbar,
	AppBar,
	Typography,
	Tabs,
	Tab
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import avatar from '../../assets/avatar2.png'
import { withTranslation, Trans } from 'react-i18next'
import { compose } from 'recompose'
import Slide from 'react-reveal/Slide'

const styles = {
	root: {
		width: '100vw',
		height: '50vw'
	}
}

class Start extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		const { classes } = this.props
		const { t, i18n } = this.props
		const changeLanguage = (lng) => {
			i18n.changeLanguage(lng)
		}
		return (
			<Paper id='start' variant='outlined' square className={classes.root}>
				<Typography id='start' variant='h3' color='textSecondary'>
					<Trans i18nKey='greeting' />
				</Typography>
			</Paper>
		)
	}
}

export default compose(withStyles(styles), withTranslation())(Start)
