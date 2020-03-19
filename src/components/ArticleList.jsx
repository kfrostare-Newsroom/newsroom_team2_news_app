import React, { Component } from "react";
import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import axios from "axios";

class ArticleList extends Component {
  state = {
    articleList: []
  };

  componentDidMount() {
    axios.get("/articles").then(response => {
      this.setState({
        articleList: response.data.articles
      });
    });
  }
  render() {
    let articleDisplay;
    if (this.state.articleList !== []) {
      articleDisplay = this.state.articleList.map(article => {
        return (
          <>
            <Grommet full theme={grommet}>
              <Box
                direction="row"
                border={{ color: "brand", size: "large" }}
                pad="medium"
                margin="medium"
              >
                <div className="article-headline">
                  <h2>{article.headline}</h2>

                  <div className="article-teaser">
                    <p>{article.teaser}</p>
                  </div>
                </div>
              </Box>
            </Grommet>
          </>
        );
      });
    }
    return (
      <>
        {articleDisplay}
      </>
    );
  }
}

export default ArticleList;
