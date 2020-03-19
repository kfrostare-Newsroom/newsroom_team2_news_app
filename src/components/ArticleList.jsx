import React, { Component } from "react"

class ArticleList extends Component {
  
  render() { 
    return ( 
      <>
      <div className="article-headline">
        <h2>Article Headline</h2>
        <div className="article-teaser">
          <p>Article teaser...</p>
        </div>
      </div>
      </>
     );
  }
}
 
export default ArticleList;