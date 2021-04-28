import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faPhoneSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import Layout from '../components/layout/Layout'
import Seo from '../components/seo'
import ContactForm from '../components/contactForm/ContactForm'

const ContactPage = () => {
    return (
        <Layout>
            <Seo title="Contact" />
            <section className="contact-section">
            
            <div className="container">
            <h2 className="contact-section__heading">Contact Us</h2>
                <div className="row">
                    <div className="col-xs-12 col-md-5">
                    <p>Send us a message and we will reply as soon as we can.</p>
                       
                           
                       
                        <div className="contact-section__text-wrapper">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                            <h6>Location:</h6>
                            <p>Los Angeles USA</p>
                            <p>Streat</p>

                        </div>
                        
                        <div className="contact-section__text-wrapper">
                        <FontAwesomeIcon icon={faPhoneSquare} className="icon" />
                        
                            <h6>Tel No:</h6>
                            <p>1 2234563</p>
                            </div>
                           
                            <div className="contact-section__text-wrapper">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                           
                            <h6>Email:</h6>
                            <p>Los Angeles USA</p>
                            <p>Streat</p>

                        </div>
                    
                    </div>
                    <div className="col-xs-12 col-md-7">
                    <ContactForm />
                    </div>
                </div>
            </div>
            </section>
        </Layout>
    )
}

export default ContactPage
