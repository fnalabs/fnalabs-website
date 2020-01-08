import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MediaContent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }

  render () {
    const { title, subtitle } = this.props

    return (
      <div className='media-content'>
        <h2 className='title is-4'>{title}</h2>
        <h3 className='subtitle is-6'>{subtitle}</h3>
      </div>
    )
  }
}
