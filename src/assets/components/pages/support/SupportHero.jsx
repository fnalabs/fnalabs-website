import React from 'react'

import { Container, Tile } from '../../common'
import { Hero, HeroBody } from '../../common/hero'

export const SupportHero = () => (
  <Hero color='light' className='has-nav-spacing' bold>
    <HeroBody>
      <Container>
        <div className='columns'>
          <div className='column is-8-desktop is-offset-2-desktop'>

            <Tile type='ancestor'>
              <Tile type='parent' size={6}>
                <Tile type='child' className='has-text-right' centeredMobile>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='svg-hero'><path fill='#00008b' d='M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm173.696 119.559l-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.396 218.396 0 0 1 45.255 45.255zM256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96zM127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.372 218.372 0 0 1 45.255-45.255zM82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.396 218.396 0 0 1-45.255-45.255zm302.137 45.255l-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.403 218.403 0 0 1-45.255 45.255z' /></svg>
                </Tile>
              </Tile>

              <Tile type='parent' vertical>
                <Tile type='child' centeredMobile>
                  <article className='content'>
                    <h1 className='title'>Support</h1>
                    <h3 className='subtitle'>How can we<br />help you?</h3>
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
