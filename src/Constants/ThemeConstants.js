import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const light = createMuiTheme({
	palette: {
		background: {
			default: '#a7ffeb'
		},
		primary: {
			main: '#a7ffeb'
		},
		secondary: {
			main: '#80deea'
		},
		type: 'light'
	},
	typography: {
		fontFamily: "'Montserrat', sans-serif",
		textTransform: 'none',
		useNextVariants: true
	}
})

const dark = createMuiTheme({
	palette: {
		primary: {
			main: '#262833'
		},
		secondary: {
			main: '#4ACFAC'
		},
		type: 'dark',
		background: {
			//default: '#757575'
		}
	},
	typography: {
		fontFamily: "'Montserrat', sans-serif",
		textTransform: 'none',
		useNextVariants: true
	}
})

export const themeConstants = {
	THEME_LIGHT: responsiveFontSizes(light),
	THEME_DARK: responsiveFontSizes(dark)
}
