import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'
import {
  remoteBox,
  remoteCell,
  remoteColumn,
  remoteColumns,
  remoteContainer,
  remoteGrid,
  remoteHero,
  remoteImage,
  remoteSection,
  remoteIconHiveIO,
} from '../remotes'

const Box = lazy(remoteBox)
const Cell = lazy(remoteCell)
const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Container = lazy(remoteContainer)
const Grid = lazy(remoteGrid)
const Hero = lazy(remoteHero)
const Image = lazy(remoteImage)
const Section = lazy(remoteSection)
const IconHiveIO = lazy(remoteIconHiveIO)

const Projects: FC = () => (
  <>
    <title>FnA Labs - Projects</title>
    <meta name="description" content="Our open source software projects work for start-ups as well as enterprise businesses. Fn Awesome!" />

    <Hero color='dark' bold>
      <Container>
        <Columns>
          <Column numericSize='8-desktop' numericSizeOffset='2-desktop'>
            <Columns>
              <Column numericSize={3}>
                <Image fixedSize='128x128' centered>
                  <IconHiveIO />
                </Image>
              </Column>

              <Column content>
                <article>
                  <h1 className='title'>Hive<sup>io</sup></h1>
                  <h2 className='subtitle is-5'>From startup to enterprise...</h2>
                  <p>FnA Labs has evolved enterprise architecture by giving you the Hive<sup>io</sup> framework. Our product works for all business types. It is <strong>reactive</strong> and <strong>cloud-native</strong>, giving you more time to spend solving your business challenges and less time on your infrastructure.</p>
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
            <h2>More Projects</h2>

            <Grid fixed columnCount={['2-cols-desktop', '1-cols-mobile']} colGapSize={8} rowGapSize={8}>
              <Cell>
                <Box fullheight>
                  <article>
                    <h3>Schema(JSON)<sup>js</sup></h3>
                    <p>A Schema class designed to validate structured data based on the JSON Schema specification. It represents the schemas as immutable objects with the flexibility of making partial schema validations via Closures and Thunks.</p>
                    <p><Link to='https://fnalabs.github.io/schema-json-js/' className='button is-link'>Learn More</Link></p>
                  </article>
                </Box>
              </Cell>

              <Cell>
                <Box fullheight>
                  <article>
                    <h3>Model(JSON)<sup>js</sup></h3>
                    <p>A Model class designed to serialize and transfer structured data within the services/apps you build or across networks. Model uses schema validation with Schema(JSON)<sup>js</sup>.</p>
                    <p><Link to='https://fnalabs.github.io/model-json-js/' className='button is-link'>Learn More</Link></p>
                  </article>
                </Box>
              </Cell>

              <Cell>
                <Box fullheight>
                  <article>
                    <h3>Module Federation</h3>
                    <p>A pattern to build scalable micro-frontend applications by sharing modules across different builds at runtime. Check the source code for the projects used to build this PWA:</p>
                    <ul>
                      <li><Link to='https://github.com/fnalabs/fnalabs-website'>FnA Labs</Link></li>
                      <li><Link to='https://github.com/fnalabs/hive-website'>Hive<sup>io</sup></Link></li>
                      <li><Link to='https://github.com/fnalabs/module-federation'>Module Federation</Link></li>
                    </ul>
                    <p><Link to='/federation' className='button is-link'>Learn More</Link></p>
                  </article>
                </Box>
              </Cell>

              <Cell>
                <Box fullheight>
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
              </Cell>
            </Grid>
          </Column>
        </Columns>
      </Container>
    </Section>
  </>
)
export default Projects
