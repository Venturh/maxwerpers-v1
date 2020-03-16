import React from 'react'
import { MenuItem, Box, Hidden } from '@material-ui/core'
import NavigationMobile from './NavigationMobile'
import NavigationFull from './NavigationFull'

export default function AppBarCollapse() {
	return (
		<Box>
			<Hidden xsDown>
				<NavigationFull />
			</Hidden>
			<Hidden smUp>
				<NavigationMobile />
			</Hidden>
		</Box>
	)
}
