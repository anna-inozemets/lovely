import React from 'react';
import './App.scss';
import { Header } from './Header';
import { GreetingSection } from './GreetingSection';
import { Memories } from './Memories';
import { Footer } from './Footer';

export const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <GreetingSection />
        <Memories />
      </main>
      <Footer />
    </div>
  );
};
