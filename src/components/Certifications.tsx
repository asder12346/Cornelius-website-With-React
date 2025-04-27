
import React from 'react';
import { Award } from 'lucide-react';

type Certification = {
  name: string;
  date: string;
  issuer?: string;
  icon: React.ReactNode;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      name: "Certified by Nigeria Computer Society",
      date: "November 2024",
      issuer: "Nigeria Computer Society",
      icon: <Award className="text-teal" size={24} />,
    },
    {
      name: "Completed '100 Days of Code' by Angela Yu on Udemy",
      date: "February 2025",
      issuer: "Udemy",
      icon: <Award className="text-teal" size={24} />,
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container">
        <h2 className="section-title">Certifications & Awards</h2>
        
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal flex items-start">
              <div className="mr-4 mt-1">
                {cert.icon}
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">{cert.name}</h3>
                {cert.issuer && <p className="text-sm text-slate mb-2">Issued by: {cert.issuer}</p>}
                <p className="text-xs text-slate">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
