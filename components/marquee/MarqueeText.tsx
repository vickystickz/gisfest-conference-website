import React from 'react'
import Marquee from "react-fast-marquee";
import { siteConfiguration } from '@/config/siteConfig';

const MarqueeText = () => {
    const {marqueeText} = siteConfiguration     
  return (
        <Marquee pauseOnHover={true} className='laptop:text-h1 text-h3 text-tc-10 stroked-text stroke-[0.1px] font-clashDisplay font-p-medium '>
            {marqueeText}
        </Marquee>
  )
}

export default MarqueeText