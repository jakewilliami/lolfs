import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const TEMPLATE_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

const ContactForm = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_KEY, form.current, {
          publicKey: 'RUIdj-Ew53TINylZ2',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setIsSubmitted(true); // Update state on success
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <>
        {isSubmitted ? (
        <div className="success-message">
          <p>thanks</p>
        </div>
        ) : (
            <form ref={form} onSubmit={sendEmail}>
                <p>Leave a message below, and we'll take it from there! Thank you for helping me make this site even better. </p>
                <div className='form-content'>
                    <div className='field-column inline-form'>
                        <div className='form-row form__group field'>
                            <label className="form__label">Name</label>
                            <input className='input form__field' type="text" name="user_name" maxLength="50" required />
                        </div>
                        <div className='form-row form__group field'>
                            <label className="form__label">Email</label>
                            <input className='input form__field' type="text" name="user_email" maxLength="50" required />    
                        </div> 
                    </div>
                    <div className='field-column form__group field'>
                        <label className="form__label">Message</label>
                        <textarea className='input form__field' name="message" maxLength="500" required />
                    </div>
                </div>
            <button className='form-button btn' type="submit" value="Send">
                <PiPaperPlaneTiltBold className='sparkle'/>
                <a className="text">Submit</a>
            </button>
            </form>
        )}
    </>
  )
}

export default ContactForm
