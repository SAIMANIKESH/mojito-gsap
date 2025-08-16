import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

import { Navbar, Hero, Cocktails, About, Art } from './components';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <div className='h-screen' />
    </main>
  )
}
