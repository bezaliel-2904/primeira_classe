import { useCallback, useState } from 'react';
import { IntroAnimation } from './components/IntroAnimation';
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
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  useScrollReveal();

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <div className={introComplete ? 'animate-fade-in' : 'opacity-0'}>
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
    </>
  );
}

export default App;
