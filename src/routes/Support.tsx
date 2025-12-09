import React, { type FC, lazy } from 'react'
import {
  remoteColumn,
  remoteColumns,
  remoteContainer,
  remoteHero,
  remoteImage,
  remoteMenu,
  remoteSection,
} from '../remotes'

const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Container = lazy(remoteContainer)
const Hero = lazy(remoteHero)
const Image = lazy(remoteImage)
const Menu = lazy(remoteMenu)
const Section = lazy(remoteSection)

const Support: FC = () => (
  <>
    <Hero color='dark' bold>
      <Container>
        <Columns>
          <Column numericSize='8-desktop' numericSizeOffset='2-desktop'>
            <Columns centered vcentered>
              <Column narrow>
                <Image fixedSize='96x96' centered hcentered>
                  <i className='fa-solid fa-headset fa-6x has-text-primary' />
                </Image>
              </Column>

              <Column narrow content>
                <article>
                  <h1 className='title'>Support</h1>
                  <p className='subtitle'>How can we help you?</p>
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
          <Column numericSize='10-desktop' numericSizeOffset='1-desktop'>
            <Columns>
              <Column />
              <Column narrow>
                <h3 className='subtitle'>Featured Projects</h3>
                <Menu list={[
                  {
                    label: 'HiveIO Framework',
                    list: [
                      { href: '/hive', label: 'Homepage' },
                      { href: '/hive/overview', label: 'Overview' },
                      { href: '/hive/start', label: 'Get Started' },
                      { href: '/hive/documentation', label: 'Documentation', list: [
                        { href: 'https://npmjs.com/package/hive-io', label: 'Class Library (NPM)' },
                        { href: 'https://hub.docker.com/r/fnalabs/hive-base-js', label: 'Base (Docker)' },
                        { href: 'https://hub.docker.com/r/fnalabs/hive-producer-js', label: 'Producer (Docker)' },
                        { href: 'https://hub.docker.com/r/fnalabs/hive-consumer-js', label: 'Consumer (Docker)' },
                        { href: 'https://hub.docker.com/r/fnalabs/hive-stream-processor-js', label: 'Stream Processor (Docker)' },
                        { href: 'https://github.com/fnalabs/hive-io', label: 'Github' },
                      ]},
                    ]
                  },
                  {
                    label: 'Schema(JSON)JS',
                    list: [
                      { href: 'https://fnalabs.github.com/schema-json-js/', label: 'Documentation' },
                      { href: 'https://npmjs.com/package/schema-json-js', label: 'NPM' },
                      { href: 'https://github.com/fnalabs/lib-js/tree/master/packages/schema-json-js', label: 'Github' },
                    ]
                  },
                  {
                    label: 'Model(JSON)JS',
                    list: [
                      { href: 'https://fnalabs.github.com/model-json-js/', label: 'Documentation' },
                      { href: 'https://npmjs.com/package/model-json-js', label: 'NPM' },
                      { href: 'https://github.com/fnalabs/lib-js/tree/master/packages/model-json-js', label: 'Github' },
                    ]
                  },
                ]} />
              </Column>

              <Column />
              <Column narrow>
                <h3 className='subtitle'>More Projects</h3>
                <Menu list={[
                  {
                    label: 'Starter Kits',
                    list: [
                      { href: 'https://github.com/fnalabs/starter-npm-js', label: 'NPM Package' },
                      { href: 'https://github.com/fnalabs/starter-react-js', label: 'React SSR PWA' },
                      { href: 'https://github.com/fnalabs/starter-fastify-js', label: 'Fastify Service' },
                    ]
                  },
                ]} />

                <h3 className='subtitle'>Contacts</h3>
                <Menu list={[
                  {
                    label: 'Emails',
                    list: [
                      { href: 'mailto:support@fnalabs.com', label: 'Support' },
                      { href: 'mailto:contact@fnalabs.com', label: 'General' },
                    ]
                  },
                ]} />
              </Column>

              <Column />
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Section>
  </>
)
export default Support
