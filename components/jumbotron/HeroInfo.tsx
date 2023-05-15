import React from 'react'
import LocationIcon from '../icons/LocationIcon';

type THeroText = {
	text: string;
};

export  const HeroText = ({text}: THeroText) => {
  return (
        <div className=' rounded-3xl broder-[1px]  border-transparent w-[148px] h-[48px] bg-gradient-to-r p-[0.15rem] from-yellow-0 via-purple-30 to-red-0'>
            <div className='bg-tc-20 flex items-center justify-center text-white w-full h-full rounded-3xl'>
                <span className='font-p-semibold text-body'>{text}</span>
            </div>
        </div>
  )
}




type THeroLocation = {
	text: string;
    showLocationIcon: boolean;
};

export const HeroLocation = ({text, showLocationIcon}: THeroLocation) => {
  return (
        <div className='border-[1.4px] border-tc-0 bg-blur rounded-[28px] flex gap-[15px] items-center px-8 py-4 justify-center'>
            {
                showLocationIcon &&
                <LocationIcon width={24} height={24} strokeColor={`white`} />
            }
            <span className='text-white text-body font-p-semibold'>{text}</span>
        </div>
  )
}
