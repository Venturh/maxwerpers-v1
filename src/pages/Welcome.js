import React from 'react'
import { Container, Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import SubAnimation from '../components/IntroSub'
import bg_mobile from '../assets/startbg_mobile.svg'
import bg from '../assets/testo.svg'
import cover_large from '../assets/landing_cover_large.svg'

const useStyles = makeStyles((theme) => ({
	page: {
		height: '100vh',
		// backgroundImage: `url(${bg})`,
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: '30%',
		// backgroundPosition: 'left bottom',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',

		[theme.breakpoints.down('700')]: {
			//	backgroundImage: `url(${bg_mobile})`,
			flexDirection: 'column-reverse',
			justifyContent: 'center',
			textAlign: 'center'
		}
	},

	info: {
		marginLeft: theme.spacing(10),
		[theme.breakpoints.down('700')]: {
			marginLeft: theme.spacing(3)
		}
	},
	btn: {
		alignItems: 'center',
		[theme.breakpoints.down('700')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		}
	},
	infoBtn: {
		marginTop: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.down('700')]: {
			minWidth: '50%'
		},
		[theme.breakpoints.up('700')]: {
			width: '100%'
		}
	},
	imgDiv: {
		marginRight: theme.spacing(10),
		[theme.breakpoints.down('700')]: {
			marginRight: theme.spacing(3)
		}
	},
	img: {
		height: '60vh',
		[theme.breakpoints.down('1000')]: {
			height: '40vh'
		},
		[theme.breakpoints.down('700')]: {
			height: '30vh'
		}
	}
}))

export default function Welcome(props) {
	const classes = useStyles()
	const { t } = useTranslation()
	const ForwardNavLink = React.forwardRef((props, ref) => <HashLink {...props} innerRef={ref} />)
	return (
		<Box className={classes.page}>
			<Box className={classes.info}>
				<Typography variant='subtitle2' color='secondary' className={classes.introTextHeader}>
					{t('welcomeTitle')}
				</Typography>
				<Box mt={0.5}>
					<Typography variant='h4' color='textPrimary'>
						{t('welcomeMsg')}
					</Typography>
				</Box>
				<Box mt={0}>
					<Typography variant='h4' color='textSecondary'>
						{t('welcomeSub')}
					</Typography>
				</Box>

				<Box className={classes.btn}>
					<Button
						size='large'
						variant='contained'
						color='secondary'
						component={ForwardNavLink}
						smooth
						to='/#projects'
						className={classes.infoBtn}
					>
						{t('projects')}
					</Button>
					<Button
						size='large'
						variant='contained'
						color='primary'
						component={ForwardNavLink}
						smooth
						to='/#experience'
						className={classes.infoBtn}
					>
						{t('Experience')}
					</Button>
				</Box>
			</Box>
			<Box className={classes.imgDiv}>
				<img className={classes.img} src={cover_large} alt='img' />
			</Box>
		</Box>
	)
}
