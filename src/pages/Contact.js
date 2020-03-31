import React from 'react'
import { Container, Box, Paper, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import { ContactCard } from '../components/ContactForm'
import CopyrightIcon from '@material-ui/icons/Copyright'
import Fade from 'react-reveal/Fade'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { useTheme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	page: {
		position: 'relative',
		height: '100vh',
		display: 'flex',
		marginLeft: theme.spacing(10),
		marginRight: theme.spacing(10),
		flexDirection: 'column',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
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
	titleUnder: {
		width: '10%',
		height: 10,
		borderRadius: 25,
		backgroundColor: theme.palette.secondary.main,
		margingTop: theme.spacing(2)
	},

	content: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},

	paperL: {
		width: '50%',
		height: '90%',
		marginRight: theme.spacing(10),
		[theme.breakpoints.down('sm')]: { marginTop: theme.spacing(2), width: '100%' }
	},

	paperM: {
		width: '50%',
		marginTop: theme.spacing(10),
		[theme.breakpoints.down('sm')]: { width: '100%', marginTop: theme.spacing(0) }
	},

	paperR: {
		width: '50%',
		height: '90%',
		marginLeft: theme.spacing(10),
		[theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing(0),
			marginTop: theme.spacing(2),
			width: '100%'
		}
	},

	paperTop: {
		width: '100%',
		height: 10,
		borderRadius: 25,
		backgroundColor: theme.palette.secondary.main
	},
	paperTopMid: {
		width: '100%',
		height: 10,
		borderRadius: 25,
		backgroundColor: theme.palette.primary.main
	},
	footer: {
		display: 'flex',
		marginTop: theme.spacing(10),
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(3)
		}
	}
}))

export default function Contact2() {
	const classes = useStyles()
	const { t } = useTranslation()

	const theme = useTheme()
	const large = useMediaQuery(theme.breakpoints.up('md'))

	const cardLeft = [
		{
			title: 'Github',
			text: 'githubDesc',
			link: 'https://github.com/Venturh',
			icon: 'GithubCircle'
		},
		{
			title: 'Playstore',
			text: 'playstoreDesc',
			link: 'https://play.google.com/store/apps/developer?id=Venturh&hl=en_US',
			icon: 'GooglePlay'
		},
		{
			title: 'LinkedIn',
			text: 'linkedinDesc',
			link: 'https://www.linkedin.com/in/max-werpers-9474251a5/',
			icon: 'Linkedin'
		}
	]

	const cardRight = [
		{
			title: 'Telegram',
			text: 'telegramDesc',
			link: 'https://t.me/ven_turh',
			icon: 'Telegram'
		},
		{
			title: 'Email',
			text: 'contact@maxwerpers.me',
			link: '',
			icon: 'Email'
		}
	]

	const card = [
		...cardLeft,
		...cardRight
	]

	return (
		<Box id='contact' className={classes.page}>
			<Container className={classes.title}>
				<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
					<Typography variant='h3'>{t('contact')}</Typography>
					<Fade left>
						<div className={classes.titleUnder} />
					</Fade>
				</Box>
			</Container>

			<Container>
				<Box className={classes.content}>
					{
						large ? <Paper className={classes.paperL}>
							<div className={classes.paperTop} />
							<Box m={2}>
								<ContactCard info={cardLeft} />
							</Box>
						</Paper> :
						null}

					<Box className={classes.paperM}>
						<Paper>
							<div className={classes.paperTopMid} />
							<Box m={2}>
								<ContactForm />
							</Box>
						</Paper>
					</Box>

					{
						large ? <Paper className={classes.paperR}>
							<div className={classes.paperTop} />
							<Box m={2}>
								<ContactCard info={cardRight} />
							</Box>
						</Paper> :
						<Paper className={classes.paperL}>
							<div className={classes.paperTop} />
							<Box m={2}>
								<ContactCard info={card} />
							</Box>
						</Paper>}
				</Box>
			</Container>

			<Box className={classes.footer}>
				<CopyrightIcon fontSize='small' />
				<Typography variant='subtitle2'>2020 Max Werpers</Typography>
			</Box>
		</Box>
	)
}
