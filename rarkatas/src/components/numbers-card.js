import React from 'react'

import PropTypes from 'prop-types'

import './numbers-card.css'

const NumbersCard = (props) => {
  return (
    <div className="numbers-card-numbers-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="numbers-card-image"
      />
      <span className="numbers-card-number">{props.number}</span>
      <span className="numbers-card-text">{props.text}</span>
    </div>
  )
}

NumbersCard.defaultProps = {
  image_src: '/playground_assets/message-200h.png',
  text: 'sessions',
  image_alt: 'image',
  number: '2,148',
}

NumbersCard.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  number: PropTypes.string,
}

export default NumbersCard
