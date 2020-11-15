import React from 'react'

import { AnalyticsLink, Container, Tile } from 'common'

export const ProjectTiles = () => (
  <section className='section'>
    <Container>
      <div className='columns'>
        <div className='column is-10-desktop is-offset-1-desktop'>
          <h2 className='title'>More Projects</h2>

          <Tile type='ancestor' vertical>
            <Tile type='parent' className='is-paddingless'>
              <Tile type='parent'>
                <Tile type='child' className='box' vertical>
                  <Tile type='child'>
                    <article className='content'>
                      <h3>Model(JSON)<sup>js</sup></h3>
                      <p>A Model class designed to serialize and transfer structured data within the services/apps you build or across networks and uses schema validation with Schema(JSON)<sup>js</sup>.</p>
                    </article>
                  </Tile>

                  <Tile type='child'>
                    <AnalyticsLink to='https://fnalabs.github.io/model-json-js/' target='_blank' rel='noopener noreferrer' className='button is-link'>Learn More</AnalyticsLink>
                  </Tile>
                </Tile>
              </Tile>

              <Tile type='parent'>
                <Tile type='child' className='box' vertical>
                  <Tile type='child'>
                    <article className='content'>
                      <h3>Schema(JSON)<sup>js</sup></h3>
                      <p>A Schema class designed to validate structured data based on the JSON Schema specification. It represents the schemas as immutable objects with the flexibility of making partial schema validations via Closures and Thunks.</p>
                    </article>
                  </Tile>

                  <Tile type='child'>
                    <AnalyticsLink to='https://fnalabs.github.io/schema-json-js/' target='_blank' rel='noopener noreferrer' className='button is-link'>Learn More</AnalyticsLink>
                  </Tile>
                </Tile>
              </Tile>
            </Tile>

            <Tile type='parent' className='is-paddingless'>
              <Tile type='parent'>
                <Tile type='child' className='box' vertical>
                  <Tile type='child'>
                    <article className='content'>
                      <h3>test-automation</h3>
                      <p>A reusable automated browser test framework atop the popular Angular Protractor. If used simultaneously with our <a href='https://github.com/fnalabs/test-automation-starter'>starter kit</a>, which is built on Docker, you are able to automatically run tests in a containerized environment.</p>
                    </article>
                  </Tile>

                  <Tile type='child'>
                    <AnalyticsLink to='https://fnalabs.github.io/test-automation/' target='_blank' rel='noopener noreferrer' className='button is-link'>Learn More</AnalyticsLink>
                  </Tile>
                </Tile>
              </Tile>

              <Tile type='parent'>
                <Tile type='child' className='box' vertical>
                  <Tile type='child'>
                    <article className='content'>
                      <h3>Starter Kits</h3>
                      <p>Over the course of our open source development journey, we've identified common underlying structures in the projects we've built. We decided to abstract those structures as starter kits:</p>
                      <ul>
                        <li><AnalyticsLink to='https://github.com/fnalabs/starter-npm-js'>NPM package</AnalyticsLink></li>
                        <li><AnalyticsLink to='https://github.com/fnalabs/starter-react-js'>React SSR PWA</AnalyticsLink></li>
                        <li><AnalyticsLink to='https://github.com/fnalabs/starter-fastify-js'>Fastify service</AnalyticsLink></li>
                        <li><AnalyticsLink to='https://github.com/fnalabs/starter-koa2-js'>Koa2 service</AnalyticsLink></li>
                      </ul>
                    </article>
                  </Tile>
                </Tile>
              </Tile>
            </Tile>
          </Tile>
        </div>
      </div>
    </Container>
  </section>
)
