import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaSoundcloud, FaSpotify, FaItchIo, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/rhuankheviny', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/rhuankheviny', label: 'LinkedIn' },
    { icon: FaItchIo, href: 'https://rhuankheviny.itch.io', label: 'itch.io' },
    { icon: FaInstagram, href: 'https://instagram.com/rhuan.kheviny', label: 'Instagram' },
    { icon: FaSoundcloud, href: 'https://soundcloud.com/rhuankheviny-gamecomposer', label: 'SoundCloud' },
    { icon: FaSpotify, href: 'https://open.spotify.com/artist/1iRHZl7UT5i7MfZNDKPZUG', label: 'Spotify' },
    { icon: FaEnvelope, href: 'mailto:contact@rhuankheviny.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
              Rhuan Kheviny
            </h3>
            <p className="text-gray-400">
              Full-Stack Developer, Game Developer, VFX Artist & Music Composer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold uppercase mb-4 text-red-600">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#games' },
                { label: 'Music', href: '#music' },
                { label: 'VFX', href: '#vfx' },
                { label: 'Experience', href: '#experience' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold uppercase mb-4 text-red-600">Get In Touch</h4>
            <p className="text-gray-400 mb-4">
              Ready to collaborate. Let's build something that races ahead!
            </p>
            <a
              href="mailto:contact@rhuankheviny.com"
              className="inline-block px-4 py-2 bg-red-600 hover:bg-yellow-500 hover:text-slate-900 text-white rounded-md font-bold uppercase text-sm transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">© {currentYear} Rhuan Kheviny. All rights reserved.</p>
            <p className="text-xs">Built with React, Vite & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
