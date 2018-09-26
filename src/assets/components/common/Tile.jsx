import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Tile extends Component {
  static propTypes = {
    centered: PropTypes.bool,
    centeredMobile: PropTypes.bool,
    className: PropTypes.string,
    content: PropTypes.bool,
    size: PropTypes.number,
    type: PropTypes.oneOf(['ancestor', 'parent', 'child']),
    vertical: PropTypes.bool
  }

  render () {
    const {
      centered, centeredMobile, children, className, content, size, type, vertical
    } = this.props

    // determine desired classes to render
    let classes = 'tile'
    if (type) classes += ` is-${type}`
    if (size && size > 0 && size <= 12) classes += ` is-${size}`
    if (vertical) classes += ' is-vertical'
    if (centered) classes += ' has-text-centered'
    if (centeredMobile) classes += ' has-text-centered-mobile'
    if (className) classes += ` ${className}`
    if (content) classes += ' content'

    return (
      <div className={classes}>{children}</div>
    )
  }
}
