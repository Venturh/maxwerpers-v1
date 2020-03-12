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
	Tab
} from '@material-ui/core'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { withStyles, makeStyles } from '@material-ui/styles'
import { HashLink } from 'react-router-hash-link'
import compose from 'recompose/compose'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { themeAction } from '../../actions/ThemeAction'
import { useTranslation } from 'react-i18next'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Bounce from 'react-reveal/Bounce'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

const useStyles = makeStyles({
	nightmodetoggle: {
		borderRadius: 99
	},
	tab: {
		'&:focus': {
			outline: 'none'
		},
		'&:hover': {
			color: 'inherit',
			textDecoration: 'inherit'
		},
		flexGrow: 1
	}
})

function HideOnScroll(props) {
	const { children } = props
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

function Navigation(props) {
	const classes = useStyles()
	const [
		tabposition,
		setTabposition
	] = useState(0)
	const [
		anchorEl,
		setAnchorEl
	] = useState(null)
	const [
		menuOpen,
		setMenuOpen
	] = useState(false)
	const { t, i18n } = useTranslation()
	const trigger = useScrollTrigger()
	const ForwardNavLink = React.forwardRef((props, ref) => <HashLink {...props} innerRef={ref} />)

	const handleTabChange = (e, tabposition) => {
		setTabposition(tabposition)
	}

	const handleMenuOpen = (event) => {
		setMenuOpen(true)
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = (language) => {
		console.log('la' + language)
		try {
			setAnchorEl(null)
			i18n.changeLanguage(language)
		} catch (error) {}
	}

	const handleMenuClickAway = () => {
		setMenuOpen(false)
	}

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			<AppBar position='sticky'>
				<Box display='flex' ml='auto'>
					<Tabs value={tabposition} onChange={handleTabChange}>
						<Tab
							disableRipple
							className={classes.tab}
							label={<Bounce cascade>{t('Über')}</Bounce>}
							component={ForwardNavLink}
							smooth
							to='/#start'
						/>} />
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
							to='/kontakt'
						/>
					</Tabs>

					<Box ml={-1} mr={1}>
						<IconButton
							className={classes.nightmodetoggle}
							onClick={() => {
								props.changeTheme(props.theme.themeType)
							}}
						>
							{
								props.theme.themeType === 'light' ? <Brightness4Icon /> :
								<BrightnessHighIcon />}
						</IconButton>
					</Box>

					<ClickAwayListener onClickAway={handleMenuClickAway}>
						<Box ml={1} mr={2} mt={0.5}>
							<Button label='Sprache' onClick={handleMenuOpen}>
								{' '}
								Sprache
							</Button>
							{
								menuOpen ? <Box>
									<Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
										<MenuItem onClick={() => handleMenuClose('de')}>
											<Typography color='textSecondary'>Deutsch</Typography>
										</MenuItem>
										<MenuItem onClick={() => handleMenuClose('en')}>
											<Typography color='textSecondary'>English</Typography>
										</MenuItem>
									</Menu>
								</Box> :
								null}
						</Box>
					</ClickAwayListener>
				</Box>
			</AppBar>
		</Slide>
	)
}

function mapState(state) {
	const { theme } = state
	return { theme }
}

const actionCreators = {
	changeTheme: themeAction.changeTheme
}

export default compose(withRouter, connect(mapState, actionCreators))(Navigation)
