import React from 'react';
// import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
        <section className='home-header contact-cont'>
            <div className='contact-details--cont'>
                <h1>Reach out</h1>
                <h2>Have a comment? Found a bug? drop us a message using the feedback form</h2>
                <div className='contact-details'>
                    <h3>Github</h3>
                    <p><a href='https://github.com/TomJHKR/lolfs.git' target='blank'>LOLFS Github</a></p>
                </div>
            </div>

            {/* contact form */}
            {/* <ContactForm/> */}
        </section>
    </>
  )
}

export default Contact
