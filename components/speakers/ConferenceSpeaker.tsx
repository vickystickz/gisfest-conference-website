import { TConferenceSpeaker } from "@/config/types";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import Link from 'next/link';

const ConferenceSpeakers = ({ speaker } : TConferenceSpeaker) => {
        return (
            <>
                <div className="flex flex-col items-center text-center">
                    <div className="relative rounded-tl-[240px] rounded-br-[240px] rounded-bl-[240px] rounded-tr-2xl h-[175.75px] w-[176.19px]  bg-gradient-to-r p-[1.8px] from-[#F5A627] via-[#995CA4] to-[#CE3573]" >
                        <div className="bg-cover rounded-tl-[240px] rounded-br-[240px] rounded-bl-[240px] rounded-tr-2xl w-full h-full transition-all duration-700 hover:bg-center border border-l-yellow-20 border-b-purple-20 border-t-red-0 border-r-red-0 ring-1 ring-white bg-[url('https://s3-alpha-sig.figma.com/img/1f69/c0fc/fc5c26b71c587dc72a38eb1e10763f58?Expires=1685923200&Signature=QOSBoVlWsqVHmk-6bQni1HHQ467obQNr8TuZl1lZ1TzS2WOZT66mjQRtZ3NhlvF5lUT-sFvILm5m0~EvU~WSUIiZYiy29~GqTI5OlNnndqVXzRUKOfHSpxTyZIHbyRNh5qTQulp5F-nEhgRGxABw8-KNSlyRhu9B0vajv8nhLg36ai69bMO9OFi~3UXtFSWk7UKHVrQeYZV8~hOCBdWfXWEZSqx897QO8G~jD~AFUlqSQhJD1nXimKwrzbifbqw80tn3wTtg~V~B5Rhndp-kmGWOGtsg~xjn88k-mFeS7Qgjaau99WG32thmoYEMqUqRMNBgQTnQirgWKkVqt5SnWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]"></div>
                        <div className={`absolute bottom-[5%] right-[8%] rounded-full h-10 w-10 bg-black border ${getSocialColor(speaker.sociallink)}`}>
                            <Link
                                href={speaker.sociallink} >
                                <div className={`absolute bottom-[25%] right-[23%] ${getSocialColor(speaker.sociallink)}`}>
                                    {getSocialIcon(speaker.sociallink)}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <figcaption className="p-5 font-medium">
                        <div className="text-body font-p-semibold text-tc-0">
                            {speaker.name}
                        </div>
                        <div className="text-tc-10">
                            {speaker.role} @ {speaker.company}
                        </div>
                    </figcaption>
                </div>
        </>
        )
    }

export default ConferenceSpeakers;
    
const getSocialIcon = (socialLink: string) => {
  if (socialLink.includes('twitter.com')) {
    return <TwitterIcon width={20} height={20} strokeWidth={1}/>;
  } else if (socialLink.includes('linkedin.com')) {
    return <LinkedInIcon width={20} height={20} strokeWidth={1}/>;
  } else {
    return null;
  }
}

const getSocialColor = (socialLink: string) => {
    if (socialLink.includes('twitter.com')) {
      return "text-yellow-20";
    } else if (socialLink.includes('linkedin.com')) {
      return "text-purple-40";
    } else {
      return null;
    }
  }



