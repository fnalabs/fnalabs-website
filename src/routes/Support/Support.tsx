import React, { type FC } from 'react'
import { remoteContainer } from '../../remotes'

const Container = React.lazy(remoteContainer)

const Support: FC = () => (
  <Container>
    <p>Support</p>
  </Container>
)
export default Support
