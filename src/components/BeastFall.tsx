import React, { useState } from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { FaGamepad, FaMusic, FaCode, FaGithub } from 'react-icons/fa';
import { SiItchdotio } from 'react-icons/si';

export const BeastFall: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'vfx' | 'music'>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <p className="text-lg text-gray-400 leading-relaxed">
              <span className="text-yellow-500 font-bold">Beast Fall</span> is a retro-style boss rush game developed during
              GameJam+ 2024 in just 48 hours. Features intense lane-based combat with parry mechanics.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: FaGamepad, title: 'Lane-Based Combat', desc: 'Dynamic 3-lane boss battle mechanics' },
                { icon: FaCode, title: 'AI Boss Behavior', desc: 'Adaptive AI with pattern-based attacks' },
                { icon: FaMusic, title: 'Original Soundtrack', desc: '8 custom tracks orchestral+electronic' },
              ].map((item, i) => (
                <Card key={i}>
                  <item.icon className="text-4xl text-red-600 mb-4" />
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        );
      case 'tech':
        return (
          <Card>
            <h4 className="text-xl font-bold mb-4 text-red-600 uppercase">Technical Stack</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 mb-2"><span className="font-bold">Engine:</span> Unity 2022.3 LTS</p>
                <p className="text-gray-400 mb-2"><span className="font-bold">Language:</span> C#</p>
                <p className="text-gray-400 mb-2"><span className="font-bold">Development:</span> 48 Hours</p>
                <p className="text-gray-400"><span className="font-bold">Target FPS:</span> 60 FPS</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2"><span className="font-bold">Team:</span> 3 Members</p>
                <p className="text-gray-400 mb-2"><span className="font-bold">Soundtrack:</span> 8 Original Tracks</p>
                <p className="text-gray-400">Implemented lane switching, AI patterns, and VFX systems</p>
              </div>
            </div>
          </Card>
        );
      case 'vfx':
        return (
          <Card>
            <h4 className="text-xl font-bold mb-4 text-red-600 uppercase">Visual Effects</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Particle systems for attack feedback',
                'Explosion and impact effects',
                'Screen shake and camera effects',
                'Health bar animations',
                'Waveform visual effects',
                'Boss phase transition VFX',
              ].map((vfx, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-slate-700 rounded">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  <span className="text-sm text-gray-300">{vfx}</span>
                </div>
              ))}
            </div>
          </Card>
        );
      case 'music':
        return (
          <Card>
            <h4 className="text-xl font-bold mb-4 text-red-600 uppercase">Original Soundtrack - 8 Tracks</h4>
            <div className="space-y-2">
              {[
                { name: 'Menu Theme', type: 'Ambient' },
                { name: 'Boss Battle Phase 1', type: 'Orchestral/Electronic' },
                { name: 'Boss Battle Phase 2', type: 'Intense Electronic' },
                { name: 'Victory Theme', type: 'Triumphant' },
              ].map((track, i) => (
                <div key={i} className="flex justify-between p-2 bg-slate-700 rounded text-sm">
                  <span className="text-gray-300">{track.name}</span>
                  <span className="text-yellow-500">{track.type}</span>
                </div>
              ))}
            </div>
          </Card>
        );
    }
  };

  return (
    <Section id="games" title="Beast Fall" subtitle="GameJam+ 2024 - 48 Hour Development" className="bg-blue-950">
      <div className="mb-8 flex flex-wrap gap-3 justify-center">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'tech', label: 'Technical' },
          { id: 'vfx', label: 'VFX' },
          { id: 'music', label: 'Music' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-6 py-3 rounded-md font-bold uppercase text-sm transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-slate-700 text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderContent()}
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        <Button href="https://rhuankheviny.itch.io/beast-fall" variant="primary">
          <SiItchdotio className="inline mr-2" />
          Play on itch.io
        </Button>
        <Button href="https://github.com/rhuankheviny/beast-fall" variant="outline">
          <FaGithub className="inline mr-2" />
          View Code
        </Button>
        <Button href="https://soundcloud.com/rhuankheviny-gamecomposer/sets/beast-fall-ost-game-soundtrack" variant="secondary">
          <FaMusic className="inline mr-2" />
          Listen to OST
        </Button>
      </div>
    </Section>
  );
};
