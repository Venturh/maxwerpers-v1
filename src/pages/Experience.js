import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import Timeline from '../components/Timeline'
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles((theme) => ({
	page: {
		display: 'flex',
		height: '100%',
		flexDirection: 'column',
		[theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing(3),
			marginRight: theme.spacing(3),
			height: '100%'
		}
	},
	title: {
		alignSelf: 'center',
		[theme.breakpoints.up('md')]: {
			marginTop: theme.spacing(10),
			marginBottom: theme.spacing(10)
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(5),
			marginBottom: theme.spacing(5)
		}
	},
	titleUnder: {
		width: '10%',
		height: 10,
		borderRadius: 25,
		backgroundColor: theme.palette.secondary.main,
		margingTop: theme.spacing(2)
	}
}))

function Experience() {
	const classes = useStyles()
	const { t } = useTranslation()

	return (
		<Box id='experience' className={classes.page}>
			<Container className={classes.title}>
				<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
					<Typography variant='h3'>{t('experience')}</Typography>
					<Fade left>
						<div className={classes.titleUnder} />
					</Fade>
				</Box>
			</Container>
			<Box alignItems='flex-start'>
				<Timeline />
			</Box>
		</Box>
	)
}

export default Experience
