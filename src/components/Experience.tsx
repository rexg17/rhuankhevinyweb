import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { FaBriefcase, FaChartLine, FaHeadset } from 'react-icons/fa';

export const Experience: React.FC = () => {
  const experiences = [
    {
      icon: FaBriefcase,
      company: 'Vibe Fitness',
      role: 'Management & Marketing',
      period: '2023 - Present',
      achievements: [
        'Led team optimization improving operational workflows',
        'Developed marketing campaigns with measurable growth',
        'Implemented tech solutions for process streamlining',
      ],
    },
    {
      icon: FaChartLine,
      company: 'Calafell a Casa',
      role: 'Web Development & Marketing',
      period: '2022 - 2023',
      achievements: [
        'Architected responsive web platform for local businesses',
        'Achieved +1,500 organic visits through SEO optimization',
        'Designed intuitive UX/UI flows maximizing conversions',
      ],
    },
    {
      icon: FaHeadset,
      company: 'Linx AutoSystem',
      role: 'Technical Support N1',
      period: '2021 - 2022',
      achievements: [
        'Handled 30-50 technical support tickets daily',
        'Created comprehensive documentation reducing resolution time 25%',
        'Collaborated with dev team on software issues',
      ],
    },
  ];

  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="Building solutions across technology and creative domains"
      className="bg-slate-900"
    >
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-slate-700 flex items-center justify-center text-3xl text-red-600">
                  <exp.icon />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <p className="text-red-600 font-semibold">{exp.role}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="text-red-600 mt-1">▸</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
