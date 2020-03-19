import React, { Component } from "react"
import { Box, Grommet } from 'grommet';
import { grommet } from "grommet/themes";
import axios from "axios";


class ArticleList extends Component {
  state={
    articleIndex: []
  };
  
  componentDidMount() {
    axios.get("/articles").then(response => {
      this.setState({
      articleIndex: response.data.articles
      });
      debugger
    });
  } 
  render() { 
    let articleDisplay;
    if (this.state.articleIndex !== []) {
      articleDisplay = this.state.articleIndex.map(articles => {
        return (
          <>
            {articles.headline} {articles.teaser}
          </>
        );
        debugger
      })
    }
    return ( 
      <>
      <Grommet full theme={grommet}>
       <Box
          direction="row"
          border={{ color: 'brand', size: 'large' }}
          pad="medium"
          margin="medium">
          <div className="article-headline">
            <h2>yo</h2>
        
          <div className="article-teaser">
            <p>yo</p>
          </div>
          </div>
        </Box>
      </Grommet>
      </>
     );
  }
}
 
export default ArticleList;