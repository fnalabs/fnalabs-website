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
                      <h3>model(JSON)<sup>js</sup></h3>
                      <p>Our Model JSON Serialization project is a Model class designed to serialize and transfer structured data within the systems you build or across networks. It can represent data Models as either immutable or not and uses schema validation with schema(JSON)<sup>js</sup>.</p>
                    </article>
                  </Tile>

                  <Tile type='child'>
                    <AnalyticsLink to='https://fnalabs.github.io/model-json-js/' target='_blank' className='button is-warning'>Coming Soon</AnalyticsLink>
                  </Tile>
                </Tile>
              </Tile>

              <Tile type='parent'>
                <Tile type='child' className='box' vertical>
                  <Tile type='child'>
                    <article className='content'>
                      <h3>schema(JSON)<sup>js</sup></h3>
                      <p>Our JSON Schema validator is a data structure schema validator based on the JSON Schema specification. It represents the schemas as immutable objects with the flexibility of making partial schema validations via Promises and Thunks for complex data structures.</p>
                    </article>
                  </Tile>

                  <Tile type='child'>
                    <AnalyticsLink to='https://fnalabs.github.io/schema-json-js/' target='_blank' className='button is-link'>Learn More</AnalyticsLink>
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
                      <p>We created a reusable automated browser test framework atop the popular Angular Protractor. If used simultaneously with our <a href='https://github.com/fnalabs/test-automation-starter'>starter kit</a>, it will allow you to run automated browser tests inside a controlled environment. With the use of Docker you are able to automatically have tests run when a file is saved for development or single run containers for CI/CD deployments.</p>
                    </article>
                  </Tile>

                  <Tile type='child'>
                    <AnalyticsLink to='https://fnalabs.github.io/test-automation/' target='_blank' className='button is-link'>Learn More</AnalyticsLink>
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
                        <li><AnalyticsLink to='https://github.com/fnalabs/starter-react-js'>React/Koa2 SSR webapp</AnalyticsLink></li>
                        <li><AnalyticsLink to='https://github.com/fnalabs/starter-koa2-js'>Koa2 REST service</AnalyticsLink></li>
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
