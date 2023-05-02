import React from 'react'

import PropTypes from 'prop-types'

import './slide.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide-slide slide ${props.rootClassName} `}
    >
      <div className="slide-max-wdith max-content-container">
        <h1 className="slide-text Heading2">{props.heading}</h1>
      </div>
    </div>
  )
}

Slide.defaultProps = {
  heading: 'Slide #1',
  rootClassName: '',
}

Slide.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slide
