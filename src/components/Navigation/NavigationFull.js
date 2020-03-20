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
import { useTranslation } from 'react-i18next'
import LanguageSwitch from '../LanguageSwitch'

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
	},
	themeToggle: {
		borderRadius: 99
	}
}))

function Navigation(props) {
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
				<Tabs value={tabposition} onChange={handleTabChange}>
					<Tab
						disableRipple
						className={classes.tab}
						label={t('home')}
						component={ForwardNavLink}
						smooth
						to='/#home'
					/>
					<Tab
						disableRipple
						className={classes.tab}
						label={t('projects')}
						component={ForwardNavLink}
						smooth
						to='/#projects'
					/>
					<Tab
						disableRipple
						className={classes.tab}
						label={t('experience')}
						component={ForwardNavLink}
						smooth
						to='/#experience'
					/>
					<Tab
						disableRipple
						className={classes.tab}
						label={t('about')}
						component={ForwardNavLink}
						to='/#about'
					/>
					<Tab
						disableRipple
						className={classes.tab}
						label={t('contact')}
						component={ForwardNavLink}
						to='/#contact'
					/>
				</Tabs>
				<LanguageSwitch />
				<IconButton className={classes.themeToggle} onClick={props.themeToggle}>
					{
						props.themeType === 'dark' ? <BrightnessHighIcon /> :
						<Brightness4Icon />}
				</IconButton>
			</Box>
		</Box>
	)
}

export default Navigation
