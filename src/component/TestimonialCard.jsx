import React from 'react';
import PropTypes from 'prop-types';
import '../TestCard.css';

function TestimonialCard({ image, description }) {
  return (
    <div className="testimonial-card">
      <img src={image} alt="testimonial" className="testimonial-image" />
      <p className="testimonial-description">{description}</p>
    </div>
  );
}

TestimonialCard.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TestimonialCard;
