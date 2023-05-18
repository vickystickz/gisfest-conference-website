
import { conference, navigationLinks } from "@/config/types"
import { HeroLocation, HeroText } from "./HeroInfo";
import Button from "../shared/Button";

type THeroContent = {
	conference: conference;
	buttons: navigationLinks[];
};

const HeroContent = ({ conference, buttons}: THeroContent) => {
  return (
    <div className='z-20 flex-grow flex flex-col laptop:gap-24 gap-14 tablet:gap-12  w-full relative h-full laptop:mt-[3%] tablet:mt-[3%] px-3 laptop:px-24 tablet:px-14 max-w-screen-tv mx-auto'>
        <div className="flex flex-col laptop:gap-[2rem] tablet:gap-[2rem] gap-2">
            <div className="flex gap-8">
                <HeroText text={`GISfest ${conference.year}`}/>
                <HeroText text={conference.edition}/>
            </div>
            <h1 className="laptop:text-h1 tablet:text-h2 text-h4 laptop:leading-[92px] laptop:max-w-[770px] tablet:w-[70%] w-[95%] text-white font-clashDisplay laptop:font-p-semibold font-p-medium ">
                {conference.title}
            </h1>
            <div className="flex flex-col laptop:flex-row tablet:flex-row laptop:gap-8 gap-2 laptop:p-0 tablet:p-0 pb-[32px] pt-5">
                <HeroLocation text={conference.date} showLocationIcon={false} />
                <HeroLocation text={conference.location} showLocationIcon={true} />
            </div>
            <h5 className="laptop:text-h5 text-body leading-6 text-tc-0 laptop:w-[681px] tablet:w-[60%]">{conference.description}</h5>
        </div>
        <div className="flex laptop:flex-row tablet:flex-row flex-col items-center z-0 relative gap-[42px] tablet:w-[500px]">
            {
                buttons.map((button, index) => {
                    return  index === 1 ? (
                    button.isActive &&
                        <Button  key={index} text={button.text} route={button.route} showArrow={false} bgColor={'bg-sc-0'} textColor={`tc-0`} borderStyle={'border-[1px] border-tc-30 font-clashDisplay font-p-medium'} />
                    ): (
                        button.isActive &&
                        <Button  key={index} text={button.text} route={button.route} showArrow={true} bgColor={'bg-white'} textColor={`sc-20`} borderStyle={'font-clashDisplay font-p-semibold '} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default HeroContent