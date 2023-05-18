import React from 'react'

type TFAQCard = {
	question: string;
	answer: string;
};

const FAQCard = ({ question, answer}: TFAQCard) => {

  return (
    <div className=' col-span-1 flex flex-col gap-8'>
      <div className=' rounded-lg h-[36px] w-[166px] bg-gradient-to-r p-[1px] from-yellow-0 via-purple-30 to-red-0 '>
                <div className=' bg-[#465263] backdrop-blur-sm flex items-center justify-center text-white w-full h-full rounded-lg'>
                    <span className='laptop:font-p-semibold font-s-medium laptop:text-body text-body-xm'>{question}</span>
                </div>
        </div>
        <p className='text-tc-10 text-body'>
            {answer}
        </p>
    </div>
  )
}

export default FAQCard