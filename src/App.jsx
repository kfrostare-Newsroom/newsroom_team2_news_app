import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleList from "./components/ArticleList";
import { Grommet, Main, Heading } from "grommet";
import { grommet } from "grommet/themes";

class App extends Component {
  render() {
    return (
        <Grommet full theme={grommet}>
          <Main fill align="center" justify="center">
            <Heading>VAMOS TEAM 2</Heading>
            <ArticleList />
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
