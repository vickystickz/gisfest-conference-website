'use client'
import { useEffect, useState } from "react";
import { siteConfiguration } from "@/config/siteConfig";
import { THeader } from "@/config/types";
import Image from "next/image";
import Button from "./Button";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import Link from "next/link";


const Header = () => {
  const { header } = siteConfiguration;
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  const handleMobileMenu = () => {
    if(showMobileMenu === false) {
      setShowMobileMenu(!showMobileMenu);
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
    }else{
      setShowMobileMenu(!showMobileMenu);
      document.body.style.overflow = 'unset';
    }
  }

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


  const showMobileMenuHandler = () => {

  
  }


  // get Current year
    const year = new Date().getFullYear();

  return (
    <header className={`grid z-30 transition-all delay-150 ease-in-out ${isScrolled ? "fixed laptop:left-0 laptop:right-0 backdrop-blur-blur ": null} ${showMobileMenu && "h-full"} w-full laptop:grid-cols-12 laptop:max-w-screen-tv mx-auto grid-cols-2 laptop:items-center laptop:px-24 px-6 laptop:py-[22px] tablet:px-14 py-4`}>
      <div className="laptop:col-span-2 col-span-1 z-40 relative">
        <a href={header.conferenceLogo.route}>
          <Image src={header.conferenceLogo.logo} alt="logo" />
        </a>
      </div>
      <div className={`fixed z-30 laptop:relative transition-all delay-150 ease-in-out ${showMobileMenu ? "right-0 left-0 ": "right-[-120%]"} w-full h-screen  laptop:right-0  laptop:h-max z-20 pt-[30%] tablet:pt-[5.5%] laptop:pt-0 laptop:gap-0 gap-24  tablet:gap-8 tablet:px-14 px-6 laptop:px-0 backdrop-blur-blur flex flex-col laptop:backdrop-blur-none laptop:col-span-10 laptop:grid-cols-12 laptop:grid`}>
        <div className="col-span-6 w-full laptop:flex tablet:justify-end laptop:justify-end ">
          <ul className="w-full flex  flex-col gap-9 tablet:gap-2  laptop:gap-0  laptop:flex-row justify-end items-center">
            {header.navigationLinks.map((link, index) => {
              return (
                link.isActive &&
                <li key={index} className=" px-4 py-3">
                  <Link  href={link.route}  className=" text-white font-p-semibold"
                  onClick={()=>{setShowMobileMenu(false)
                    document.body.style.overflow = 'unset';
                  } }
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="laptop:col-span-6 laptop:relative tablet:flex">
          <div className="w-full justify-end flex-col laptop:flex-row flex gap-6 items-center">
            {header.navigationButtons.map((button, index) => {
                return index === 1 ? (
                  button.isActive && <Button
                    key={index}
                    text={button.text}
                    route={button.route}
                    showArrow={true}
                    bgColor={"white"}
                    textColor={"sc-20"}
                    borderStyle={'font-p-semibold'}
                  />
                ) : (
                  button.isActive && <Button
                    key={index}
                    text={button.text}
                    route={button.route}
                    showArrow={false}
                    bgColor={"sc-20"}
                    textColor={"white"}
                    borderStyle={'border-[1px] border-tc-30 font-p-semibold'}
                  />
                );
            })}
          </div>
        </div>
        <span className="laptop:hidden block w-full text-center bottom-0 relative text-body-xm font-p-medium text-tc-10">© {year} GISfest Tech.</span>
      </div>
      <div className="col-span-1 flex text-center mt-3 laptop:items-center justify-end laptop:hidden z-30 ">
        <div onClick={handleMobileMenu} className="transition-all delay-150 ease-in-out">
          {
            showMobileMenu ?
            <CloseIcon width={16} height={16} strokeColor={"white"} />:
            <MenuIcon width={24} height={24} strokeColor={"white"} />
          }
        </div>
      </div>
        
    </header>
  );
};

export default Header;
