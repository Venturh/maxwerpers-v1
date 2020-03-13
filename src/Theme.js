import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { themeAction } from './actions/ThemeAction'
import { BrowserRouter as Router, Switch, Route, withRouter, Link } from 'react-router-dom'
import Start from './components/Start'
import Resume from './components/Resume'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/styles'
import Navigation from './components/Navigation'
import { themeConstants } from './constants/ThemeConstants'

const styles = {
	root: {}
}

class Theme extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tabposition: 0,
			theme: themeConstants.THEME_DARK
		}
		this.themeToggle = this.themeToggle.bind(this)
	}

	componentWillMount() {
		this.props.changeTheme('light')
	}

	themeToggle() {

			this.state.theme === themeConstants.THEME_DARK ? this.setState({
				theme: themeConstants.THEME_LIGHT
			}) :
			this.setState({ theme: themeConstants.THEME_DARK })
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<MuiThemeProvider theme={this.state.theme}>
					<CssBaseline />
					<Navigation themeToggle={this.themeToggle} />
					<Start />
					<Resume />
				</MuiThemeProvider>
			</div>
		)
	}
}

function mapState(state) {
	const { theme } = state
	return { theme }
}

const actionCreators = {
	changeTheme: themeAction.changeTheme
}

export default compose(withStyles(styles), withRouter, connect(mapState, actionCreators))(Theme)
