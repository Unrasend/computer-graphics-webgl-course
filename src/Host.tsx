import { useInjection } from "inversify-react";
import React, {ReactNode, useEffect, useRef } from 'react';
import Footer from './core/components/Footer/Footer.tsx';
import Header from './core/components/Header/Header.tsx';
import { ScrollService } from './core/services/scroll.service.ts';
import './App.scss';

const Host: React.FC<{ children: ReactNode }> = ({ children }) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const scrollService = useInjection(ScrollService);

  useEffect(() => scrollService.setScrollElement(terminalRef?.current));

  return (
    <div className="host">
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal" ref={terminalRef}>
        <Header />
        <main className="p-5xl xs:p-md">
          {children}
        </main>
        <Footer className="block mt-auto" />
      </div>
    </div>
  );
}

export default Host;
