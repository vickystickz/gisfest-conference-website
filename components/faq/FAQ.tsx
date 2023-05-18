import React from 'react'
import { siteConfiguration } from '@/config/siteConfig'
import FAQCard from './FAQCard'

const FAQ = () => {
    const {faq} = siteConfiguration
  return (
    <div className='grid laptop:grid-cols-3 tablet:grid-cols-3 grid-cols-1 gap-8 w-full'>
        {
            faq.map((faq, index) => {
                return(
                    <FAQCard key={index} question={faq.question} answer={faq.answer} />
                )
               
            })
        }

    </div>
  )
}

export default FAQ