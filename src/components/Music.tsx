import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { Button } from './Button';
import { FaSpotify, FaSoundcloud } from 'react-icons/fa';

export const Music: React.FC = () => {
  return (
    <Section
      id="music"
      title="Music & Audio"
      subtitle="Original compositions on Spotify and SoundCloud"
      className="bg-slate-900"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <FaSpotify className="text-4xl text-green-500" />
            <div>
              <h3 className="text-2xl font-bold uppercase">Spotify</h3>
              <p className="text-gray-400">Artist Profile</p>
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            Explore my complete discography featuring original game soundtracks, electronic productions, and experimental compositions.
          </p>
          <div className="rounded-xl overflow-hidden mb-4 shadow-2xl h-96">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/1iRHZl7UT5i7MfZNDKPZUG?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              frameBorder={0}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <Button
            href="https://open.spotify.com/artist/1iRHZl7UT5i7MfZNDKPZUG"
            variant="primary"
            className="w-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30"
          >
            <FaSpotify className="inline mr-2" />
            Follow on Spotify
          </Button>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <FaSoundcloud className="text-4xl text-orange-500" />
            <div>
              <h3 className="text-2xl font-bold uppercase">SoundCloud</h3>
              <p className="text-gray-400">Beast Fall OST</p>
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            <span className="text-yellow-500 font-semibold">All original tracks</span> composed, produced & mixed for
            Beast Fall Game Jam. Orchestral + electronic across 8 tracks including boss themes and ambient levels.
          </p>
          <div className="rounded-xl overflow-hidden mb-4 shadow-2xl">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder={0}
              allow="autoplay"
              style={{ borderRadius: '10px' }}
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rhuankheviny-gamecomposer/sets/beast-fall-ost-game-soundtrack&color=%23FF0000&auto_play=false&show_artwork=true"
            />
          </div>
          <Button
            href="https://soundcloud.com/rhuankheviny-gamecomposer"
            variant="primary"
            className="w-full bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30"
          >
            <FaSoundcloud className="inline mr-2" />
            Open in SoundCloud
          </Button>
        </Card>
      </div>
    </Section>
  );
};
