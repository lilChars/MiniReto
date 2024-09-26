import React from 'react'

import PropTypes from 'prop-types'

import './category-card.css'

const CategoryCard = (props) => {
  return (
    <div className="category-card-category-card">
      <img
        alt={props.image_alt3}
        src={props.image_src2}
        className="category-card-image"
      />
      <span className="category-card-text">{props.name}</span>
    </div>
  )
}

CategoryCard.defaultProps = {
  category_img:
    'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjaGFpcnxlbnwwfHx8fDE2NTI4MTgxODk&ixlib=rb-1.2.1&w=1500',
  image_alt2: 'image',
  image_alt3: 'image',
  image_alt: 'image',
  image_src1:
    'https://images.unsplash.com/photo-1512400930990-e0bc0bd809df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGhvb2RpZXN8ZW58MHx8fHwxNjgyNzEwNzk0&ixlib=rb-4.0.3&q=80&w=200',
  name: 'Hoodies',
  image_src2:
    'https://images.unsplash.com/photo-1653482805369-04d04aafab7a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGxldHRlciUyMHN8ZW58MHx8fHwxNjgyNzExNDA5&ixlib=rb-4.0.3&w=200',
  image_src:
    'https://images.unsplash.com/photo-1512400930990-e0bc0bd809df?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGhvb2RpZXN8ZW58MHx8fHwxNjgyNzEwNzk0&ixlib=rb-4.0.3&w=1500',
  image_alt1: 'image',
}

CategoryCard.propTypes = {
  category_img: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  name: PropTypes.string,
  image_src2: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default CategoryCard
