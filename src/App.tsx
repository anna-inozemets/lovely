import React from 'react';
import './App.scss';
import { Header } from './Header';
import { GreetingSection } from './GreetingSection';
import { Memories } from './Memories';

export const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <GreetingSection />
        <Memories />
      </main>
    </div>
  );
};
