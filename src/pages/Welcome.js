import React, { useState, useEffect } from 'react'
import { Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import welcomeImage from '../assets/introCover.svg'
import { HashLink } from 'react-router-hash-link'
import SubAnimation from '../components/IntroSub'

const useStyles = makeStyles((theme) => ({
	page: {
		display: 'flex',
		alignItems: 'center',
		width: '90%',
		height: '100vh',
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			marginTop: '10%'
		}
	},
	intro: {
		flex: 1,
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			margin: theme.spacing(5)
		}
	},
	introTextWrap: {},
	introTextHeader: {},
	introTextSub: { marginTop: theme.spacing(2), marginBottom: theme.spacing(2) },

	infoBtnWrap: {
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		}
	},
	infoBtn: {
		margin: theme.spacing(2),
		marginTop: theme.spacing(2),
		[theme.breakpoints.down('xs')]: { marginTop: theme.spacing(2), margin: theme.spacing(0) }
	},
	coverImgWrap: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		height: '60vh',
		[theme.breakpoints.down('xs')]: { marginBottom: '5%' }
	},
	coverImg: {
		height: '100%',
		[theme.breakpoints.down('xs')]: {
			height: '60%'
		}
	}
}))

export default function WelcomePage(props) {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const ForwardNavLink = React.forwardRef((props, ref) => <HashLink {...props} innerRef={ref} />)
	return (
		<React.Fragment>
			<Toolbar id='home' />
			<Box className={classes.page}>
				<Box id='intro' className={classes.intro}>
					<Box textAlign='center' id='intro-text' className={classes.introTextWrap}>
						<Typography id='start' variant='h3' color='primary' className={classes.introTextHeader}>
							{t('welcomeMsg')}
						</Typography>
						<Box className={classes.introTextSub}>
							<SubAnimation />
						</Box>

						<Box className={classes.infoBtnWrap}>
							<Button
								size='large'
								variant='contained'
								color='secondary'
								href='/#projects'
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
								to='/#resume'
								className={classes.infoBtn}
							>
								{t('Experience')}
							</Button>
						</Box>
					</Box>
				</Box>
				<Box className={classes.coverImgWrap}>
					<img className={classes.coverImg} src={welcomeImage} />
				</Box>
			</Box>
		</React.Fragment>
	)
}
