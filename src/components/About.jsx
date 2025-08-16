import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { TiStarHalfOutline } from "react-icons/ti";

import { profileLists } from '../../constants';

export default function About() {
  useGSAP(() => {
    const titleSplit = SplitText.create('#about h2', { type: 'words' });
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        toggleActions: 'play none none reset',
      },
    });

    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: 'expo.out',
      stagger: 0.02
    })
    .from('.top-grid div, .bottom-grid div', {
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut',
      stagger: 0.04,
    }, '-=0.8')
  });

  return (
    <section id='about'>
      <div className='mb-16 md:px-0 px-5'>
        <div className='content'>
          <div className='md:col-span-8'>
            <p className='badge'>Best Cocktails 🍸</p>

            <h2>Where every detail matters 
              <span className='text-white'>-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className='sub-content'>
            <p>
              Every cocktail we serve is a reflection of our obsession with detail 
              - from the first muddle to the final garnish. That care is what turns 
              a simple drink into something truly memorable. . .
            </p>

            <div className='md:flex-row md:justify-between md:items-center'>
              <div>
                <p>⭐⭐⭐⭐<TiStarHalfOutline className='inline text-amber-500  size-6 mb-1' /></p>
                <p className='md:text-3xl text-xl font-bold'>
                  <span>4.5</span>/5
                </p>
                <p className='text-sm text-white-100'>
                  More than 12000+ <h3 className='inline text-xl'>happy</h3> customers
                </p>
              </div>

              <span className='bg-gray-800 w-0.5 h-18 hidden md:block' />

              <div className='bg-linear-to-t from-slate-950 via-slate-800 to-slate-700 
                rounded-4xl p-4 pl-8 w-38 mt-5 md:mt-0'
              >
                <div className='flex-row justify-between items-center gap-2.5'>
                  {profileLists.map((imgSrc, index) => (
                    <img key={index} src={imgSrc.imgPath} alt={`profile-${index}`} 
                      className='rounded-full size-8.5 border-black border-2 -ml-4' />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div  className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>
        
        <div className="md:col-span-6">
          <div  className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>
        
        <div className="md:col-span-3">
          <div  className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>
      
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div  className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>
        
        <div className="md:col-span-4">
          <div  className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
	    </div>
    </section>
  )
}
