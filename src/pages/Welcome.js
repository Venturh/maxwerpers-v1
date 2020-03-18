import React, { useState, useEffect } from 'react'
import { Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import welcomeImage from '../assets/introCover.svg'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Bounce from 'react-reveal/Bounce'
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
			flexDirection: 'column'
		}
	},
	intro: {
		flex: 1,
		[theme.breakpoints.down('xs')]: {
			marginTop: '10vh',
			textAlign: 'center'
		}
	},
	introTextWrap: {},
	introTextHeader: { margin: theme.spacing(1) },

	infoBtnWrap: {
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			margin: theme.spacing(0.5),
			marginTop: theme.spacing(8)
		}
	},
	infoBtn: {
		margin: theme.spacing(1.5),
		marginTop: theme.spacing(3),
		borderRadius: '5em',
		[theme.breakpoints.down('md')]: {
			margin: theme.spacing(1)
		},
		[theme.breakpoints.down('xs')]: {
			margin: theme.spacing(8),
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2)
		}
	},
	coverImgWrap: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		height: '60vh'
	},
	coverImg: {
		height: '100%',
		[theme.breakpoints.down('xs')]: {
			height: '80%'
		}
	}
}))

export default function WelcomePage(props) {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const ForwardNavLink = React.forwardRef((props, ref) => <HashLink {...props} innerRef={ref} />)
	return (
		<React.Fragment>
			<Toolbar id='start' />
			<Box className={classes.page}>
				<Box id='intro' className={classes.intro}>
					<Box textAlign='center' id='intro-text' className={classes.introTextWrap}>
						<Typography id='start' variant='h3' color='primary' className={classes.introTextHeader}>
							{t('welcomeMsg')}
						</Typography>
						<SubAnimation className={classes.introTextSub} />

						<Box className={classes.infoBtnWrap}>
							<Button
								size='large'
								variant='contained'
								color='secondary'
								href='/#projects'
								className={classes.infoBtn}
							>
								Projects
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
								Resume
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
