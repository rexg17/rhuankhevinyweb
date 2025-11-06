import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaSoundcloud, FaSpotify, FaItchIo } from 'react-icons/fa';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/rhuankheviny', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/rhuankheviny', label: 'LinkedIn' },
    { icon: FaItchIo, href: 'https://rhuankheviny.itch.io', label: 'itch.io' },
    { icon: FaInstagram, href: 'https://instagram.com/rhuan.kheviny', label: 'Instagram' },
    { icon: FaSoundcloud, href: 'https://soundcloud.com/rhuankheviny-gamecomposer', label: 'SoundCloud' },
    { icon: FaSpotify, href: 'https://open.spotify.com/artist/1iRHZl7UT5i7MfZNDKPZUG', label: 'Spotify' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden bg-gradient-to-b from-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 via-transparent to-transparent opacity-30" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-red-600 to-yellow-500 p-1 shadow-2xl shadow-red-600/50">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-black">
              RK
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-black uppercase mb-6 leading-tight"
        >
          Rhuan Kheviny
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold uppercase mb-4 text-red-600"
        >
          Full-Stack Developer, Game Developer, VFX Artist & Music Composer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Building next-gen digital experiences, racing-inspired.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button href="#about" variant="primary">
            View Projects
          </Button>
          <Button href="#games" variant="secondary">
            Play Games
          </Button>
          <Button href="#music" variant="outline">
            Listen to Music
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex gap-6 justify-center"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon size={32} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};
