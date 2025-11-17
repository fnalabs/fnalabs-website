import React from 'react'
import { remoteAppLayout } from '../remotes'

import Home from './Home/Home'
import Projects from './Projects/Projects'
import About from './About/About'
import Support from './Support/Support'

const AppLayout = React.lazy(remoteAppLayout)

const routes = {
  element: (<AppLayout endLinks={[
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/support', label: 'Support' },
  ]} color='transparent' spaced />),
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/support',
      element: <Support />,
    },
  ],
}
export default routes
