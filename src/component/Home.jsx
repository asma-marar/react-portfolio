import React from 'react';
import '../home.css';
import UseDynamicBackground from '../hooks/UseDynamicBackground'; // Import the custom hook

function Home() {
  const backgroundColor = UseDynamicBackground(); // Use the custom hook

  return (
    <div className="home-container" style={{ backgroundColor: backgroundColor }}>
      <div className="intro-text">
        <span className="intro-title">Full Stack Web Developer</span>
        <br />
        <p className="description">
          I’m a Full Stack Web Developer with a strong foundation in HTML, CSS, JavaScript, PHP, Laravel, and React. I completed a 4-month full stack development course at Orange Academy, where I worked on hands-on projects like Bookify, a bookstore website built with JavaScript and API integration, and WAQT, an e-commerce platform developed using PHP and MySQL. These projects helped me gain experience in both frontend and backend development, and I’m excited to continue growing and building impactful applications.
        </p>
      </div>
    </div>
  );
}

export default Home;
