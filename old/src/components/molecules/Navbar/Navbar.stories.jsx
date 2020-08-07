import React from 'react'
import Navbar from './Navbar'

export default {
  title: 'Molecules/Navbar',
  component: Navbar,
}

const buttonList = [
  {
    'destinationPath': '/about',
    'label': 'About'
  },
  {
    'destinationPath': '/about',
    'label': 'Features'
  },
  {
    'destinationPath': '/about',
    'label': 'FAQ'
  },
  {
    'destinationPath': '/about',
    'label': 'Sign Up'
  },
  {
    'destinationPath': '/about',
    'label': 'Sign In'
  },
]

export const loggedOut = () => (
    <Navbar navigationButtonList={buttonList} />
)