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
	Card,
	Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import { ContactCard } from '../components/ContactForm'

const useStyles = makeStyles((theme) => ({
	page: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			height: '100%',
			marginLeft: theme.spacing(3),
			marginRight: theme.spacing(3)
		}
	},
	title: {
		[theme.breakpoints.up('md')]: { margin: theme.spacing(10) },
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(5),
			marginBottom: theme.spacing(5)
		}
	},
	contactItems: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	form: {
		width: '50%',
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},
	divider: {
		width: 2,
		backgroundColor: theme.palette.primary.main,
		marginLeft: theme.spacing(4),
		marginRight: theme.spacing(4),
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	formtitles: {
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	}
}))

export default function Contact() {
	const classes = useStyles()
	const { i18n, t } = useTranslation()

	return (
		<Box id='contact' className={classes.page}>
			<Box className={classes.title}>
				<Typography align='center' variant='h3'>
					{t('contact')}
				</Typography>
			</Box>
			<Box className={classes.contactItems}>
				<Box className={classes.form}>
					<Typography variant='h6' className={classes.formtitles}>
						{t('contactme')}
					</Typography>
					<ContactForm />
				</Box>
				<Divider orientation='vertical' flexItem className={classes.divider} />
				<Box className={classes.contactCards}>
					<Typography variant='h6' className={classes.formtitles}>
						{t('cardTitle')}
					</Typography>
					<ContactCard />
				</Box>
			</Box>
		</Box>
	)
}
