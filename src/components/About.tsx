import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { FaReact, FaPython, FaUnity, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiBlender, SiAdobeaftereffects, SiTailwindcss, SiTypescript } from 'react-icons/si';

export const About: React.FC = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
    { name: 'C#', icon: FaPython, color: 'text-purple-500' },
    { name: 'Unity', icon: FaUnity, color: 'text-gray-300' },
    { name: 'Blender', icon: SiBlender, color: 'text-orange-500' },
    { name: 'After Effects', icon: SiAdobeaftereffects, color: 'text-purple-400' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  ];

  return (
    <Section id="about" title="About Me" className="bg-slate-900">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Card>
          <div className="space-y-4">
            <p className="text-lg text-gray-400 leading-relaxed">
              Student of <span className="text-yellow-500 font-semibold">Computer Science</span> with a passion for creating
              immersive digital experiences across multiple disciplines.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              As a <span className="text-red-600 font-semibold">Full-Stack Developer</span>, I build modern web applications
              using React, Next.js, Python, and C#. My expertise extends to game development with Unity, where I combine
              programming with visual effects and original music composition.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I specialize in creating <span className="text-yellow-500 font-semibold">VFX</span> using Blender and After Effects,
              bringing motion graphics and 3D pipelines to life. Additionally, I compose original soundtracks for games and digital
              media, available on Spotify and SoundCloud.
            </p>
          </div>
        </Card>

        <Card>
          <h3 className="text-2xl font-bold uppercase mb-6 text-red-600">Tech Stack</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300 group">
                <skill.icon className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="font-semibold text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};
