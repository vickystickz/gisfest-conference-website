import { siteConfiguration } from '@/config/siteConfig';
import { useCallback, useEffect, useState } from 'react';

export const useTakeAway = () => {
	const { takeAway, takeAwayAutoScrollDelay } = siteConfiguration;
	const [activeIndex, setActiveIndex] = useState(0);

	const handleTitleSwitch = (index: number) => {
		setActiveIndex(index);
	};

	const itemsLength = takeAway.length - 1;

	const checkDirection = useCallback(() => {
		//for auto scroll
		if (activeIndex >= 0 && activeIndex < itemsLength) {
			setActiveIndex((prev) => prev + 1);
		} else if (activeIndex === 2) {
			setActiveIndex(0);
		}
	}, [activeIndex, itemsLength]);

	useEffect(() => {
		const interval = setInterval(() => {
			checkDirection();
		}, takeAwayAutoScrollDelay);

		// This represents the unmount function
		//to prevent memory leaks.
		return () => clearInterval(interval);
	}, [activeIndex, checkDirection, takeAwayAutoScrollDelay]);

	return { handleTitleSwitch, activeIndex };
};
