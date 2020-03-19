import React, { Component } from "react"
import { Box, Grommet } from 'grommet';
import { grommet } from "grommet/themes";
class ArticleList extends Component {
  
  render() { 
    return ( 
      <>
      <Grommet full theme={grommet}>
       <Box
          direction="row"
          border={{ color: 'brand', size: 'large' }}
          pad="medium"
          margin="medium">
          <div className="article-headline">
            <h2>Article Headline</h2>
        
          <div className="article-teaser">
            <p>Article teaser...</p>
          </div>
          </div>
        </Box>
        <Box
          direction="row"
          border={{ color: 'brand', size: 'large' }}
          pad="medium"
          margin="medium">
          <div className="article-headline">
            <h2>Article Headline</h2>
        
          <div className="article-teaser">
            <p>Article teaser...</p>
          </div>
          </div>
        </Box>
        <Box
          direction="row"
          border={{ color: 'brand', size: 'large' }}
          pad="medium"
          margin="medium">
          <div className="article-headline">
            <h2>Article Headline</h2>
        
          <div className="article-teaser">
            <p>Article teaser...</p>
          </div>
          </div>
        </Box>
        <Box
          direction="row"
          border={{ color: 'brand', size: 'large' }}
          pad="medium"
          margin="medium">
          <div className="article-headline">
            <h2>Article Headline</h2>
        
          <div className="article-teaser">
            <p>Article teaser...</p>
          </div>
          </div>
        </Box>
      </Grommet>

      </>
     );
  }
}
 
export default ArticleList;