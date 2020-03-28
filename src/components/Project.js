import React from 'react'
import { Box, Card, CardContent, Typography, Button } from '@material-ui/core'
import './style.css'

export default function Project(props) {
	const circle = {
		bgcolor: props.primaryLanguage.color,
		style: {
			borderRadius: '100%',
			width: '8px',
			height: '8px',
			marginRight: '0.25rem',
			marginTop: 6
		}
	}
	return (
		<Card>
			<CardContent>
				<Box display='flex'>
					<Box {...circle} boxShadow={3} />
					<Typography variant='subtitle2'>{props.primaryLanguage.name}</Typography>
				</Box>
				<Box display='flex'>
					<Typography noWrap variant='h5' style={{ fontWeight: 600 }}>
						{props.nameWithOwner}
					</Typography>
				</Box>
				<Typography variant='body1' className='repo-description'>
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
