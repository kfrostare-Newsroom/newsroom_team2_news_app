import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "grommet";

class LoginButton extends Component {
  clickHandler = () => {
    this.props.dispatch({
      type: "SHOW_LOGIN_FORM",
      payload: {
        showLoginForm: true,
        showArticleList: false,
        showLoginButton: false
      }
    });
  };

  render() {
    return <Button id="login-button" alignSelf="start" margin="small" onClick={this.clickHandler} color="#7C8EA6" label="Login" />;
  }
}

export default connect()(LoginButton);
