import React, { Component } from "react";
import { connect } from "react-redux";

class SpecificArticle extends Component {


  render() { 
    let specArticle;
    if (this.props.readArticle !== []) {
      specArticle = this.props.readArticle
    }
    return ( 
      <div>
        <h2>{specArticle.title}</h2>
        <p>{specArticle.content}</p>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
    return {
      readArticle: state.readArticle
    };
  };

const mapDispatchToProps = dispatch => {

}
 
export default connect(mapStateToProps)(SpecificArticle);