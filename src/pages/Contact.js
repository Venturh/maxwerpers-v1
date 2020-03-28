import React from 'react'
import { Box, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import { ContactCard } from '../components/ContactForm'
import welcomeImage from '../assets/introCover.svg'

const useStyles = makeStyles((theme) => ({
	page: {
		height: '100vh',
		display: 'flex',
		marginLeft: theme.spacing(10),
		marginRight: theme.spacing(10),
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
		alignSelf: 'flex-end',
		flex: 3,
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
	},
	items: {
		display: 'flex'
	},
	imageWrap: {
		flex: 2,
		display: 'flex',
		justifyContent: 'center',
		height: '60vh',
		[theme.breakpoints.down('md')]: { display: 'none' }
	},
	projectImg: {
		height: '100%',
		[theme.breakpoints.down('lg')]: {
			height: '80%'
		}
	}
}))

export default function Contact() {
	const classes = useStyles()
	const { t } = useTranslation()

	return (
		<Box id='contact' className={classes.page}>
			<Box className={classes.title}>
				<Typography align='center' variant='h3'>
					{t('contact')}
				</Typography>
			</Box>
			<Box className={classes.items}>
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
					<Box className={classes.imageWrap}>
						<img className={classes.projectImg} src={welcomeImage} alt='img' />
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
