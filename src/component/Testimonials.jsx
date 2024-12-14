import React from 'react';
import '../index.css';
import TestimonialCard from './TestimonialCard';
import Image from '../assets/images/avtaar1-min-768x768.png';
import Image2 from '../assets/images/OIP.jpg';
import Image3 from '../assets/images/R.png';

function Testimonials() {
  return (
    <main className="two">
      <div className="testimonials-container">
        <div className="testimonials-heading">Testimonials</div>
        <div className="testimonials-cards">
          <TestimonialCard
            image={Image}
            description="Working with Asmaa was a game-changer for our website. They transformed our online presence with a stunning design and seamless functionality. Our traffic has doubled since the launch! 
            Sarah Thompson"
          />
          <TestimonialCard
            image={Image2}
            description="I was impressed by Asmaa's attention to detail and commitment to our project. They delivered on time and exceeded our expectations. Our team is thrilled with the new site! 
            James Kim"
          />
          <TestimonialCard
            image={Image3}
            description="I can't recommend Asmaa enough! They took the time to understand my vision and turned it into a beautiful, user-friendly site. Customer feedback has been amazing! 
            Lisa Patel"
          />
        </div>
      </div>
    </main>
  );
}

export default Testimonials;
