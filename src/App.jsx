import React from "react";
import ArticleList from "./components/ArticleList";
import { Grommet, Main, Heading } from 'grommet';
import { grommet } from "grommet/themes";

const App = () => {
  return (
    <>
    <Grommet full theme={grommet}>
      <Main fill align="center" justify="center">
        <Heading>VAMOS TEAM 2</Heading>
        <ArticleList />
      </Main>
    </Grommet>
    </>
  );
};

export default App;
