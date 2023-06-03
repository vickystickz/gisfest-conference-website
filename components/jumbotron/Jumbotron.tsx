import React from 'react';
import HeroContent from './HeroContent';
import Image from 'next/image';
import { siteConfiguration } from '@/config/siteConfig';

const Jumbotron = () => {

    const {jumbotron} = siteConfiguration
  return (
    <div className='h-screen tablet:h-[700px] z-0 left-0 right-0 transition-all delay-150 ease-out flex flex-col justify-center items-center '>
        <Image src={jumbotron.heroImage} alt='hero-image' className='top-0 object-cover left-0 right-0 bottom-0 z-0 absolute h-full w-full tablet:h-[800px]' />
        <div className='bg-gradient absolute z-10 top-0  left-0 w-full h-full tablet:h-[800px]'>
        </div>
        <HeroContent conference={jumbotron.conference} buttons={jumbotron.heroButtons}  />
    </div>
    
  )
}

export default Jumbotron;
