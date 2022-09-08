import React from 'react';
import './contact.css';
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import {useRef} from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kq983d8', 'template_g2z41lh', form.current, 'iSVTDvQ_CRBLGT9dJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>info@pouyasadri.com</h5>
                        <a href="mailto:info@pouyasadri.com" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>pouyasadri</h5>
                        <a href="https://m.me/pouyasadri" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <a href="https://api.whatsapp.com/send?phone=+33768411196" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" placeholder="Your Message" cols="30" rows="7" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>

        </section>
    );
}

export default Contact;
