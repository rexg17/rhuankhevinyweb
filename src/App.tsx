import { Hero } from './components/Hero';
import { About } from './components/About';
import { BeastFall } from './components/BeastFall';
import { Music } from './components/Music';
import { VFX } from './components/VFX';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-slate-950 text-white">
      <Hero />
      <About />
      <BeastFall />
      <Music />
      <VFX />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
