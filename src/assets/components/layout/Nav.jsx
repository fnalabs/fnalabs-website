import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

import { Container } from 'common'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      closed: true,
      location: ''
    }
  }

  toggleMenu = () => {
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
    if (this.state.location !== '/cookie' && this.state.location !== '/privacy') {
      navClasses += ' is-bold'
    }

    return (
      <nav className={navClasses} role='navigation' aria-label='main navigation'>
        <Container>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <svg xmlns='http://www.w3.org/2000/svg' height='36' viewBox='0 0 283.747 180'><path fill='#00008b' stroke='#00008b' strokeWidth='5' d='M 37.143495,2.499996 H 158.81128 L 152.1301,36.609173 H 75.58958 L 69.26004,69.19457 h 72.08641 l -6.7984,34.10918 H 62.57886 L 48.16158,177.5 H 3.0343185 Z' /><path fill='#00008b' stroke='#00008b' strokeWidth='5' d='M 232.8253,145.61788 H 162.96596 L 145.61834,177.5 H 99.31894 L 198.24727,2.499996 h 51.57402 L 280.76569,177.5 h -42.9002 z m -52.86336,-31.7649 h 47.00268 L 216.41539,46.455121 Z' /><path fill='#2e8b57' d='M 201.26761,104 A 50.387058,50 0 0 1 150.88055,154 50.387058,50 0 0 1 100.4935,104 50.387058,50 0 0 1 150.88055,53.999997 50.387058,50 0 0 1 201.26761,104 Z' /><path fill='#fff' stroke='#fff' strokeWidth='5' d='m 131.63097,76.79366 h 15.67708 l 12.46875,37.69792 7.32813,-37.69792 h 13.27083 l -10.60937,54.43229 H 154.0893 l -12.46875,-37.69791 -7.29166,37.69791 H 121.0216 Z' /></svg>
            </Link>

            <div className={`navbar-burger${this.state.closed ? '' : ' is-active'}`} onClick={this.toggleMenu}>
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
