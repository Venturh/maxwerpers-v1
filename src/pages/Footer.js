import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CopyrightIcon from '@material-ui/icons/Copyright'

export default function Footer() {
	const useStyles = makeStyles((theme) => ({
		page: {
			height: '10vh',
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		}
	}))
	const classes = useStyles()
	return (
		<Box className={classes.page}>
			<Box display='flex'>
				<CopyrightIcon fontSize='small' />
				<Typography variant='subtitle2'>2020 Max Werpers</Typography>
			</Box>
		</Box>
	)
}
