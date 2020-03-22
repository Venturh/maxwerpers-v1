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
import Zoom from 'react-reveal/Zoom'
import { useTranslation } from 'react-i18next'
import Timeline from '../components/Timeline'

const useStyles = makeStyles((theme) => ({
	page: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			height: '100%'
		}
	},
	title: {
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(5)
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(5)
		}
	}
}))

function Experience() {
	const classes = useStyles()
	const { i18n, t } = useTranslation()

	return (
		<Box id='experience' className={classes.page}>
			<Typography variant='h3' className={classes.title}>
				{t('experience')}
			</Typography>
			<Timeline />
		</Box>
	)
}

export default Experience
