'use client';
import { useEffect, useState } from 'react';
import { siteConfiguration } from '@/config/siteConfig';
import Image from 'next/image';
import Button from './Button';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';
import Link from 'next/link';

const Header = () => {
	const { header } = siteConfiguration;
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const handleMobileMenu = () => {
		if (showMobileMenu === false) {
			setShowMobileMenu(!showMobileMenu);
			if (typeof window != 'undefined' && window.document) {
				document.body.style.overflow = 'hidden';
			}
		} else {
			setShowMobileMenu(!showMobileMenu);
			document.body.style.overflow = 'unset';
		}
	};

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 1) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// get Current year
	const year = new Date().getFullYear();

	return (
		<header
			className={`grid z-30 transition delay-100 ease-in-out ${
				isScrolled
					? 'laptop:sticky fixed top-0 left-0 laptop:left-0 laptop:right-0 backdrop-blur-blur'
					: null
			} ${
				showMobileMenu && 'h-full z-50'
			} w-full laptop:grid-cols-12 laptop:w-full tv:max-w-screen-tv tv:mx-auto grid-cols-2 laptop:items-center laptop:px-24 px-6 laptop:py-[22px] tablet:px-14 py-4`}
		>
			<div className="laptop:col-span-2 col-span-1">
				<a href={header.conferenceLogo.route} className="z-50 relative">
					<Image src={header.conferenceLogo.logo} alt="logo" />
				</a>
			</div>
			<div
				className={`fixed laptop:relative z-40  transition-all delay-150 ease-in-out top-0 ${
					showMobileMenu ? 'right-0 left-0  bottom-0 z-40' : 'right-[-120%]'
				} w-full h-screen  laptop:right-0  laptop:h-max  pt-[40%] tablet:pt-[6.5%] laptop:pt-0 laptop:gap-0 gap-24  tablet:gap-8 tablet:px-14 px-6 laptop:px-0 backdrop-blur-blur flex flex-col laptop:backdrop-blur-none laptop:col-span-10 laptop:grid-cols-12 laptop:grid`}
			>
				<div className="col-span-6 w-full tablet:h-[40%] laptop:flex tablet:justify-end laptop:justify-end">
					<ul className="w-full flex h-full flex-col gap-9 tablet:gap-2  laptop:gap-0  laptop:flex-row justify-end items-center">
						{header.navigationLinks.map((link, index) => {
							return (
								link.isActive && (
									<li key={index} className=" px-4 py-3">
										<Link
											href={{ pathname: '/', hash: link.route }}
											className=" text-white font-p-semibold"
											onClick={() => {
												setShowMobileMenu(false);
												document.body.style.overflow = 'unset';
											}}
										>
											{link.text}
										</Link>
									</li>
								)
							);
						})}
					</ul>
				</div>
				<div className="laptop:col-span-6 laptop:relative tablet:flex">
					<div className="w-full justify-end flex-col laptop:flex-row flex gap-6 items-center">
						{header.navigationButtons.map((button, index) => {
							return index === 1
								? button.isActive && (
										<Button
											key={index}
											text={button.text}
											route={button.route}
											showArrow={true}
											otherStyles={'font-p-semibold'}
										/>
								  )
								: button.isActive && (
										<Button
											key={index}
											text={button.text}
											route={button.route}
											showArrow={false}
											otherStyles={'border-[1px] border-tc-30 font-p-semibold'}
										/>
								  );
						})}
					</div>
				</div>
				<span className="laptop:hidden mt-auto pb-7 block w-full text-center bottom-0 relative text-body-xm font-p-medium text-tc-10">
					© {year} GISfest Tech. Team
				</span>
			</div>
			<div className="col-span-1 flex text-center mt-3 laptop:items-center justify-end laptop:hidden">
				<div
					onClick={handleMobileMenu}
					className="transition-all delay-150 ease-in-out z-40"
				>
					{showMobileMenu ? (
						<CloseIcon width={16} height={16} strokeColor={'white'} />
					) : (
						<MenuIcon width={24} height={24} strokeColor={'white'} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
