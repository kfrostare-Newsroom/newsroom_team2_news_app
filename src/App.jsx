import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleList from "./components/ArticleList";
import { Grommet, Main, Heading, Button } from "grommet";
import { grommet } from "grommet/themes";
import SpecificArticle from "./components/SpecificArticle";
import PaymentForm from "./components/PaymentForm";
import { Elements } from "react-stripe-elements";
import LoginForm from "./components/LoginForm";
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton";
import axios from "axios"

class App extends Component {
  componentDidMount() {
  navigator.geolocation.getCurrentPosition( async pos => {
  const currentSession = await axios.post('http://localhost:3000/api/sessions', { location: pos.coords })
  this.props.dispatch({ type: 'SET_CURRENT_SESSION', payload: currentSession.data })
     })
    }
  render() {
    return (
      <Grommet full theme={grommet}>
        <Main fill align="center" justify="center">
          <Heading>Urban Living</Heading>
          <Heading margin="small" level="4" id="welcome-message"> {`${edition} Edition`}  </Heading>
          A source of work / life inspiration for young professionals.
          {this.props.state.showLogoutButton && <LogoutButton />}
          {this.props.state.showLoginButton && <LoginButton />}
          {this.props.state.showLoginForm && <LoginForm />}
          {this.props.state.showLoginForm && <LoginForm />}
          {this.props.state.successMessage && (
            <Heading level="2" id="success-message">
              {this.props.state.successMessage}
            </Heading>
          )}
          {this.props.state.successMessage && (
            <Button
              label="To The News!"
              onClick={() =>
                this.props.dispatch({
                  type: "TO_THE_NEWS",
                  payload: { successMessage: false }
                })
              }
            />
          )}
          {this.props.state.showArticleList && <ArticleList />}
          {this.props.state.readArticle && <SpecificArticle />}
          {this.props.state.showPaymentForm && (
            <Elements>
              <PaymentForm />
            </Elements>
          )}
        </Main>
      </Grommet>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    edition: state.session.edition
  };
};

export default connect(mapStateToProps)(App);
