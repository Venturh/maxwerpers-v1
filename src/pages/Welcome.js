import React from 'react'
import { Box, Button, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import welcomeImage from '../assets/introCover.svg'
import { HashLink } from 'react-router-hash-link'
import SubAnimation from '../components/IntroSub'

const useStyles = makeStyles((theme) => ({
	page: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		height: '100vh',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			marginLeft: theme.spacing(3),
			marginRight: theme.spacing(3)
		}
	},
	contentLeft: { display: 'flex', flexDirection: 'column', textAlign: 'center' },
	introTextHeader: {
		marginTop: theme.spacing(2)
	},
	introTextSub: {
		margin: theme.spacing(2)
	},
	btn: {
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		}
	},
	infoBtn: {
		marginLeft: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			maxWidth: '50%',
			minWidth: '50%',
			marginTop: theme.spacing(2)
		}
	},
	contentRight: { flex: 1 },
	img: {
		height: '50vh',
		[theme.breakpoints.down('md')]: {
			height: '40vh'
		}
	}
}))

export default function WelcomePage(props) {
	const classes = useStyles()
	const { t } = useTranslation()
	const ForwardNavLink = React.forwardRef((props, ref) => <HashLink {...props} innerRef={ref} />)
	return (
		<React.Fragment>
			<Toolbar id='home' />
			<Box className={classes.page}>
				<Box id='intro' className={classes.contentLeft}>
					<Typography variant='h3' color='primary' className={classes.introTextHeader}>
						{t('welcomeMsg')}
					</Typography>
					<Box className={classes.introTextSub}>
						<SubAnimation />
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
				<Box className='contentRight'>
					<img className={classes.img} src={welcomeImage} alt='img' />
				</Box>
			</Box>
		</React.Fragment>
	)
}
