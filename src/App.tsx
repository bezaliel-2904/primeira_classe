import { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Founders } from './components/Founders';
import { Editorial } from './components/Editorial';
import { Collections } from './components/Collections';
import { Picks } from './components/Picks';
import { Gallery } from './components/Gallery';
import { Emotional } from './components/Emotional';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const [ready, setReady] = useState(false);

  useScrollReveal();

  useCallback(() => setReady(true), []);

  return (
    <div className={ready ? 'animate-fade-in' : 'animate-fade-in'}>
      <Header />
      <main>
        <Hero />
        <Founders />
        <Editorial />
        <Collections />
        <Picks />
        <Gallery />
        <Emotional />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
