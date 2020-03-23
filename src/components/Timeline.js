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
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from 'react-reveal/Zoom'
import { useTranslation } from 'react-i18next'
import './style.css'

const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.up('md')]: {
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
				'& > :first-child': {
					textAlign: 'left',
					alignItems: 'flex-start',
					marginLeft: '20px',
					'&::after': {
						right: 'auto',
						left: '-7.5px'
					},
					'&>  span': {
						left: '-55px'
					},

					'& > :first-child': {
						'& > :first-child': {
							marginLeft: '5px',
							'& > :last-child': {
								display: 'flex',
								justifyContent: 'flex-start'
							}
						}
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
			marginRight: '20px',
			//line
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
			//cirlce
			'&>  span': {
				backgroundColor: theme.palette.primary.light,
				position: 'absolute',
				top: 'calc(50%)',
				right: '-55px',
				zIndex: 1,
				borderRadius: '100%',
				width: '10px',
				height: '10px'
			}
		},
		card: { backgroundColor: theme.palette.background.paper, minWidth: '400px' },
		cardLocation: {
			display: 'flex',
			justifyContent: 'flex-end',
			marginRight: '20px'
		},
		timelineTitle: {}
	},
	[theme.breakpoints.down('sm')]: {
		timelineContainer: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			margin: theme.spacing(3),
			'&::after': {
				backgroundColor: theme.palette.primary.main,
				content: '""',
				position: 'absolute',
				width: '4px',
				height: '90%',
				marginTop: '10%',
				left: 'calc(50% - 2px)'
			}
		},
		timelineItem: {
			width: '100%',
			marginTop: theme.spacing(2),
			zIndex: '1'
		},
		cardLocation: {
			display: 'flex',
			justifyContent: 'flex-start'
		}
	}
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
	const { t, i18n } = useTranslation()
	return (
		<Box className={classes.timelineItem}>
			<Box className={classes.timelineItemContent}>
				<Card className={classes.card}>
					<CardContent style={{ marginRight: '10px' }}>
						<Typography color='primary' style={{ marginTop: 2 }}>
							{info.date}
						</Typography>
						<Box mt={2} mb={2}>
							<Typography className={classes.timelineTitle}>{t(info.title)}</Typography>
							<Typography>{t(info.text)}</Typography>
						</Box>
						<Box mt={2} className={classes.cardLocation}>
							<LocationOnIcon fontSize='small' />
							<Typography variant='body2'>{info.location}</Typography>
						</Box>
					</CardContent>
				</Card>
				<span className='circle' />
			</Box>
		</Box>
	)
}

const timelineData = [
	{
		date: '2016 - 2020',
		title: 'timeline01title',
		text: '',
		location: 'Hochschule Rhein Main - Wiesbaden'
	},
	{
		date: '2015 - 2016',
		title: 'timeline02title',
		text: '',
		location: 'Hochschule Rhein Main - Wiesbaden'
	},
	{
		date: '2014 - 2015',
		title: 'timeline03title',
		text: '',
		location: 'gGis - Hannover'
	},
	{
		date: '2007 - 2014',
		title: 'timeline04title',
		text: '',
		location: 'Wilhelm Busch Gymnasium Stadthagen'
	},
	{
		date: '2006 - 2017',
		title: 'timeline05title',
		text: '',
		location: 'College Saint Joseph - Carpentras'
	}
]
