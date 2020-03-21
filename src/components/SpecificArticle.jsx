import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Grommet, Button } from "grommet";
import { grommet } from "grommet/themes";

class SpecificArticle extends Component {
  render() {
    let specArticle;
    if (this.props.readArticle !== undefined) {
      specArticle = this.props.readArticle;
    }
    return (
      <Grommet full theme={grommet}>
        <Box>
          <h2>{specArticle.title}</h2>
          <p>{specArticle.content}</p>
        </Box>
        <Button 
          type="submit"
          primary
          label="Back"
          onClick={() => this.props.dispatch({type: "HIDE_ARTICLE"})}>
        </Button>
      </Grommet>
    );
  }
}

const mapStateToProps = state => {
  return {
    readArticle: state.readArticle
  };
};

export default connect(mapStateToProps)(SpecificArticle);
