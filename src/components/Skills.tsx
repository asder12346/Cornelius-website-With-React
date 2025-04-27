
import React from 'react';
import { Code, FileCode, Boxes, FileJson, Database } from 'lucide-react';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const Skills = () => {
  const programmingSkills: Skill[] = [
    { name: "Python", icon: <Code className="text-teal w-8 h-8" /> },
    { name: "JavaScript", icon: <FileCode className="text-teal w-8 h-8" /> },
  ];

  const webSkills: Skill[] = [
    { name: "React", icon: <Boxes className="text-teal w-8 h-8" /> },
    { name: "HTML", icon: <FileCode className="text-teal w-8 h-8" /> },
    { name: "CSS", icon: <FileJson className="text-teal w-8 h-8" /> },
  ];

  const databaseSkills: Skill[] = [
    { name: "MongoDB", icon: <Database className="text-teal w-8 h-8" /> },
  ];

  const softSkills: string[] = [
    "Communication", 
    "Collaboration", 
    "Problem-Solving", 
    "Critical Thinking"
  ];

  const renderSkillWithIcon = (skill: Skill) => (
    <div key={skill.name} className="flex items-center space-x-4 mb-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {skill.icon}
      <span className="text-navy font-medium">{skill.name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-navy">Technical Skills</h3>
            
            <div className="mb-8">
              <h4 className="text-slate font-medium mb-4">Programming Languages</h4>
              {programmingSkills.map(renderSkillWithIcon)}
            </div>
            
            <div className="mb-8">
              <h4 className="text-slate font-medium mb-4">Web Technologies</h4>
              {webSkills.map(renderSkillWithIcon)}
            </div>
            
            <div>
              <h4 className="text-slate font-medium mb-4">Databases</h4>
              {databaseSkills.map(renderSkillWithIcon)}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-navy">Soft Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div key={skill} className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-teal">
                  <h4 className="font-medium text-navy">{skill}</h4>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-navy">Work Experience</h3>
              <p className="text-slate">
                Currently, no formal work experience; however, actively engaged in academic projects 
                and collaborative learning environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
