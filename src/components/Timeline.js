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
	CardContent
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from 'react-reveal/Zoom'
import { useTranslation } from 'react-i18next'
import './style.css'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	timelineContainer: {
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		'&::after': {
			backgroundColor: theme.palette.primary.main,
			content: '""',
			position: 'absolute',
			width: '4px',
			height: '100%',
			left: 'calc(50% - 2px)'
		}
	},
	timelineItem: {
		display: 'flex',
		justifyContent: 'flex-end',
		position: 'relative',
		paddingRight: '30px',
		marginTop: '10px',
		marginBottom: 0,
		width: '50%',
		maxWidth: '70%',
		'&:nth-child(odd)': {
			alignSelf: 'flex-end',
			justifyContent: 'flex-start',
			paddingLeft: '30px',
			paddinfRight: '0px',
			'& > div': {
				textAlign: 'left',
				alignItems: 'flex-start',
				'&::after': {
					right: 'auto',
					left: '-7.5px'
				},
				'&>  span': {
					left: '-40px'
				}
			}
		}
	},
	timelineItemContent: {
		display: 'flex',
		position: 'relative',
		flexDirection: 'column',
		alignItems: 'flex-end',
		textAlign: 'right',
		width: '200px',
		'&::after': {
			backgroundColor: theme.palette.background.paper,
			content: '""',
			position: 'absolute',
			width: '25px',
			height: '25px',
			transform: 'rotate(45deg)',
			top: 'calc(50% - 7.5px)',
			right: '-7.5px'
		},
		'&>  span': {
			backgroundColor: theme.palette.background.paper,
			border: '2px solid',
			borderColor: theme.palette.primary.main,
			position: 'absolute',
			top: 'calc(50% - 10px)',
			right: '-40px',
			zIndex: 1,
			borderRadius: '100%',
			width: '20px',
			height: '20px'
		}
	},
	card: { backgroundColor: theme.palette.background.paper }
}))

export default function Timeline() {
	const classes = useStyles()
	const { i18n, t } = useTranslation()
	const [
		activeStep,
		setActiveStep
	] = useState(0)

	return (
		<Box className={classes.timelineContainer}>
			{timelineData.map((data, index) => <TimelineItem key={index} info={data} />)}
		</Box>
	)
}

function TimelineItem({ info }) {
	const classes = useStyles()
	return (
		<Box className={classes.timelineItem}>
			<Box className={classes.timelineItemContent}>
				<Card className={classes.card}>
					<CardContent>
						<span className={classes.timelineTitle}>{info.category.tag}</span>
						<Typography>{info.text}</Typography>
					</CardContent>
				</Card>
				<span className='circle' />
			</Box>
		</Box>
	)
}

const timelineData = [
	{
		text: 'Started working on the app-ideas repository',
		date: '2015-2016',
		category: {
			tag: 'app-ideas',
			color: '#FFDB14'
		},
		link: {
			url: 'https://github.com/florinpop17/app-ideas',
			text: 'Check it out on GitHub'
		}
	},
	{
		text: 'Started the Weekly Coding Challenge program',
		date: 'March 04 2019',
		category: {
			tag: 'blog',
			color: '#e17b77'
		},
		link: {
			url: 'https://florin-pop/blog/2019/03/weekly-coding-challenge/',
			text: 'Check it out here'
		}
	},
	{
		text: 'Got 1.000 followers on Twitter',
		date: 'March 07 2019',
		category: {
			tag: 'twitter',
			color: '#1DA1F2'
		},
		link: {
			url: 'https://twitter.com/florinpop1705',
			text: 'See profile'
		}
	}
]
