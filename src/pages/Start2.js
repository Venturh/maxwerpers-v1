import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import SubAnimation from '../components/IntroSub'
import bg_mobile from '../assets/startbg_mobile.svg'
import bg from '../assets/startbg.svg'
import dude from '../assets/dude.svg'

const useStyles = makeStyles((theme) => ({
	page: {
		height: '100vh',
		backgroundImage: `url(${bg})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',

		[theme.breakpoints.down('700')]: {
			backgroundImage: `url(${bg_mobile})`,
			backgroundPosition: 'center'
		}
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down('700')]: {
			textAlign: 'center',
			paddingTop: '33%',
			marginBottom: '33%'
		},
		[theme.breakpoints.up('700')]: {
			position: 'absolute',
			left: '15%',
			top: 'calc(50% - 0.59em)'
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
	img: {
		height: '40vh',
		display: 'none'
	}
}))

export default function Start2(props) {
	const classes = useStyles()
	const { t } = useTranslation()
	const ForwardNavLink = React.forwardRef((props, ref) => <HashLink {...props} innerRef={ref} />)
	return (
		<div className={classes.page}>
			<Box className={classes.imgDiv}>
				<img className={classes.img} src={dude} alt='img' />
			</Box>
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
		</div>
	)
}
