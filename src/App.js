import React, { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/index'
import { I18nextProvider } from 'react-i18next'
import i18n from './translations/i18n'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Navbar from './components/Navigation/Navbar'

import Start from './components/Start'
import Resume from './components/Resume'
import { themeConstants } from './constants/ThemeConstants'
import { Toolbar } from '@material-ui/core'

function App() {
	const store = createStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(thunkMiddleware)
	)
	const [
		theme,
		setTheme
	] = useState(themeConstants.THEME_DARK)

	const themeToggle = () => {

			theme === themeConstants.THEME_DARK ? setTheme(themeConstants.THEME_LIGHT) :
			setTheme(themeConstants.THEME_DARK)
	}

	return (
		<div>
			<Provider store={store}>
				<I18nextProvider i18n={i18n}>
					<MuiThemeProvider theme={theme}>
						<CssBaseline />
						<Navbar themeToggle={themeToggle} />
						<Start id='starting' />
						<Resume />
					</MuiThemeProvider>
				</I18nextProvider>
			</Provider>
		</div>
	)
}

export default App
