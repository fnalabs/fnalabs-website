import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'
import {
  remoteColumn,
  remoteColumns,
  remoteContainer,
  remoteHero,
  remoteIconMF,
} from '../remotes'
import meta from '../metadata.json'

const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Container = lazy(remoteContainer)
const Hero = lazy(remoteHero)
const IconMF = lazy(remoteIconMF)

const Home: FC = () => (
  <>
    <title>{meta['/'].title}</title>
    <meta name="description" content={meta['/'].description} />

    <Hero color='dark' size='fullheight' bold>
      <Container>
        <Columns vcentered>
          <Column numericSize={6} content textPosition={['right-tablet', 'centered-mobile']}>
            <h1 className='title'>Federated PWAs</h1>
            <p className='subtitle'>A <Link to='/federation'>pattern</Link> to build scalable micro-frontend applications</p>
          </Column>
          <Column numericSize={6}>
            <Columns mobile>
              <Column numericSize={6} numericSizeOffset={'3-mobile'}>
                <IconMF />
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Hero>
  </>
)
export default Home
