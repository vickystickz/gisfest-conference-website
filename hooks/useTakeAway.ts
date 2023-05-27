import { siteConfiguration } from '@/config/siteConfig';
import { useCallback, useEffect, useState } from 'react';

export const useTakeAway = () => {
	const { takeAway, takeAwayAutoScrollDelay } = siteConfiguration;
	const [activeIndex, setActiveIndex] = useState(0);

	const handleTitleSwitch = (index: number) => {
		setActiveIndex(index);
	};

	let touchstartX = 0;
	let touchendX = 0;
	const itemsLength = takeAway.length - 1;
	const checkDirection = useCallback(() => {
		//for touch events
		if (touchendX < touchstartX && activeIndex < itemsLength) {
			//swiped left
			setActiveIndex(activeIndex + 1);
		}
		if (touchendX > touchstartX && activeIndex > 0) {
			//swiped right
			setActiveIndex(activeIndex - 1);
		}

		//for auto scroll
		if (activeIndex >= 0 && activeIndex < itemsLength) {
			setActiveIndex((prev) => prev + 1);
		} else if (activeIndex === 2) {
			setActiveIndex(0);
		}
	}, [activeIndex, touchendX, touchstartX, itemsLength]);

	const handleTouchStart = (e: any) => {
		touchstartX = e.changedTouches[0].screenX;
	};

	const handleTouchEnd = (e: any) => {
		touchendX = e.changedTouches[0].screenX;
		checkDirection();
	};

	//auto scroll

	useEffect(() => {
		const interval = setInterval(() => {
			checkDirection();
		}, takeAwayAutoScrollDelay);

		// This represents the unmount function
		//to prevent memory leaks.
		return () => clearInterval(interval);
	}, [activeIndex, checkDirection, takeAwayAutoScrollDelay]);

	return { handleTouchEnd, handleTitleSwitch, handleTouchStart, activeIndex };
};
