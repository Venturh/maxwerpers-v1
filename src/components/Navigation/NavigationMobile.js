import React, { useState } from 'react'
import { Button, Menu, Box, MenuItem, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	buttonCollapse: {
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		},
		margin: '10px',
		boxShadow: 'none'
	}
}))

export default function NavigationMobile() {
	const handleMenuOpen = (event) => {
		setMenuOpen(true)
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = (language) => {
		setAnchorEl(null)
	}
	const { classes } = useStyles()
	const [
		anchorEl,
		setAnchorEl
	] = useState(null)
	const [
		menuOpen,
		setMenuOpen
	] = useState(false)

	return (
		<div>
			<IconButton label='Sprache' onClick={handleMenuOpen}>
				<HomeIcon />
			</IconButton>
			{
				menuOpen ? <Box>
					<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
						<MenuItem onClick={handleMenuClose}>
							<Typography color='textSecondary'>Home</Typography>
						</MenuItem>
						<MenuItem onClick={handleMenuClose}>
							<Typography color='textSecondary'>Resume</Typography>
						</MenuItem>
					</Menu>
				</Box> :
				null}
		</div>
	)
}
