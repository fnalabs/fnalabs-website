import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

import { Container } from 'common'
import { FnALabs } from 'icons'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      closed: true,
      location: ''
    }
  }

  handleToggleMenu = () => {
    this.setState({ closed: !this.state.closed })
  }

  static getDerivedStateFromProps (props, state) {
    if (props.location.pathname !== state.location) {
      return {
        closed: true,
        location: props.location.pathname
      }
    } else return null
  }

  render () {
    let navClasses = 'navbar is-spaced is-transparent is-absolute'
    if (this.state.location !== '/cookie/' && this.state.location !== '/privacy/') {
      navClasses += ' is-bold'
    }

    return (
      <nav className={navClasses} role='navigation' aria-label='main navigation'>
        <Container>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'><FnALabs /></Link>

            <div className={`navbar-burger${this.state.closed ? '' : ' is-active'}`} onClick={this.handleToggleMenu}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className={`navbar-menu${this.state.closed ? '' : ' is-active'}`}>
            <div className='navbar-end'>
              <NavLink to='/projects' activeClassName='is-active' className='navbar-item'>Projects</NavLink>
              <NavLink to='/about' activeClassName='is-active' className='navbar-item'>About</NavLink>
              <NavLink to='/support' activeClassName='is-active' className='navbar-item'>Support</NavLink>
            </div>
          </div>
        </Container>
      </nav>
    )
  }
}

export default withRouter(Nav)
