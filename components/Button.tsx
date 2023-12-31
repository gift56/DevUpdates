import { MouseEventHandler } from "react";
import { BiPlus } from "react-icons/bi";

type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  submitting?: boolean | false;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
  className?: string;
};

const Button = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  submitting,
  type,
  bgColor,
  textColor,
  className,
}: Props) => (
  <button
    type={type || "button"}
    disabled={submitting || false}
    className={`flexCenter gap-3 px-4 py-3 
        ${textColor ? textColor : "text-white"} 
        ${
          submitting ? "bg-black/50" : bgColor ? bgColor : "bg-primary-purple"
        } rounded-xl text-base font-medium max-md:w-full hover:opacity-95 transition-all duration-300 disabled:opacity-90 disabled:cursor-not-allowed ${className}`}
    onClick={handleClick}
  >
    {leftIcon && <BiPlus size={25} />}
    {title}
    {/* {rightIcon && (
      <Image src={rightIcon} width={14} height={14} alt="right icon" />
    )} */}
  </button>
);

export default Button;
