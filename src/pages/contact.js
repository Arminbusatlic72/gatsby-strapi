import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm/ContactForm'

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <div className="row">
                        <div className="col-md-6">
                            <h6>Location</h6>
                            <p>Los Angeles USA</p>
                            <p>Streat</p>

                        </div>
                        <div className="col-md-6">
                            <h6>Tel No</h6>
                            <p>1 2234563</p>
                            <h6>Email</h6>
                            <p>Los Angeles USA</p>
                            <p>Streat</p>

                        </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                    <ContactForm />
                    </div>
                </div>
            </div>
            </section>
        </Layout>
    )
}

export default ContactPage
