import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MediaImage extends Component {
  static propTypes = {
    imgAlt: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  }

  render () {
    const { imgAlt, imgSrc } = this.props

    return (
      <div className='media-left'>
        <figure className='image is-48x48'>
          <img src={imgSrc} alt={imgAlt} />
        </figure>
      </div>
    )
  }
}
