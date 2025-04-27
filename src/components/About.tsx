
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-navy">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate">
                  I'm Cornelius Samuel Abede, a dedicated Software Engineering student with a passion for problem-solving and creating user-friendly web applications. 
                  I enjoy working with various technologies and constantly expanding my skill set.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="text-sm font-medium text-slate mb-1">Email</h4>
                  <p className="text-navy">Samuelabedecornelius@gmial.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate mb-1">Phone</h4>
                  <p className="text-navy">(+234) 703-017-5818</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate mb-1">Location</h4>
                  <p className="text-navy">Kaduna, Nigeria</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate mb-1">LinkedIn</h4>
                  <p className="text-navy">linkedin.com/in/cornelius</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-navy">Education</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-navy">Bachelor of Science in Software Engineering</h4>
                  <p className="text-slate">Mewar International University.</p>
                </div>
                <div className="text-sm text-slate">
                  <p>Aug 2023 - May 2027 (Expected Graduation)</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h5 className="font-medium text-navy mb-2">Relevant Coursework:</h5>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <li className="text-sm text-slate">• Data Structures & Algorithms</li>
                  <li className="text-sm text-slate">• Web Development</li>
                  <li className="text-sm text-slate">• Artificial Intelligence</li>
                  <li className="text-sm text-slate">• Database Management Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
