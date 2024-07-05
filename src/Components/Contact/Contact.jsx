import React from 'react';
import Styles from './Contactstyles.module.css';

function Contact() {
  return (
   <section id='Contact' className={Styles.container}>
    <h2 className={Styles.Contact}> CONTACT</h2>
    <div>
        <form>
        <label for='name'>Name:</label>
        <input type='text' id='name' name='name' required />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' required />
        <label for='message'>Message:</label>
        <textarea id='message' name='message' required></textarea>
        <button type='submit'>Submit</button>
        
        </form>

    </div>
   </section>
  );
}

export default Contact;