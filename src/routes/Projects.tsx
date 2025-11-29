import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'
import {
  remoteBox,
  remoteColumn,
  remoteColumns,
  remoteContainer,
  remoteHero,
  remoteSection,
  remoteIconHiveIO,
} from '../remotes'

const Box = lazy(remoteBox)
const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Container = lazy(remoteContainer)
const Hero = lazy(remoteHero)
const Section = lazy(remoteSection)
const IconHiveIO = lazy(remoteIconHiveIO)

const Projects: FC = () => (
  <>
    <Hero color='dark' bold>
      <Container>
        <Columns>
          <Column numericSize='8-desktop' numericSizeOffset='2-desktop'>
            <Columns>
              <Column numericSize={3}>
                <IconHiveIO />
              </Column>

              <Column content>
                <article>
                  <h1 className='title'>Hive<sup>io</sup></h1>
                  <h2 className='subtitle is-5'>From startup to enterprise...</h2>
                  <p>FnA Labs has evolved enterprise architecture by giving you the Hive<sup>io</sup> framework. Our product works for fresh startups and large-scale corporations alike. It is <strong>reactive</strong> and <strong>cloud-native</strong>, giving you more time to spend solving your business challenges and less time on your infrastructure.</p>
                  <p>
                    <Link to='/hive' className='button is-link'>Learn More</Link>
                  </p>
                </article>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Hero>

    <Section>
      <Container>
        <Columns>
          <Column numericSize='10-desktop' numericSizeOffset='1-desktop' content>
            <h2 className='title'>More Projects</h2>

            <Columns vcentered>
              <Column numericSize={6}>
                <Box>
                  <article>
                    <h3>Schema(JSON)<sup>js</sup></h3>
                    <p>A Schema class designed to validate structured data based on the JSON Schema specification. It represents the schemas as immutable objects with the flexibility of making partial schema validations via Closures and Thunks.</p>
                    <p><Link to='https://fnalabs.github.io/schema-json-js/' className='button is-link'>Learn More</Link></p>
                  </article>
                </Box>
              </Column>

              <Column numericSize={6}>
                <Box>
                  <article>
                    <h3>Model(JSON)<sup>js</sup></h3>
                    <p>A Model class designed to serialize and transfer structured data within the services/apps you build or across networks and uses schema validation with Schema(JSON)<sup>js</sup>.</p>
                    <p><Link to='https://fnalabs.github.io/model-json-js/' className='button is-link'>Learn More</Link></p>
                  </article>
                </Box>
              </Column>
            </Columns>

            <Columns>
              <Column>
                <Box>
                  <article>
                    <h3>Starter Kits</h3>
                    <p>Over the course of our open source development journey, we've identified common underlying structures in the projects we've built. We decided to abstract those structures as starter kits:</p>
                    <ul>
                      <li><Link to='https://github.com/fnalabs/starter-npm-js'>NPM package</Link></li>
                      <li><Link to='https://github.com/fnalabs/starter-react-js'>React SSR PWA</Link></li>
                      <li><Link to='https://github.com/fnalabs/starter-fastify-js'>Fastify Service</Link></li>
                    </ul>
                  </article>
                </Box>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Section>
  </>
)
export default Projects
