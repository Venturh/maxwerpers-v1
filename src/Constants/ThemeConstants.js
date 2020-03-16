import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const light = createMuiTheme({
	status: {
		danger: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
	},
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
	gradients: {
		danger: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
	},
	typography: {
		fontFamily: "'Montserrat', sans-serif",
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
	status: {
		danger: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
	},
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
