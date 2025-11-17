import React, { type FC } from 'react'
import { Link } from 'react-router'

import { remoteColumn, remoteColumns, remoteContainer, remoteHero } from '../../remotes'

const Column = React.lazy(remoteColumn)
const Columns = React.lazy(remoteColumns)
const Container = React.lazy(remoteContainer)
const Hero = React.lazy(remoteHero)

const Home: FC = () => (
  <Hero color='dark' size='fullheight' bold>
    <Container>
      <Columns vcentered>
        <Column numericSize={6} content>
          <h1 className='title'>
            {/* <HiveIO className='svg-inline' height='72' /> */}
            Hive<sup>io</sup>
          </h1>
          <h2 className='subtitle'>A reactive, cloud-native framework for building microservices</h2>
          <h2 className='subtitle'>
            {/* <OpenTelemetry className='svg-link' height='32' /> */}
            Now integrated with <a href='https://opentelemetry.io' target='_blank' rel='noopener noreferrer'>OpenTelemetry</a>
          </h2>
          <Link to='/hive' className='button is-link'>Learn More</Link>
        </Column>
        <Column numericSize={6}>
          graphic here
        </Column>
      </Columns>
    </Container>
  </Hero>
)
export default Home
