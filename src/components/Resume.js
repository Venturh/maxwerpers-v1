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

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		width: '100vw',
		height: '50vw'
	}
}))

function Resume() {
	const classes = useStyles()
	return (
		<Paper id='resume' className={classes.root}>
			<Zoom>
				<Typography variant='h3' color='secondary'>
					Lebenslauf
				</Typography>
			</Zoom>
		</Paper>
	)
}

export default Resume
