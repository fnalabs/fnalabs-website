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

              <h4 className='subtitle'>Featured Projects</h4>
              <nav className='menu'>

                <p className='menu-label'>Hive<sup>io</sup> Framework</p>
                <ul className='menu-list'>
                  <li><AnalyticsLink to='https://hiveframework.io'>Homepage</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://hiveframework.io/overview'>Overview</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://hiveframework.io/start'>Get Started</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://fnalabs.github.io/hive-js/'>Documentation</AnalyticsLink></li>
                  <li>
                    <a className='menu-label-sub'>Class Library</a>
                    <ul>
                      <li><AnalyticsLink to='https://www.npmjs.com/package/hive-io'>NPM</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/hive-js'>Github</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/hive-js/issues'>Issues</AnalyticsLink></li>
                    </ul>
                  </li>
                  <li>
                    <a className='menu-label-sub'>RESTful Container</a>
                    <ul>
                      <li><AnalyticsLink to='https://hub.docker.com/r/fnalabs/hive-rest-js/'>Docker</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/hive-rest-js'>Github</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/hive-rest-js/issues'>Issues</AnalyticsLink></li>
                    </ul>
                  </li>
                  <li>
                    <a className='menu-label-sub'>Producer Container</a>
                    <ul>
                      <li><AnalyticsLink to='https://hub.docker.com/r/fnalabs/hive-producer-js/'>Docker</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/hive-producer-js'>Github</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/hive-producer-js/issues'>Issues</AnalyticsLink></li>
                    </ul>
                  </li>
                  <li>
                    <a className='menu-label-sub'>Consumer Container</a>
                    <ul>
                      <li><AnalyticsLink to='https://hub.docker.com/r/fnalabs/hive-consumer-js/'>Docker</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/hive-consumer-js'>Github</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/hive-consumer-js/issues'>Issues</AnalyticsLink></li>
                    </ul>
                  </li>
                  <li>
                    <a className='menu-label-sub'>Stream Processor Container</a>
                    <ul>
                      <li><AnalyticsLink to='https://hub.docker.com/r/fnalabs/hive-stream-processor-js/'>Docker</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/hive-stream-processor-js'>Github</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/hive-stream-processor-js/issues'>Issues</AnalyticsLink></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='column' />
            <div className='column is-narrow'>

              <h4 className='subtitle'>More Projects</h4>
              <nav className='menu'>

                <p className='menu-label'>model(JSON)<sup>js</sup></p>
                <ul className='menu-list'>
                  <li><AnalyticsLink to='https://fnalabs.github.io/model-json-js/'>Documentation</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://www.npmjs.com/package/model-json-js'>NPM</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/model-json-js'>Github</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/model-json-js/issues'>Issues</AnalyticsLink></li>
                </ul>

                <p className='menu-label'>schema(JSON)<sup>js</sup></p>
                <ul className='menu-list'>
                  <li><AnalyticsLink to='https://fnalabs.github.io/schema-json-js/'>Documentation</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://www.npmjs.com/package/schema-json-js'>NPM</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/schema-json-js'>Github</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/schema-json-js/issues'>Issues</AnalyticsLink></li>
                </ul>

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
                    <a className='menu-label-sub'>Test Container</a>
                    <ul>
                      <li><AnalyticsLink to='https://github.com/fnalabs/test-automation-starter'>Starter Kit</AnalyticsLink></li>
                      <li><AnalyticsLink to='https://github.com/fnalabs/test-automation-starter/issues'>Issues</AnalyticsLink></li>
                    </ul>
                  </li>
                </ul>

                <p className='menu-label'>Starter Kits</p>
                <ul className='menu-list'>
                  <li><AnalyticsLink to='https://github.com/fnalabs/starter-npm-js'>NPM package</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/starter-react-js'>React/Koa2 SSR webapp</AnalyticsLink></li>
                  <li><AnalyticsLink to='https://github.com/fnalabs/starter-koa2-js'>Koa2 REST service</AnalyticsLink></li>
                </ul>
              </nav>

              <h4 className='subtitle has-nav-spacing'>Contact By Email</h4>
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
