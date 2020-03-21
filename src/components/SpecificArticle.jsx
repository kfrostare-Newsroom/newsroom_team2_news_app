import React, { Component } from "react";
import { connect } from "react-redux";

class SpecificArticle extends Component {
  render() {
    let specArticle;
    if (this.props.readArticle !== undefined) {
      specArticle = this.props.readArticle;
    }
    return (
      <>
        <h2>{specArticle.title}</h2>
        <p>{specArticle.content}</p>
        <button onClick={() => this.props.dispatch({type: "HIDE_ARTICLE"})}>Back</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    readArticle: state.readArticle
  };
};

export default connect(mapStateToProps)(SpecificArticle);
