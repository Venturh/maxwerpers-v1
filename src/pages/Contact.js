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
import ContactForm from '../components/ContactForm'

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
	}
}))

export default function Experience() {
	const classes = useStyles()
	const { i18n, t } = useTranslation()

	return (
		<Box id='contact' className={classes.page}>
			<Typography align='center' variant='h3'>
				{t('contact')}
			</Typography>
			<ContactForm />
		</Box>
	)
}
