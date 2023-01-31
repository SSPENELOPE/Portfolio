import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function Conatct() {
    const [option, setOption] = useState( { name: '', email: '', text: ''} );
    const form = useRef();

    /* set the state when the form values are changed */
    const handleChange = (e) => {
       const { name, value } = e.target;

       setOption({
        ...option,
        [name]: value,
       })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cma7mwq', 'template_mlcfw7g', form.current, 'UVIfb9mkfrjrr5Kzu')
            .then((result) => {
                console.log(result.text);
                alert('message sent');
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
                alert(error.text);
            });
     
    }

    return (
        <div className="contactForm">
            {/* Contact form */}
            <form className="form" ref={form} onSubmit={handleFormSubmit}>

                {/* Name Input */}
                <h4 className="label">Name</h4>
                <input 
                required
                placeholder="John Doe"
                type="name"
                name = "name"
                id='name'
                value={option.name}
                onChange={handleChange}
                className="form-control input" 
                 />

                {/* Email Input */}
                <h4 className="label">Email</h4>
                <input 
                required
                placeholder="johndoe@email.com" 
                type="email" 
                name="email"
                id='email'
                value={option.email}
                onChange={handleChange}
                className="form-control input" 
                />

                {/* Textarea Input */}
                <h4 className="label">Your Message</h4>
                <textarea 
                required
                placeholder="Enter Your Message Here"
                type="text"
                name="text"
                value={option.text}
                onChange={handleChange}
                className="form-control input"
                />

                {/*  submit button */}
                <input 
                type='submit' 
                name='Submit' 
                value='Submit' 
                className='btn my-2 bg-light w-25 my-4' 
                />

            </form>
        </div>
    )
}

export default Conatct;