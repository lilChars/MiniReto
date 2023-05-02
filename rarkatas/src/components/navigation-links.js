import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return <nav className={`navigation-links-nav ${props.rootClassName} `}></nav>
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  link2: 'Speakers',
  link3: 'Agenda',
  link1: 'About',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
