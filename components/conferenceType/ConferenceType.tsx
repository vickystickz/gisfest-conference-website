import React from 'react'
import { siteConfiguration } from '@/config/siteConfig'
import Image from 'next/image'

const ConferenceType = () => {
  const {conferenceType} = siteConfiguration
  return (
    <div className='grid laptop:grid-cols-2 tablet:grid-cols-2 grid-cols-1 relative  items-center'>
        <div className='col-span-1 flex flex-col gap-8 laptop:w-[631px] w-[90%]'>
            <h2 className='text-tc-0 font-clashDisplay laptop:text-h2 tablet:text-h4 text-h5 font-p-semibold'>{conferenceType.title}</h2>
            <p className='text-tc-10 laptop:text-h5 text-'>{conferenceType.question}</p>
        </div>
        <Image src={conferenceType.picture} alt='conference-type' className='h-auto w-full'/>
    </div>
  )
}

export default ConferenceType