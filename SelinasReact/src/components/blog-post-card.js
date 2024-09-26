import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card.css'

const BlogPostCard = (props) => {
  return (
    <div className={`blog-post-card-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card-image"
      />
      <div className="blog-post-card-container">
        <span className="blog-post-card-text">{props.new_prop}</span>
        <span className="blog-post-card-text1">{props.description}</span>
        <a
          href={props.link_to}
          target="_blank"
          rel="noreferrer noopener"
          className="button"
        >
          Read more
        </a>
      </div>
    </div>
  )
}

BlogPostCard.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  new_prop: 'Chic sofa designs for 2022',
  image_src:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1500',
  description: 'Consectetur adipiscing elit duis tristique sollicitudin nibh',
  link_to: '',
}

BlogPostCard.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  new_prop: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  link_to: PropTypes.string,
}

export default BlogPostCard
