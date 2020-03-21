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
		[theme.breakpoints.down('sm')]: {
			height: '100%'
		}
	}
}))

function Resume() {
	const classes = useStyles()
	const { i18n, t } = useTranslation()
	const [
		activeStep,
		setActiveStep
	] = useState(0)
	return (
		<Box id='experience' className={classes.page}>
			<Box m={10} className={classes.timeline}>
				<Timeline />
			</Box>
		</Box>
	)
}

export default Resume
