
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:min-h-screen flex items-center">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-teal mb-2 fade-up">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 fade-up delay-100">
              Cornelius Samuel Abede.
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6 fade-up delay-200">
              I build things for the web.
            </h2>
            <p className="text-slate max-w-lg mb-8 fade-up delay-300">
              I'm a software engineering student passionate about creating elegant solutions through code. 
              Currently focusing on web development, Data Science and expanding my skills in various programming languages.
            </p>
            <div className="fade-up delay-400">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal fade-up">
                <img 
                  src="/photo/cornelius.png" 
                  alt="Cornelius Samuel Abede" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-teal rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
