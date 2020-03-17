import React, { useState } from 'react'
import {
	Box,
	Button,
	IconButton,
	Toolbar,
	AppBar,
	Menu,
	MenuItem,
	Slide,
	Typography,
	Tabs,
	Tab,
	Grid,
	Container
} from '@material-ui/core'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { makeStyles } from '@material-ui/styles'
import { HashLink } from 'react-router-hash-link'
import compose from 'recompose/compose'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { themeAction } from '../../actions/ThemeAction'
import { useTranslation } from 'react-i18next'
import Bounce from 'react-reveal/Bounce'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import LanguageIcon from '@material-ui/icons/Language'
import TranslateIcon from '@material-ui/icons/TranslateRounded'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

const useStyles = makeStyles((theme) => ({
	root: {},
	nav: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	tabItems: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	tabs: {},
	tab: {
		display: 'flex',
		justifyContent: 'space-between',
		minWidth: 1,
		fontSize: '14px',
		'&:focus': {
			outline: 'none'
		},
		'&:hover': {
			color: 'inherit',
			textDecoration: 'inherit'
		}
	},
	indicator: {
		'& .indicator': {
			background: 'black'
		},
		'& .flexContainer': {
			flexDirection: 'row-reverse'
		}
	}
}))

function Navigation({ themeToggle }) {
	const classes = useStyles()
	const [
		tabposition,
		setTabposition
	] = useState(0)
	const { t, i18n } = useTranslation()
	const ForwardNavLink = React.forwardRef((props, ref) => <HashLink {...props} innerRef={ref} />)

	const handleTabChange = (e, tabposition) => {
		setTabposition(tabposition)
	}

	return (
		<Box className={classes.nav}>
			<Button>_maxwerpers</Button>
			<Box className={classes.tabItems}>
				<Tabs
					className={classes.tabItems}
					TabIndicatorProps={{ style: {} }}
					value={tabposition}
					onChange={handleTabChange}
				>
					<Tab
						disableRipple
						className={classes.tab}
						label={t('Über')}
						component={ForwardNavLink}
						smooth
						to='/#start'
					/>
					<Tab
						disableRipple
						className={classes.tab}
						label={t('Erfahrungen')}
						component={ForwardNavLink}
						smooth
						to='/#resume'
					/>
					<Tab
						disableRipple
						className={classes.tab}
						label={t('Projekte')}
						component={ForwardNavLink}
						smooth
						to='/#lol'
					/>
					<Tab
						disableRipple
						className={classes.tab}
						label={t('Kontakt')}
						component={ForwardNavLink}
						to='/#kontakt'
					/>
				</Tabs>
				<Language />
				<ToggleTheme themeToggle={themeToggle} />
			</Box>
		</Box>
	)
}

function Language() {
	const [
		anchorEl,
		setAnchorEl
	] = React.useState(null)
	const { t, i18n } = useTranslation()

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = (language) => {
		setAnchorEl(null)
		console.log(i18n)
		i18n.changeLanguage(language)
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

const ToggleTheme = ({ themeToggle }) => {
	const classes = useStyles()
	return (
		<Button
			startIcon={<BrightnessHighIcon />}
			className={classes.nightmodetoggle}
			onClick={themeToggle}
		/>
	)
}

export default compose(withRouter)(Navigation)
