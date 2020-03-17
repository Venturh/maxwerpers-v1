import React, { useState, useEffect } from 'react'
import './Start.css'
import {
	Avatar,
	Box,
	Button,
	ButtonBase,
	Card,
	CardContent,
	CardActions,
	CardMedia,
	Container,
	Grid,
	Paper,
	IconButton,
	Toolbar,
	AppBar,
	Typography,
	Tabs,
	Tab
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import { compose } from 'recompose'
import Slide from 'react-reveal/Slide'
import welcomeImage from '../assets/introCover.svg'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Bounce from 'react-reveal/Bounce'

const useStyles = makeStyles((theme) => ({
	page: {
		display: 'flex',
		alignItems: 'center',
		width: '90%',
		height: '100vh',
		margin: 'auto'
	},
	intro: { flex: 1 },
	introTextWrap: {},

	introTextHeader: {},
	introTextSubtitle: {},
	intoBtn: {
		margin: theme.spacing(1),
		borderRadius: '5em'
	},
	coverImgWrap: {
		flex: 1
	},
	coverImg: {
		height: '80vh'
	}
}))

export default function Start(props) {
	const classes = useStyles()
	const { t, i18n } = useTranslation()
	const [
		show,
		setShow
	] = useState(true)

	const [
		text,
		setText
	] = useState('student')

	useEffect(() => {
		const textPool = [
			'frontdev',
			'backdev',
			'student'
		]
		let i = 0
		const interval = setInterval(() => {
			setShow(false)
			if (i >= textPool.length) {
				i = 0
			}
			setShow(true)
			setText(() => textPool[i++])
		}, 3000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<React.Fragment>
			<Toolbar id='start' />
			<Box className={classes.page}>
				<Box id='intro' className={classes.intro}>
					<Box textAlign='center' id='intro-text' className={classes.introTextWrap}>
						<Typography id='start' variant='h3' color='primary'>
							{t('welcomeMsg')}
						</Typography>
						<Typography component={'span'} variant='h4' color='textSecondary'>
							<Bounce when={show}>{t(JSON.stringify(text).replace(/"/g, ''))}</Bounce>
						</Typography>
						<Button variant='outlined' color='primary' className={classes.intoBtn}>
							Projects
						</Button>
						<Button variant='outlined' color='primary' className={classes.intoBtn}>
							Resume
						</Button>
					</Box>
				</Box>
				<Box className={classes.coverImgWrap}>
					<img className={classes.coverImg} src={welcomeImage} />
				</Box>
			</Box>
		</React.Fragment>
	)
}
