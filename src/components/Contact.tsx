
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-slate">
            I'm currently looking for new opportunities to apply my skills and grow professionally. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-navy">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  <Mail className="text-teal" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-navy mb-1">Email</h4>
                  <p className="text-slate">Samuelabedecornelius@gmial.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  <Phone className="text-teal" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-navy mb-1">Phone</h4>
                  <p className="text-slate">(+234) 703-017-5818</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  <MapPin className="text-teal" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-navy mb-1">Location</h4>
                  <p className="text-slate">kaduna, Nigeria</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-navy">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://igthub.com/asder12346" className="bg-white p-3 rounded-lg shadow-sm text-navy hover:text-teal transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.linkedln/in/samuel-abede-cornelius22 " className="bg-white p-3 rounded-lg shadow-sm text-navy hover:text-teal transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-navy">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
