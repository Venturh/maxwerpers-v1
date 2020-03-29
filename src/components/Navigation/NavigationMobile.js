import React, { useState } from 'react'
import {
	Button,
	Drawer,
	Divider,
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Switch
} from '@material-ui/core'
import LanguageSwitch from '../LanguageSwitch'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'
import BurstModeIcon from '@material-ui/icons/BurstMode'
import SchoolIcon from '@material-ui/icons/School'
import RecentActorsIcon from '@material-ui/icons/RecentActors'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { HashLink } from 'react-router-hash-link'

const useStyles = makeStyles((theme) => ({
	divider: {
		backgroundColor: theme.palette.primary.main
	},
	paper: { top: '7vh', backgroundColor: theme.palette.background.default }
}))

export default function NavigationMobile(props) {
	const classes = useStyles()
	const { t } = useTranslation()
	const [
		right,
		setRight
	] = useState(false)

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}
		setRight(open)
	}
	const ForwardNavLink = React.forwardRef((props, ref) => <HashLink {...props} innerRef={ref} />)

	const [
		checked,
		setChecked
	] = useState(true)

	const handleToggleSwitch = (event) => {
		setChecked(event.target.checked)
		props.themeToggle()
	}

	return (
		<Box display='flex' justifyContent='space-between'>
			<Button component={ForwardNavLink} smooth to='#home'>
				_maxwerpers
			</Button>
			<Box display='flex' justifyContent='flex-end'>
				<IconButton label='Sprache' onClick={toggleDrawer(true)}>
					<MenuIcon />
				</IconButton>
				<Drawer
					classes={{ paper: classes.paper }}
					anchor='top'
					open={right}
					onClose={toggleDrawer(false)}
				>
					<List component='nav' aria-label='main mailbox folders' onClick={toggleDrawer(false)}>
						{[
							'home',
							'projects',
							'experience',
							'about',
							'contact'
						].map((text, index) => (
							<ListItem button key={text} component={ForwardNavLink} smooth to={'#' + text}>
								<ListItemIcon>
									{
										index === 0 ? <HomeIcon /> :
										index === 1 ? <BurstModeIcon /> :
										index === 2 ? <SchoolIcon /> :
										index === 3 ? <RecentActorsIcon /> :
										<InfoIcon />}
								</ListItemIcon>
								<ListItemText primary={t(text)} />
							</ListItem>
						))}
						<Divider className={classes.divider} />
					</List>
					<List>
						<ListItem>
							<ListItemIcon>
								<Brightness4Icon />
							</ListItemIcon>
							<Switch
								inputProps={{ 'aria-label': 'primary checkbox' }}
								onChange={handleToggleSwitch}
								checked={checked}
							/>
						</ListItem>
						<ListItem>
							<LanguageSwitch />
						</ListItem>
					</List>
				</Drawer>
			</Box>
		</Box>
	)
}
