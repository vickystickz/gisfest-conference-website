import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {

}

const CloseIcon = (props: Props) => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.28125 1.28125L12.7187 12.7187"
      stroke="#E4E4E5"
      strokeWidth={1.45238}
    />
    <path
      d="M12.7188 1.28125L1.28125 12.7187"
      stroke="#E4E4E5"
      strokeWidth={1.45238}
    />
  </svg>
);

export default CloseIcon ;