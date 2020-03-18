import React, { useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './translations/i18n'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Navbar from './pages/Navbar'
import Welcome from './pages/Welcome'
import Resume from './components/Resume'
import { themeConstants } from './constants/ThemeConstants'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import teal from '@material-ui/core/colors/teal'

function App() {
	const [
		prefersDarkMode,
		setPrefersDarkMode
	] = useState('dark')

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
			type: prefersDarkMode
		},
		typography: {
			fontFamily: "'Roboto', sans-serif",
			textTransform: 'none',
			useNextVariants: true
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 700,
				md: 960,
				lg: 1024,
				xl: 1600
			}
		}
	})

	const [
		theme,
		setTheme
	] = useState(themeConstants.THEME_DARK)

	const themeToggle = () => {

			prefersDarkMode === 'dark' ? setPrefersDarkMode('light') :
			setPrefersDarkMode('dark')
	}

	return (
		<div style={{ margin: 0 }}>
			<I18nextProvider i18n={i18n}>
				<MuiThemeProvider theme={dark}>
					<CssBaseline />
					<Navbar themeToggle={themeToggle} />
					<Welcome />
					<Resume />
				</MuiThemeProvider>
			</I18nextProvider>
		</div>
	)
}

export default App

/**old

import React, { useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './translations/i18n'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Navbar from './pages/Navbar'
import Welcome from './pages/Welcome'
import Resume from './components/Resume'
import { themeConstants } from './constants/ThemeConstants'

function App() {
	const [
		theme,
		setTheme
	] = useState(themeConstants.THEME_DARK)

	const themeToggle = () => {

			theme === themeConstants.THEME_DARK ? setTheme(themeConstants.THEME_LIGHT) :
			setTheme(themeConstants.THEME_DARK)
	}

	return (
		<div style={{ margin: 0 }}>
			<I18nextProvider i18n={i18n}>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<Navbar themeToggle={themeToggle} />
					<Welcome />
					<Resume />
				</MuiThemeProvider>
			</I18nextProvider>
		</div>
	)
}

export default App



 */
