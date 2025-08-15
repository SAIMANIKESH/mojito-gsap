import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { navLinks } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    });

    navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
      backgroundColor: '#00000050',
      backgroundFilter: 'blur(10px)',
      duration: 1.5,
      ease: 'power1.inOut'
    });

    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      ScrollTrigger.create({
        trigger: heroSection,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => {
          document.title = 'Velvet Pour';
        },
        onEnterBack: () => {
          document.title = 'Velvet Pour';
        },
      });
    }

    navLinks.forEach(link => {
      const section = document.querySelector(`#${link.id}`);
      if (section) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => {
            document.title = `${link.title} - Velvet Pour`;
          },
          onEnterBack: () => {
            document.title = `${link.title} - Velvet Pour`;
          }
        });
      }
    });
  })

  return (
    <nav>
      <div>
        <a href='#hero' className='flex items-center gap-2'>
          <img src='/images/logo.png' alt='logo' />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
