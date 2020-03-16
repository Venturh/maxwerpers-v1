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
import welcomeImage from '../assets/notebook.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		minWidth: '100vh',
		background: theme.status.danger
	},
	welcomeimage: {
		width: '50%',
		'@media (min-width: 780px)': {
			width: '80%'
		}
	}
}))

export default function Start(props) {
	const matches = useMediaQuery('(min-width:600px)')

	const classes = useStyles()
	const { t, i18n } = useTranslation()
	return (
		<Box id='start'>
			<Paper variant='outlined' square className={classes.root}>
				<Typography id='start' variant='h3' color='textSecondary'>
					{t('welcomeMsg')}
				</Typography>
				<Container>
					<img width='100px' height='100px' className={classes.welcomeimage} src={welcomeImage} />
				</Container>
			</Paper>
		</Box>
	)
}
