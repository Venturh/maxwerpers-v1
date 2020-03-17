import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import teal from '@material-ui/core/colors/teal'

const light = createMuiTheme({
	gradient: {
		start: 'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)'
	},
	palette: {
		primary: {
			main: deepPurple[400]
		},
		secondary: {
			main: teal.A700
		},
		type: 'light'
	},
	typography: {
		fontFamily: "'Roboto', sans-serif",
		textTransform: 'none',
		useNextVariants: true
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 800,
			lg: 1024,
			xl: 1600
		}
	}
})

const dark = createMuiTheme({
	gradient: {
		start: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
	},
	palette: {
		primary: {
			main: deepPurple[300]
		},
		secondary: {
			main: teal['A200']
		},
		type: 'dark'
	},
	typography: {
		fontFamily: "'Roboto', sans-serif",
		textTransform: 'none',
		useNextVariants: true
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 800,
			lg: 1024,
			xl: 1600
		}
	}
})

export const themeConstants = {
	THEME_LIGHT: responsiveFontSizes(light),
	THEME_DARK: responsiveFontSizes(dark)
}
