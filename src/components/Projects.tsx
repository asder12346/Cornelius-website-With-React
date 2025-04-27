
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  link?: string;
  imageUrl: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Calculator Suite",
      description: "Developed a suite of calculators including a standard calculator, currency converter, and date calculator. Utilized Python for backend logic and JavaScript for frontend interactivity. Enhanced user experience through intuitive design and responsive layout.",
      technologies: ["Python", "JavaScript"],
      startDate: "January 2024",
      endDate: "March 2024",
      imageUrl: "https://images.unsplash.com/photo-1464219222984-216ebffaaf85?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Personal Website with Chatbot",
      description: "Created a personal portfolio website featuring an interactive chatbot. Implemented using HTML, CSS, and JavaScript, with chatbot functionality powered by Python. Improved user engagement and provided instant support for visitors.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      startDate: "April 2024",
      endDate: "June 2024",
      link: "#",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Mood-Based Music Recommendation App",
      description: "Developed a React application that recommends music based on user mood using the Spotify API. Integrated API calls to fetch data and utilized state management for dynamic user interface updates. Achieved a seamless user experience with responsive design and real-time recommendations.",
      technologies: ["React", "Spotify API"],
      startDate: "July 2024",
      endDate: "September 2024",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "BSF Farming Website for ETEP",
      description: "Collaborated on a web development project for a farming initiative, focusing on user-friendly design and functionality. Employed MongoDB for data storage and management, ensuring efficient data retrieval and user interaction. Contributed to the project's success by implementing features that enhanced user engagement and information accessibility.",
      technologies: ["MongoDB", "HTML", "CSS", "JavaScript"],
      startDate: "October 2024",
      endDate: "December 2024",
      imageUrl: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-white rounded-full text-navy hover:text-teal transition-colors">
                      <Github size={20} />
                    </a>
                    {project.link && (
                      <a href={project.link} className="p-2 bg-white rounded-full text-navy hover:text-teal transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-navy">{project.title}</h3>
                  <div className="text-xs text-slate">
                    {project.startDate} - {project.endDate}
                  </div>
                </div>
                
                <p className="text-slate text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-secondary rounded-full text-slate">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
