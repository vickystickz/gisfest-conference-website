import { siteConfiguration } from "@/config/siteConfig"
import Image from "next/image"
import rectangle from '../../public/assets/icons/rectangle-shape.svg'
import rectangleMobile from '../../public/assets/icons/rectangle-shape-mobile.svg'

const   About = () => {
  const {about} = siteConfiguration
  return (
    <div className=' bg-sc-10 relative w-full laptop:rounded-[32px] rounded-2xl'>
      <div className=" laptop:px-24 laptop:py-[80px] tablet:py-10 tablet:px-8 px-4 py-6 flex flex-col gap-5 relative overflow-clip bg-boxPattern bg-contain bg-center laptop:rounded-[32px] rounded-2xl  w-full">
        {
            about.description.map((paragraph, index) => {
                return(
                    <p key={index} className=" laptop:text-h4 tablet:text-h5 text-body text-tc-10 font-clashDisplay font-p-medium ">
                        {paragraph}
                    </p>    
                )
            })
        }
        <Image src={rectangle} alt="box-4" className="laptop:block tablet:block hidden absolute left-5 top-5 h-[17.23px] w-[17.23px]" />
        <Image src={rectangle} alt="box-3" className=" laptop:block tablet:block hidden  absolute right-8 bottom-10 h-[34.24px] w-[38.24]" />
        <Image src={rectangle} alt="box-2" className=" absolute right-[-0.5rem] bottom-[-0.2rem] laptop:left-[-15px] laptop:bottom-[-45px] laptop:rotate-45 laptop:h-auto laptop:w-auto h-[38.24px] w-[38.24px]" />
        <Image src={rectangleMobile} alt="box-2" className=" absolute right-[-0.5rem] bottom-[-0.2rem] laptop:hidden laptop:left-[-15px] laptop:bottom-[-45px] laptop:rotate-45 laptop:h-auto laptop:w-auto h-[38.24px] w-[38.24px]" />
      </div>
      <Image src={rectangle} alt="box-1" className=" absolute top-[-2rem] right-[2rem] laptop:top-[-4rem] laptop:right-[6rem] laptop:h-auto laptop:w-auto h-[44.55px] w-[44.55px]" />
      <Image src={rectangleMobile} alt="box-1" className=" absolute top-[-2rem] right-[2rem] laptop:hidden laptop:top-[-4rem] laptop:right-[6rem] laptop:h-auto laptop:w-auto h-[44.55px] w-[44.55px]" />
    </div>
  )
}

export default About