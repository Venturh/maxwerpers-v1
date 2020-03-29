import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import { useTheme } from '@material-ui/core/styles'
import Zoom from 'react-reveal/Zoom'
import cover_dark from '../assets/landing_cover_dark.svg'
import cover_light from '../assets/landing_cover_light.svg'
import shape_1 from '../assets/shape_1.svg'

const useStyles = makeStyles((theme) => ({
	page: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column-reverse',
			justifyContent: 'center',
			textAlign: 'center'
		}
	},

	info: {
		marginLeft: theme.spacing(10),
		[theme.breakpoints.down('sm')]: {
			marginRight: theme.spacing(3),
			marginLeft: theme.spacing(3)
		}
	},
	btn: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center'
		}
	},
	infoBtn: {
		marginTop: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			minWidth: '50%'
		},
		[theme.breakpoints.up('sm')]: {
			width: '100%'
		}
	},
	imgDiv: {
		marginRight: theme.spacing(10),
		[theme.breakpoints.down('sm')]: { margin: 0 }
	},
	img: {
		height: '60vh',
		[theme.breakpoints.down('1000')]: {
			height: '40vh'
		},
		[theme.breakpoints.down('sm')]: {
			height: '30vh'
		}
	},
	shape_1: {
		position: 'absolute',
		zIndex: -1,
		top: 100,
		right: 0,
		[theme.breakpoints.down('sm')]: {
			height: '3%'
		}
	}
}))

export default function Welcome(props) {
	const classes = useStyles()
	const { t } = useTranslation()
	const ForwardNavLink = React.forwardRef((props, ref) => <HashLink {...props} innerRef={ref} />)
	const theme = useTheme()

	return (
		<Box className={classes.page}>
			<Box className={classes.info}>
				<Typography variant='body2' color='secondary' className={classes.introTextHeader}>
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
						color='primary'
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
						color='secondary'
						component={ForwardNavLink}
						smooth
						to='/#experience'
						className={classes.infoBtn}
					>
						{t('experience')}
					</Button>
				</Box>
			</Box>
			<Box className={classes.imgDiv}>
				<Zoom>
					<img
						className={classes.img}
						src={

								theme.palette.type === 'light' ? cover_light :
								cover_dark
						}
						alt='img'
					/>
				</Zoom>
			</Box>
			<Zoom>
				<img className={classes.shape_1} src={shape_1} alt='img' />
			</Zoom>
		</Box>
	)
}
