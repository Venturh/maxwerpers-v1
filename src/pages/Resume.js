import React, { Component } from 'react'
import {
	Button,
	Box,
	Toolbar,
	Grid,
	AppBar,
	Typography,
	IconButton,
	Paper,
	Card
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from 'react-reveal/Zoom'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		minHeight: '100vh',
		Width: '100vw',
		background: theme.gradient.start
	}
}))

function Resume() {
	const classes = useStyles()
	const { i18n, t } = useTranslation()
	return (
		<Paper id='experience' className={classes.root}>
			<Zoom>
				<Typography variant='h3' color='secondary'>
					Lebenslauf
				</Typography>
			</Zoom>
		</Paper>
	)
}

export default Resume
