
import { conference, navigationLinks } from "@/config/types"
import { HeroLocation, HeroText } from "./HeroInfo";
import Button from "../shared/Button";

type THeroContent = {
	conference: conference;
	buttons: navigationLinks[];
};

const HeroContent = ({ conference, buttons}: THeroContent) => {
  return (
    <div className='z-20 flex-grow flex flex-col gap-24 relative px-24 w-[70rem] mt-32'>
        <div className="flex flex-col gap-8">
            <div className="flex gap-8">
                <HeroText text={`GISfest ${conference.year}`}/>
                <HeroText text={conference.edition}/>
            </div>
            <h1 className="text-h1 text-white font-clashDisplay font-p-semibold ">
                {conference.title}
            </h1>
            <div className="flex gap-8">
                <HeroLocation text={conference.date} showLocationIcon={false} />
                <HeroLocation text={conference.location} showLocationIcon={true} />
            </div>
            <h5 className="text-h5 text-tc-0 laptop:w-[681px]">{conference.description}</h5>
        </div>
        <div className="flex items-center gap-[42px]">
            {
                buttons.map((button, index) => {
                    return  index === 1 ? (
                    button.isActive &&
                        <Button  key={index} text={button.text} route={button.route} showArrow={false} bgColor={'sc-0'} textColor={`tc-0`} borderStyle={'border-[1px] border-tc-30 font-clashDisplay font-p-medium'} />
                    ): (
                        button.isActive &&
                        <Button  key={index} text={button.text} route={button.route} showArrow={true} bgColor={'white'} textColor={`sc-20`} borderStyle={'font-clashDisplay font-p-semibold '} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default HeroContent