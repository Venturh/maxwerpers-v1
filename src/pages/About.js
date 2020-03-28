import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
	page: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			height: '100vh'
		}
	}
}))

export default function About() {
	const classes = useStyles()
	const { t } = useTranslation()

	return (
		<Box id='about' className={classes.page}>
			<Typography variant='h3' className={classes.title}>
				{t('about')}
			</Typography>
		</Box>
	)
}
