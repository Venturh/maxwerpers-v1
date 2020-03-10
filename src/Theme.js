import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { themeAction } from "./actions/ThemeAction"
import {themeConstants} from "./Constants/ThemeConstants"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from "./Components/Pages/Home"

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themeConstants.THEME_DARK,
    };
  }

  componentDidMount(){
      this.props.changeTheme("dark")
  }

  render() {
    return (
        <div>
            <MuiThemeProvider theme={this.props.theme.theme}>
                <CssBaseline />
                <Router>
                <Switch>
                <Route path="/Home" component={Home}/>
                <Route path="/" component={Home}/>
                </Switch>
            </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}


function mapState(state) {
    const { theme } = state;
    return { theme  };
  }

const actionCreators = {
changeTheme: themeAction.changeTheme
};

export default connect(mapState, actionCreators)(Theme);
