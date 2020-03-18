import React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { Box, Hidden, Toolbar, Slide, AppBar } from '@material-ui/core'
import NavigationMobile from '../components/Navigation/NavigationMobile'
import NavigationFull from '../components/Navigation/NavigationFull'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme) => ({}))

export default function ButtonAppBar({ themeToggle }) {
	const trigger = useScrollTrigger()
	const classes = useStyles()
	return (
		<Slide appear={false} direction='down' in={!trigger}>
			<AppBar color='default'>
				<Toolbar>
					<Box width='100%' height='100%' className={classes.root}>
						<Hidden xsDown>
							<NavigationFull themeToggle={themeToggle} />
						</Hidden>
						<Hidden smUp>
							<NavigationMobile />
						</Hidden>
					</Box>
				</Toolbar>
			</AppBar>
		</Slide>
	)
}
