import React, { useState } from 'react'
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
	page: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			height: '100vh'
		}
	}
}))

export default function About() {
	const classes = useStyles()
	const { i18n, t } = useTranslation()

	return (
		<Box id='about' className={classes.page}>
			<Typography variant='h3' className={classes.title}>
				{t('about')}
			</Typography>
		</Box>
	)
}
