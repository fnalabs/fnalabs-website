import React from 'react'

import { Container, Tile } from 'common'
import { Hero, HeroBody } from 'common/hero'

export const AboutHero = () => (
  <Hero color='light' className='has-nav-spacing' bold>
    <HeroBody>
      <Container>
        <div className='columns'>
          <div className='column is-8-desktop is-offset-2-desktop'>

            <Tile type='ancestor'>
              <Tile type='parent' size={3}>
                <Tile type='child' centered>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' className='svg-hero'><path fill='#00008b' d='M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z' /></svg>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512' className='svg-hero'><path fill='#00008b' d='M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z' /></svg>
                </Tile>
              </Tile>

              <Tile type='parent' vertical>
                <Tile type='child'>
                  <article className='content'>
                    <h1 className='title'>About</h1>
                    <p>FnA Labs, a research and development company, was founded in 2018 by my husband and I. However, the company has existed within both of us for quite some time. We are a modern mom and pop shop trying to enrich communities in both the physical and digital world. Our goal is to make sure that we are able to help out one community at a time by providing you products of quality and value. Let FnA Labs help you by evolving the industry to give you the very best.</p>
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
