import React from 'react'

import PropTypes from 'prop-types'

import './item-card.css'

const ItemCard = (props) => {
  return (
    <div className={`item-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="item-card-image"
      />
      <div className="item-card-container">
        <h3 className="item-card-text">{props.name}</h3>
        <div className="item-card-container1">
          <svg viewBox="0 0 1024 1024" className="item-card-icon">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon02">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon04">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon06">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon08">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="item-card-container2">
          <span className="item-card-currency">{props.currency}</span>
          <span className="item-card-value">{props.value}</span>
        </div>
      </div>
    </div>
  )
}

ItemCard.defaultProps = {
  name: 'Project Title',
  image_src:
    'https://images.unsplash.com/photo-1633292750937-120a94f5c2bb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxob29kaWV8ZW58MHx8fHwxNjgyNzExNTUw&ixlib=rb-4.0.3&w=1500',
  image_src1:
    'https://images.unsplash.com/photo-1633292750937-120a94f5c2bb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxob29kaWV8ZW58MHx8fHwxNjgyNzExNTUw&ixlib=rb-4.0.3&w=1500',
  image_alt: 'image',
  currency: '$',
  value: '429',
  image_alt1: 'image',
  rootClassName: '',
}

ItemCard.propTypes = {
  name: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ItemCard
