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
import { IntroAnimation } from './components/IntroAnimation';
import { useScrollReveal } from './hooks/useScrollReveal';
import { AppErrorBoundary } from './components/AppErrorBoundary';

function AppContent() {
  const [showIntro, setShowIntro] = useState(true);
  const completeIntro = useCallback(() => setShowIntro(false), []);

  useScrollReveal();

  return (
    <div>
      {showIntro && <IntroAnimation onComplete={completeIntro} />}
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

function App() {
  return (
    <AppErrorBoundary>
      <AppContent />
    </AppErrorBoundary>
  );
}

export default App;
