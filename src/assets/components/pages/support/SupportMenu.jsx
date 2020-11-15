import React from 'react'

import { AnalyticsLink, Container } from 'common'

export const SupportMenu = () => (
  <section className='section'>
    <Container>
      <div className='columns'>
        <div className='column is-10-desktop is-offset-1-desktop'>
          <h2 className='title'>Support Links</h2>

          <div className='columns'>
            <div className='column' />
            <div className='column is-narrow'>

              <h3 className='subtitle is-4'>Featured Projects</h3>
              <nav className='menu'>

                <p className='menu-label'>Hive<sup>io</sup> Framework</p>
                <ul className='menu-list'>
                  <li><AnalyticsLink to='https://hiveframework.io'>Homepage</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://hiveframework.io/overview'>Overview</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://hiveframework.io/start'>Get Started</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://hiveframework.io/documentation'>Documentation</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/hive-io'>Github</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/hive-io/issues'>Issues</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://www.npmjs.com/package/hive-io'>Class Library (NPM)</AnalyticsLink></li>
                  <li>
                    <a className='menu-label-sub'>Docker images</a>
                    <ul>
                      <li><AnalyticsLink to='https://hub.docker.com/r/fnalabs/hive-base-js/'>Base</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://hub.docker.com/r/fnalabs/hive-producer-js/'>Producer</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://hub.docker.com/r/fnalabs/hive-consumer-js/'>Consumer</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://hub.docker.com/r/fnalabs/hive-stream-processor-js/'>Stream Processor</AnalyticsLink></li>
                    </ul>
                  </li>
                </ul>

                <p className='menu-label'>Model(JSON)<sup>js</sup></p>
                <ul className='menu-list'>
                  <li><AnalyticsLink to='https://fnalabs.github.io/model-json-js/'>Documentation</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://www.npmjs.com/package/model-json-js'>NPM</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/lib-js/tree/master/packages/model-json-js'>Github</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/lib-js/issues'>Issues</AnalyticsLink></li>
                </ul>

                <p className='menu-label'>Schema(JSON)<sup>js</sup></p>
                <ul className='menu-list'>
                  <li><AnalyticsLink to='https://fnalabs.github.io/schema-json-js/'>Documentation</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://www.npmjs.com/package/schema-json-js'>NPM</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/lib-js/tree/master/packages/schema-json-js'>Github</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/lib-js/issues'>Issues</AnalyticsLink></li>
                </ul>
              </nav>
            </div>

            <div className='column' />
            <div className='column is-narrow'>

              <h3 className='subtitle is-4'>More Projects</h3>
              <nav className='menu'>

                <p className='menu-label'>test-automation</p>
                <ul className='menu-list'>
                  <li><AnalyticsLink to='https://fnalabs.github.io/test-automation/'>Documentation</AnalyticsLink></li>
                  <li>
                    <a className='menu-label-sub'>Class Library</a>
                    <ul>
                      <li><AnalyticsLink to='https://www.npmjs.com/package/test-automation'>NPM</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/test-automation'>Github</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/test-automation/issues'>Issues</AnalyticsLink></li>
                    </ul>
                  </li>
                  <li>
                    <a className='menu-label-sub'>Test image</a>
                    <ul>
                      <li><AnalyticsLink to='https://github.com/fnalabs/test-automation-starter'>Starter Kit</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/test-automation-starter/issues'>Issues</AnalyticsLink></li>
                    </ul>
                  </li>
                </ul>

                <p className='menu-label'>Starter Kits</p>
                <ul className='menu-list'>
                  <li><AnalyticsLink to='https://github.com/fnalabs/starter-npm-js'>NPM package</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/starter-react-js'>React SSR PWA</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/starter-fastify-js'>Fastify service</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/starter-koa2-js'>Koa2 service</AnalyticsLink></li>
                </ul>
              </nav>

              <h3 className='subtitle is-4 has-nav-spacing'>Contact By Email</h3>
              <nav className='menu'>
                <ul className='menu-list'>
                  <li><AnalyticsLink to='mailto:support@fnalabs.com'>Support</AnalyticsLink></li>
                  <li><AnalyticsLink to='mailto:contact@fnalabs.com'>General</AnalyticsLink></li>
                </ul>
              </nav>
            </div>
            <div className='column' />
          </div>
        </div>
      </div>
    </Container>
  </section>
)
