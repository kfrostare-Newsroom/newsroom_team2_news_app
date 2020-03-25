import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Grommet, Button } from 'grommet'
import { grommet } from 'grommet/themes'

class SpecificArticle extends Component {
  state = {
    premium_user: false
  }

  render () {
    let specArticle
    let articleContent
    let showContent
    let trimmedArticle

    if (this.props.readArticle !== undefined) {
      specArticle = this.props.readArticle

      if (!this.state.premium_user) {
        trimmedArticle = specArticle.content.substring(0, 200)
        trimmedArticle = trimmedArticle.concat('...')
      }

      articleContent = this.state.premium_user
        ? specArticle.content
        : trimmedArticle
    }

    showContent = this.state.premium_user ? (
      <>
        <div className='spec-content'>
          <p>{ articleContent }</p>
        </div>
        <div className='created-date'>
          <p>Submitted on {specArticle.created_at}</p>
        </div>
      </>
    ) : (
      <>
      <div className='spec-content'>
        <p>{ articleContent }</p>
      </div>
      <p>
        This article require a premium membership.{' '}
        <a href='/payment'>Click here to set up a subscription</a>
      </p>
    </>
    )

    return (
      <Grommet full theme={grommet}>
        <Box
          direction='row'
          border={{ color: 'brand', size: 'small' }}
          pad='medium'
          margin='medium'
          className='article'
          id={specArticle.id}
        >
          <div>
            <div className='spec-title'>
              <h2>{specArticle.title}</h2>
            </div>
            {showContent}
          </div>
        </Box>
        <Box align='center'>
          <Button
            type='submit'
            label='Back'
            onClick={() => this.props.dispatch({ type: 'HIDE_ARTICLE' })}
          ></Button>
        </Box>
      </Grommet>
    )
  }
}

const mapStateToProps = state => {
  return {
    readArticle: state.readArticle
  }
}

export default connect(mapStateToProps)(SpecificArticle)
