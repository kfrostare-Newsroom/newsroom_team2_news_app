import React, { Component } from "react";
import { connect } from "react-redux";

class SpecificArticle extends Component {
  render() { 
    return (  );
  }
}

const mapStateToProps = state => {
    return {
      showArticle: state.showArticle
    };
  };
 
export default connect(mapStateToProps)(SpecificArticle);