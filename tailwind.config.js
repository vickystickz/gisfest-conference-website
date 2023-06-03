/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			mobile: '375px',
			// => @media (min-width: 375px) { ... }
			tablet: '600px',
			// => @media (min-width: 768px) { ... }
			laptop: '976px',
			// => @media (min-width: 976px) { ... }
			tv: '1600px',
			// => @media (min-width: 1600px) { ... }
		},
		fontFamily: {
			sans: ['var(--font-montserrat)'],
			clashDisplay: ['var(--font-clash-display)'],
		},
		fontSize: {
			//[fontSize, lineHeight]
			h1: [
				'4.235rem', //72px
				'94px',
			],
			h2: [
				'3.176rem', //54px
				'68px',
			],
			h3: [
				'2.353rem', //40px
				'54px',
			],
			h4: [
				'1.765rem', //30px
				'40px',
			],
			h5: [
				'1.353rem', //23px
				'38px',
			],
			body: [
				'1.000rem', //17px
				'24px',
			],
			//sm- small
			'body-sm': [
				'0.765rem', //13px
				'18px',
			],
			//xm-extra small
			'body-xm': [
				'0.588rem', //10px
				'18px',
			],
			//uls - ultra small
			'body-uls': [
				'0.412rem', //7px
				'12px',
			],
		},
		fontWeight: {
			//p-primary
			'p-regular': '400',
			'p-medium': '500',
			'p-semibold': '600',
			'p-bold': '700',
			//s-secondary
			's-regular': '400',
			's-medium': '500',
			's-semibold': '600',
		},
		colors: {
			//global colors
			transparent: 'transparent',
			black: '#000',
			white: '#fff',
			current: 'currentColor',
			// bc - brand color
			//yellow
			yellow: {
				0: '#F5A627',
				10: '#F6AB33',
				20: '#F7B54B',
			},
			//purple
			purple: {
				0: '#712C7D',
				10: '#793884',
				20: '#A36CAD',
				30: '#995CA4',
				40: '#D7578B',
			},
			//red
			red: {
				0: '#CE3573',
				10: '#D1407B',
				20: '#D7578B',
			},
			//green
			green: {
				0: '#206054',
				10: '#2D695D',
				20: '#52837A',
				30: '#AAF527',
			},
			//orange
			orange: {
				0: '#EA580C',
				10: '#E87F3A',
			},
			//sc - surface color
			sc: {
				0: '#0A0A0B',
				10: '#141416',
				20: '#222225',
				30: '#3d3d43',
			},

			// tc - text color
			tc: {
				0: '#E4E4E5',
				10: '#9E9E9F',
				20: '#6D6E6E',
				30: '#616162',
			},
		},
		extend: {
			backgroundImage: {
				cardBgContour: "url('../public/assets/bg-patterns/bg-contour.svg')",
				hero: "url('../public/assets/images/hero-imgage.jpeg')",
				boxPattern: "url('../public/assets/bg-patterns/bg-boxes.svg')",
				gradient:
					'linear-gradient(180.83deg, rgba(10, 10, 11, 0.05) -3.75%, #0A0A0B 92.43%)',
				fullscreenBgContour:
					"url('../public/assets/bg-patterns/screen-bg-contour.png')",
				ctaBGContour: "url('../public/assets/bg-patterns/cta-contour.svg')",
			},
			backdropBlur: {
				blur: '7.5px',
				sm: '2px',
				xs: '0.8px',
			},
		},
		boxShadow: {
			primary: '0px 0px 42px -2px rgba(11, 17, 26, 0.12)',
		},
	},
	plugins: [],
};
