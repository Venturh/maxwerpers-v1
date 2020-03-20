import React, { useState, useEffect } from 'react'
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
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
				<Box display='flex'>
					<FolderIcon fontSize='small' style={{ margin: 6 }} />
					<Typography noWrap variant='h5'>
						{props.nameWithOwner}
					</Typography>
				</Box>
				<Typography variant='h6' className='repo-description'>
					{props.description}
				</Typography>
				<Box mt={2}>
					<Button
						variant='contained'
						color='primary'
						onClick={() => window.open(props.url, '_blank').focus()}
					>
						Link
					</Button>
					{
						props.homepageUrl ? <Button
							style={{ marginLeft: '10px' }}
							variant='contained'
							color='secondary'
							onClick={() => window.open(props.homepageUrl, '_blank').focus()}
						>
							Live-Demo
						</Button> :
						null}
				</Box>
			</CardContent>
		</Card>
	)
}
