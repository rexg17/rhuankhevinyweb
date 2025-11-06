import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { Button } from './Button';
import { FaInstagram } from 'react-icons/fa';
import { SiBlender, SiAdobeaftereffects } from 'react-icons/si';

export const VFX: React.FC = () => {
  return (
    <Section
      id="vfx"
      title="VFX & Motion"
      subtitle="Visual effects, 3D art, and motion graphics"
      className="bg-blue-950"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <SiBlender className="text-5xl text-orange-500 mb-4" />
          <h3 className="text-2xl font-bold mb-3">3D Modeling & Animation</h3>
          <p className="text-gray-400">Blender pipeline for game assets, motion graphics, and visual effects</p>
        </Card>
        <Card>
          <SiAdobeaftereffects className="text-5xl text-purple-500 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Motion Graphics</h3>
          <p className="text-gray-400">After Effects compositing, VFX integration, and digital illustration</p>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/30">
        <div className="text-center">
          <FaInstagram className="text-6xl text-pink-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold uppercase mb-4">Follow on Instagram</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Check out latest VFX work, motion graphics, 3D renders @rhuan.kheviny
          </p>
          <Button
            href="https://instagram.com/rhuan.kheviny"
            variant="primary"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          >
            <FaInstagram className="inline mr-2" />
            View All VFX
          </Button>
        </div>
      </Card>
    </Section>
  );
};
