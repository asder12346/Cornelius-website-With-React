
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-navy text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-lightSlate">© {new Date().getFullYear()} Cornelius Samuel Abede. All Rights Reserved.</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-teal hover:text-white transition-colors">
              Designed & Built by Cornelius Samuel Abede
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
