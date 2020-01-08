import React from 'react'

import { Container, Tile } from 'common'
import { Hero, HeroBody } from 'common/hero'
import { Support } from 'icons'

export const SupportHero = () => (
  <Hero color='light' className='has-nav-spacing' bold>
    <HeroBody>
      <Container>
        <div className='columns'>
          <div className='column is-8-desktop is-offset-2-desktop'>

            <Tile type='ancestor'>
              <Tile type='parent' size={6}>
                <Tile type='child' className='has-text-right' centeredMobile>
                  <Support />
                </Tile>
              </Tile>

              <Tile type='parent' vertical>
                <Tile type='child' centeredMobile>
                  <article className='content'>
                    <h1 className='title'>Support</h1>
                    <p className='subtitle'>How can we help you?</p>
                  </article>
                </Tile>
              </Tile>
            </Tile>

          </div>
        </div>
      </Container>
    </HeroBody>
  </Hero>
)
