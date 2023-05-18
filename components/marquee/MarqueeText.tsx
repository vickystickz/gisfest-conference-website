import React from 'react'
import Marquee from "react-fast-marquee";
import { siteConfiguration } from '@/config/siteConfig';

const MarqueeText = () => {
    const {marqueeText} = siteConfiguration     
  return (
        <Marquee pauseOnHover={true} className='laptop:text-h1 text-h5 text-tc-10 stroked-text font-clashDisplay font-p-medium py-32'>
            {marqueeText}
        </Marquee>
  )
}

export default MarqueeText