import React from 'react'
import { Link } from 'react-router-dom'

import { AnalyticsLink, Container, Tile } from 'common'
import { Email, FnALabsInverted, Github, Npm, Twitter } from 'icons'

export const Footer = () => (
  <footer className='footer is-dark'>
    <Container>
      <nav className='columns'>
        <div className='column is-narrow content'>
          <p>Copyright &copy; 2020 FnA Labs</p>
          <p className='is-size-7'>Icons from <a href='https://fontawesome.com/' target='_blank' rel='noopener noreferrer'>Font Awesome</a> (<a href='https://fontawesome.com/license' target='_blank' rel='noopener noreferrer'>License</a>)</p>
          <p>
            <a href='https://bulma.io' target='_blank' rel='noopener noreferrer'>
              <img src='https://fnalabs.github.io/fnalabs-assets/assets/made-with-bulma--dark.png' alt='Made with Bulma' width='128' height='24' />
            </a>
          </p>
        </div>

        <div className='column'>
          <div className='columns is-mobile'>
            <div className='column is-6 has-text-right content'>
              <p><strong>Pages</strong></p>
              <p><Link to='/'>Home</Link></p>
              <p><Link to='/projects'>Projects</Link></p>
              <p><Link to='/about'>About</Link></p>
              <p><Link to='/support'>Support</Link></p>
            </div>

            <div className='column is-6 has-text-left content'>
              <p><strong>Policies</strong></p>
              <p><Link to='/cookie'>Cookie</Link></p>
              <p><Link to='/privacy'>Privacy</Link></p>
            </div>
          </div>
        </div>

        <div className='column is-narrow'>
          <div className='level is-mobile'>
            <div className='level-item'>
              <AnalyticsLink to='https://github.com/fnalabs' target='_blank' rel='noopener noreferrer' aria-label='github'>
                <span className='icon'>
                  <Github className='svg-link' />
                </span>
              </AnalyticsLink>
            </div>

            <div className='level-item'>
              <AnalyticsLink to='https://www.npmjs.com/org/fnalabs' target='_blank' rel='noopener noreferrer' aria-label='NPM'>
                <span className='icon'>
                  <Npm className='svg-link' />
                </span>
              </AnalyticsLink>
            </div>

            <div className='level-item'>
              <AnalyticsLink to='https://twitter.com/FnA_Labs' target='_blank' rel='noopener noreferrer' aria-label='twitter'>
                <span className='icon'>
                  <Twitter className='svg-link' />
                </span>
              </AnalyticsLink>
            </div>

            <div className='level-item'>
              <AnalyticsLink to='mailto:contact@fnalabs.com' aria-label='email'>
                <span className='icon'>
                  <Email className='svg-link' />
                </span>
              </AnalyticsLink>
            </div>
          </div>

          <Tile type='ancestor'>
            <Tile type='parent' vertical>
              <Tile type='child' centered><FnALabsInverted /></Tile>
              <Tile type='child' centered content>
                <p>Fn Awesome!</p>
              </Tile>
            </Tile>
          </Tile>
        </div>
      </nav>
    </Container>
  </footer>
)
