import React from "react";
import { connect } from "react-redux";
import ArticleList from "./components/ArticleList";
import { Grommet, Main, Heading, Button } from "grommet";
import { grommet } from "grommet/themes";
import SpecificArticle from "./components/SpecificArticle";
import PaymentForm from "./components/PaymentForm";
import { Elements } from "react-stripe-elements";
import LoginForm from "./components/LoginForm";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useTranslation } from "react-i18next";

const App = props => {
  const { t } = useTranslation();

  return (
    <Grommet full theme={grommet}>
      <Main fill align="center" justify="center">
        <Heading>Urban Living</Heading> {t("tagline")}
        {props.state.showLogoutButton && <LogoutButton />}
        {props.state.showLoginButton && <LoginButton />}
        {props.state.showLoginForm && <LoginForm />}
        {props.state.successMessage && (
          <Heading level="2" id="success-message">
            {props.state.successMessage}
          </Heading>
        )}
        {props.state.successMessage && (
          <Button
            label="To The News!"
            onClick={() =>
              props.dispatch({
                type: "TO_THE_NEWS",
                payload: { successMessage: false }
              })
            }
          />
        )}
        {props.state.showArticleList && <ArticleList />}
        {props.state.readArticle && <SpecificArticle />}
        {props.state.showPaymentForm && (
          <Elements>
            <PaymentForm />
          </Elements>
        )}
      </Main>
    </Grommet>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(App);
