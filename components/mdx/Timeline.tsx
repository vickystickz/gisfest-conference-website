import { siteConfiguration } from '@/config/siteConfig';
import Button from '../shared/Button';

export default function Timeline() {
	const { callForSpeakers } = siteConfiguration;
	return (
		<div className="flex laptop:justify-between laptop:flex-row flex-col space-y-4 text-tc-0 font-p-regular text-body laptop:text-h5 markdown-bg">
			<div className="space-y-4">
				<h3>Call Opens: {callForSpeakers.timeline.callOpen}</h3>
				<h3>Call Close: {callForSpeakers.timeline.callClose}</h3>
			</div>
			<div className="self-start">
				<Button
					text={callForSpeakers.sessionSubmissionButton.text}
					route={callForSpeakers.sessionSubmissionButton.route}
					showArrow={true}
					variant="yellow"
				/>
			</div>
		</div>
	);
}
