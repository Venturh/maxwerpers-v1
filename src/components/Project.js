import React, { useState, useEffect } from 'react'
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import './style.css'

export default function Project(props) {
	const { i18m, t } = useTranslation()

	function openLink(url) {}
	const circle = {
		bgcolor: props.primaryLanguage.color,
		style: {
			borderRadius: '100%',
			width: '8px',
			height: '8px',
			marginRight: '0.5rem',
			marginTop: 5
		}
	}
	return (
		<Card style={{ width: '100%' }}>
			<CardContent>
				<Box display='flex'>
					<Box {...circle} />
					<Typography variant='subtitle2'>{props.primaryLanguage.name}</Typography>
				</Box>

				<Typography noWrap variant='h6'>
					{props.nameWithOwner}
				</Typography>
				<Typography className='repo-description'>{props.description}</Typography>
				<Box mt={2}>
					<Button
						variant='contained'
						color='primary'
						onClick={() => window.open(props.url, '_blank').focus()}
					>
						Link
					</Button>
					<Button
						style={{ marginLeft: '10px' }}
						variant='contained'
						color='secondary'
						onClick={() => window.open(props.homepageUrl, '_blank').focus()}
					>
						Live-Demo
					</Button>
				</Box>
			</CardContent>
		</Card>
	)
}
