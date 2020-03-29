import React, { useState, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './translations/i18n'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Navbar from './pages/Navbar'
import Welcome from './pages/Welcome'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { deepPurple, teal, grey } from '@material-ui/core/colors'
import { Toolbar } from '@material-ui/core'

export default function App() {
	const initialTheme = () => String(localStorage.getItem('theme') || 'dark')

	const [
		themeType,
		setthemeType
	] = useState(initialTheme)

	useEffect(() => localStorage.setItem('theme', themeType), [])

	let theme = createMuiTheme({
		gradient: {
			start: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
		},
		palette: {
			primary: {
				main:

						themeType === 'light' ? deepPurple['700'] :
						deepPurple[500]
			},
			secondary: {
				main:

						themeType === 'light' ? teal['A400'] :
						teal['A200']
			},
			background: {
				default:

						themeType === 'light' ? grey['100'] :
						grey['900'],
				paper:

						themeType === 'light' ? '#ffffff' :
						'#3c3c3c'
			},
			type: themeType
		},
		typography: {
			fontFamily: "'Roboto', sans-serif",
			textTransform: 'none',
			useNextVariants: true
		}
	})

	const themeToggle = () => {
		if (themeType === 'dark') {
			setthemeType('light')
			localStorage.setItem('theme', 'light')
		} else {
			setthemeType('dark')
			localStorage.setItem('theme', 'dark')
		}
	}
	theme = responsiveFontSizes(theme)
	return (
		<div style={{ margin: 0 }}>
			<I18nextProvider i18n={i18n}>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<Navbar themeToggle={themeToggle} themeType={themeType} />
					<Toolbar id='home' />
					<Welcome />
					<Projects />
					<Experience />
					<Contact />
				</MuiThemeProvider>
			</I18nextProvider>
		</div>
	)
}
