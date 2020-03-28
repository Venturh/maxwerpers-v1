import React from 'react'
import { Box, Button, Menu, MenuItem, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import TranslateIcon from '@material-ui/icons/TranslateRounded'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'
export default function LanguageSwitch() {
	const [
		anchorEl,
		setAnchorEl
	] = React.useState(null)
	const { i18n } = useTranslation()

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = (language) => {
		setAnchorEl(null)
		console.log(i18n.language)
		i18n.changeLanguage(language)
		console.log(i18n.language)
	}

	const handleUnClicked = () => {
		setAnchorEl(null)
	}

	return (
		<Box display='flex'>
			<Button startIcon={<TranslateIcon />} endIcon={<ExpandMoreIcon />} onClick={handleClick}>
				{i18n.language}
			</Button>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleUnClicked}
			>
				<MenuItem onClick={() => handleClose('de')}>
					<Typography color='textSecondary'>Deutsch</Typography>
				</MenuItem>
				<MenuItem onClick={() => handleClose('en')}>
					<Typography color='textSecondary'>English</Typography>
				</MenuItem>
			</Menu>
		</Box>
	)
}
