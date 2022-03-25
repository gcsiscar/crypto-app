import React from 'react';
import {
  AboutUs,
  Features,
  Footer,
  Header,
  Hero,
  StartMining,
  TradeSecurely,
} from '../module';

export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <AboutUs />
      <TradeSecurely />
      <Features />
      <StartMining />
      <Footer />
    </React.Fragment>
  );
};
