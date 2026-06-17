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
import meta from '../metadata.json'

const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Container = lazy(remoteContainer)
const Hero = lazy(remoteHero)
const Image = lazy(remoteImage)
const Menu = lazy(remoteMenu)
const Section = lazy(remoteSection)

const Support: FC = () => (
  <>
    <title>{meta['/support'].title}</title>
    <meta name="description" content={meta['/support'].description} />

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

              <Column narrow content textPosition={['left-tablet', 'centered-mobile']}>
                <h1 className='title'>Support</h1>
                <p className='subtitle'>How can we help you?</p>
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
              <Column hiddenTouch />
              <Column narrow>
                <h2 className='subtitle'>Featured Projects</h2>
                <Menu list={[
                  {
                    label: 'Hive^io Framework',
                    list: [
                      { href: '/hive', label: 'Homepage' },
                      { href: '/hive/overview', label: 'Overview' },
                      { href: '/hive/start', label: 'Get Started' },
                      { href: '/hive/documentation', label: 'Documentation', list: [
                        { href: 'https://npmjs.com/package/hive-io', label: 'Class Library (NPM)', external: true },
                        { href: 'https://hub.docker.com/r/fnalabs/hive-base-js', label: 'Base (Docker)', external: true },
                        { href: 'https://hub.docker.com/r/fnalabs/hive-producer-js', label: 'Producer (Docker)', external: true },
                        { href: 'https://hub.docker.com/r/fnalabs/hive-consumer-js', label: 'Consumer (Docker)', external: true },
                        { href: 'https://hub.docker.com/r/fnalabs/hive-stream-processor-js', label: 'Stream Processor (Docker)', external: true },
                        { href: 'https://github.com/fnalabs/hive-io', label: 'Github', external: true },
                      ]},
                    ]
                  },
                  {
                    label: 'Schema(JSON)JS',
                    list: [
                      { href: 'https://fnalabs.github.com/schema-json-js/', label: 'Documentation', external: true },
                      { href: 'https://npmjs.com/package/schema-json-js', label: 'NPM', external: true },
                      { href: 'https://github.com/fnalabs/lib-js/tree/master/packages/schema-json-js', label: 'Github', external: true },
                    ]
                  },
                  {
                    label: 'Model(JSON)JS',
                    list: [
                      { href: 'https://fnalabs.github.com/model-json-js/', label: 'Documentation', external: true },
                      { href: 'https://npmjs.com/package/model-json-js', label: 'NPM', external: true },
                      { href: 'https://github.com/fnalabs/lib-js/tree/master/packages/model-json-js', label: 'Github', external: true },
                    ]
                  },
                ]} />
              </Column>

              <Column hiddenTouch />
              <Column narrow>
                <h2 className='subtitle'>More Projects</h2>
                <Menu list={[
                  {
                    label: 'Module Federation',
                    list: [
                      { href: 'https://github.com/fnalabs/fnalabs-website', label: 'FnA Labs', external: true },
                      { href: 'https://github.com/fnalabs/hive-website', label: 'Hive^io', external: true },
                      { href: 'https://github.com/fnalabs/module-federation', label: 'Module Federation', external: true },
                    ]
                  },
                  {
                    label: 'Starter Kits',
                    list: [
                      { href: 'https://github.com/fnalabs/starter-npm-js', label: 'NPM Package', external: true },
                      { href: 'https://github.com/fnalabs/starter-react-js', label: 'React SSR PWA', external: true },
                      { href: 'https://github.com/fnalabs/starter-fastify-js', label: 'Fastify Service', external: true },
                    ]
                  },
                ]} />

                <h2 className='subtitle'>Contacts</h2>
                <Menu list={[
                  {
                    label: 'Emails',
                    list: [
                      { href: 'mailto:support@fnalabs.com', label: 'Support', external: true },
                      { href: 'mailto:contact@fnalabs.com', label: 'General', external: true },
                    ]
                  },
                ]} />
              </Column>

              <Column hiddenTouch />
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Section>
  </>
)
export default Support
