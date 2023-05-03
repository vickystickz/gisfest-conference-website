import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {

}

const MenuIcon = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.25112 15H19M3.875 9H19"
      stroke="#E4E4E5"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default MenuIcon ;