import { TConferenceSpeaker } from "@/config/types";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import Link from 'next/link';

const ConferenceSpeakers = ({ speaker } : TConferenceSpeaker) => {
        return (
            <>
                <div className="flex bg-slate-100 p-8 md:p-0 dark:bg-slate-800">
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <div className="relative rounded-tl-full rounded-br-full rounded-bl-full rounded-tr-2xl h-60 w-60 ring-offset-2 ring-1 ring-orange-0" >
                            <img className="w-full h-full object-scale-down rounded-tl-full rounded-br-full rounded-bl-full rounded-tr-2xl transition duration-300 ease-out transform hover:object-none ring-1 ring-orange-10" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt={speaker.name} />
                            {speaker.avatar}
                            <div className={`absolute bottom-[5%] right-[8%] rounded-full h-10 w-10 bg-black border ${getSocialColor(speaker.sociallink)}`}>
                                <Link
                                    href={speaker.sociallink} >
                                    <div className={`absolute bottom-[25%] right-[23%] ${getSocialColor(speaker.sociallink)}`}>
                                        {getSocialIcon(speaker.sociallink)}
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <figcaption className="font-medium">
                            <div className="text-body font-p-semibold text-tc-0">
                                {speaker.name}
                            </div>
                            <div className="text-tc-10">
                                {speaker.role} @ {speaker.company}
                            </div>
                        </figcaption>
                    </div>
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



