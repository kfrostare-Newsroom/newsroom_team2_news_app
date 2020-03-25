import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Grommet, Button } from 'grommet'
import { grommet } from 'grommet/themes'

class SpecificArticle extends Component {
  state = {
    premium_user: true
  }

  render () {
    let specArticle
    let showContent
    let trimmedString
    let showPremiumMessage
    let premium_message

    if (this.props.readArticle !== undefined) {
      specArticle = this.props.readArticle

      if (!this.state.premium_user) {
        trimmedString = specArticle.content.substring(0, 200)
        trimmedString = trimmedString.concat('...')
      }

      showContent = this.state.premium_user
        ? specArticle.content
        : trimmedString
    }

    premium_message = (
      <>
        <div className='spec-content'>
          <p>{showContent}</p>
        </div>
        <p>
          This article require a premium membership.{' '}
          <a href='/payment'>Click here to set up a subscription</a>
        </p>
      </>
    )

    showPremiumMessage = this.state.premium_user ? (
      <>
        <div className='spec-content'>
          <p>{showContent}</p>
        </div>
        <div className='created-date'>
          <p>Submitted on {specArticle.created_at}</p>
        </div>
      </>
    ) : (
      premium_message
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
            {showPremiumMessage}
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
