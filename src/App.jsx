import React, { Component } from "react";
import { connect, } from "react-redux";
import ArticleList from "./components/ArticleList";
import { Grommet, Main, Heading, Button } from "grommet";
import { grommet } from "grommet/themes";
import SpecificArticle from "./components/SpecificArticle";
import PaymentForm from "./components/PaymentForm";
import { Elements } from "react-stripe-elements";
import LoginButton from "./components/LoginButton";
import LoginForm from "./components/LoginForm";


class App extends Component {
  render() {
    return (
      <Grommet full theme={grommet}>
        <Main fill align="center" justify="center">
          <Heading>Urban Living</Heading>A source of work / life inspiration for
          young professionals.
          <LoginButton />
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
    state: state
  };
};

export default connect(mapStateToProps)(App);
