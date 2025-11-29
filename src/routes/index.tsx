import React from 'react'
import AppLayout from '../components/AppLayout'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Support from './Support'
import Cookie from './Cookie'
import Privacy from './Privacy'

const routes = {
  element: <AppLayout />,
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
    {
      path: '/cookie',
      element: <Cookie />,
    },
    {
      path: '/privacy',
      element: <Privacy />,
    },
  ],
}
export default routes
