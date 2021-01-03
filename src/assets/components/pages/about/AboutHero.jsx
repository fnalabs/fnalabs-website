import React from 'react'

import { Container, Tile } from 'common'
import { Hero, HeroBody } from 'common/hero'
import { Female, Male } from 'icons'

export const AboutHero = () => (
  <Hero color='light' className='has-nav-spacing' bold>
    <HeroBody>
      <Container>
        <div className='columns'>
          <div className='column is-8-desktop is-offset-2-desktop'>

            <Tile type='ancestor'>
              <Tile type='parent' size={3}>
                <Tile type='child' centered>
                  <Female />
                  <Male />
                </Tile>
              </Tile>

              <Tile type='parent' vertical>
                <Tile type='child'>
                  <article className='content'>
                    <h1 className='title'>About</h1>
                    <p>FnA Labs, a research and development company, was founded in 2018 by my husband and me. However, the company has existed within both of us for quite some time. We are a modern mom and pop shop trying to enrich communities in both the physical and digital world. Our goal is to make sure that we can help out one community at a time by providing you products of quality and value. FnA Labs is here to help evolve the industry and give our customers the ultimate quality in products.</p>
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
