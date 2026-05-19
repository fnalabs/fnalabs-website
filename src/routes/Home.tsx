import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'

import {
  remoteColumn,
  remoteColumns,
  remoteContainer,
  remoteHero,
  remoteIconMF,
} from '../remotes'

const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Container = lazy(remoteContainer)
const Hero = lazy(remoteHero)
const IconMF = lazy(remoteIconMF)

const Home: FC = () => (
  <>
    <title>FnA Labs</title>
    <meta name="description" content="FnA Labs researches and developes advanced concepts to give you the finest products out there. Fn Awesome!" />

    <Hero color='dark' size='fullheight' bold>
      <Container>
        <Columns vcentered>
          <Column numericSize={6} content textPosition={['right-tablet', 'centered-mobile']}>
            <h1 className='title'>Federated PWAs</h1>
            <p className='subtitle'>A pattern to build scalable micro-frontend applications</p>
            <Link to='/federation' className='button is-link'>Learn More</Link>
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
