import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../index.css';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs
            .sendForm(
                'service_fkyimpf', // Replace with your Service ID
                'template_57yoawg', // Replace with your Template ID
                e.target,
                'ab8rAK36EKqFVOP6n' // Replace with your User ID
            )
            .then(
                () => {
                    setStatus('Message sent successfully!');
                    e.target.reset();
                },
                () => {
                    setStatus('Failed to send message.');
                }
            );
    };

    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>Send a Message</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <p>{status}</p>
            </div>
        </div>
    );
};

export default Contact;
