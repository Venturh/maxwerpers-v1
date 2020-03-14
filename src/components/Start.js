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
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import { compose } from 'recompose'
import Slide from 'react-reveal/Slide'

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		minWidth: '100vh',
		background: theme.status.danger
	}
}))

export default function Start(props) {
	console.log('Zheme: ' + useStyles.theme)
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	return (
		<Paper id='start' variant='outlined' square className={classes.root}>
			<Typography id='start' variant='h3' color='textSecondary'>
				Hallo
			</Typography>
		</Paper>
	)
}
