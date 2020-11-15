import React from 'react'

import { AnalyticsLink, Container, Tile } from 'common'
import { Hero, HeroBody } from 'common/hero'
import { HiveIO } from 'icons'

export const ProjectHero = () => (
  <Hero color='light' className='has-nav-spacing' bold>
    <HeroBody>
      <Container>
        <div className='columns'>
          <div className='column is-8-desktop is-offset-2-desktop'>

            <Tile type='ancestor'>
              <Tile type='parent' size={3}>
                <Tile type='child' centered>
                  <HiveIO style={{ marginTop: 12 }} />
                </Tile>
              </Tile>

              <Tile type='parent' vertical>
                <Tile type='child'>
                  <article className='content'>
                    <h1 className='title'>Hive<sup>io</sup></h1>
                    <h2 className='subtitle is-5'>From startup to enterprise...</h2>
                    <p>FnA Labs has evolved enterprise architecture by giving you the Hive<sup>io</sup> framework. Our product works for fresh startups and large-scale corporations alike. It is <strong>reactive</strong> and <strong>cloud-native</strong>, giving you more time to spend solving your business challenges and less time on your infrastructure.</p>
                  </article>
                </Tile>

                <Tile type='child'>
                  <AnalyticsLink to='https://hiveframework.io' target='_blank' rel='noopener noreferrer' className='button is-link'>Learn More</AnalyticsLink>
                </Tile>
              </Tile>
            </Tile>

          </div>
        </div>
      </Container>
    </HeroBody>
  </Hero>
)
