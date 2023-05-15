import { siteConfiguration } from "@/config/siteConfig";
import { THeader } from "@/config/types";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
  const { header } = siteConfiguration;
  return (
    <header className="grid z-30 relative laptop:grid-cols-12 tablet:grid-cols-2 items-center pt-[22px] pb-6 px-24">
      <div className="col-span-2">
        <a href={header.conferenceLogo.route}>
          <Image src={header.conferenceLogo.logo} alt="logo" />
        </a>
      </div>
      <div className="col-span-5 w-full flex tablet:justify-end laptop:justify-end">
        <ul className="w-full flex justify-end items-center">
          {header.navigationLinks.map((link, index) => {
            return (
              link.isActive &&
              <li key={index} className=" px-4 py-3">
                <a href={link.route} className=" text-white font-p-semibold">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="col-span-5 tablet:hidden laptop:block flex">
        <div className="w-full justify-end flex gap-6 items-center">
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
                  borderStyle={'font-p-semibold'}
                />
              );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
