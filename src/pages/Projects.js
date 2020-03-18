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
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		minHeight: '100vh',
		Width: '100vw'
	}
}))

export default function Projects() {
	const classes = useStyles()
	const { i18n, t } = useTranslation()
	return (
		<Paper id='projects' className={classes.root}>
			<Typography variant='h3' color='secondary'>
				Projects: todo
			</Typography>
		</Paper>
	)
}
