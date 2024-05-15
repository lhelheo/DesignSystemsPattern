// TODO: Corrigir passagem de width e margin de maneira a alterar a largura do botão

import React, { ElementType, ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonRiseTactProps = {
    children?: ReactNode;
    // icon?: ElementType;
    width?: string;
    variant: "primary-500" | "primary-300" | "primary-700" | "secondary-500" | "neutral-500" | "white-500" | "black-500" | "danger-500";
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    margin?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant: ButtonRiseTactProps['variant'], disabled: boolean | undefined) {
    switch (variant) {
        case "primary-500":
            return "bg-primary-500 text-white-500 hover:bg-secondary-500"
        case "primary-300":
            return "bg-primary-300 text-white-500 hover:bg-primary-500 hover:text-white-500"
        case "primary-700":
            return "bg-primary-700 text-white-500 hover:bg-secondary-500"
        case "secondary-500":
            return "bg-secondary-500 text-white-500 hover:bg-primary-500"
        case "neutral-500":
            return "bg-neutral-500 text-white-500 hover:bg-primary-500"
        case "white-500":
            return "bg-white-500 text-secondary-500 hover:bg-primary-500 hover:text-white-500"
        case "black-500":
            return "bg-black-500 text-white-500 hover:bg-primary-500"
        case "danger-500":
            return "bg-danger-500 text-white-500 hover:bg-danger-500"
        }
}

// const haveIcon = (icon: ButtonRiseTactProps['icon']) => {
//     return icon ? 'flex items-center justify-center' : '';
// }

const ButtonRiseTact = (props: ButtonRiseTactProps) => {
    const defaultStyle =
      "px-4 py-2 font-medium shadow rounded-sm ease-linear transition-all cursor-pointer text-base disabled:cursor-not-allowed";
  
    return (
      <button
        type={props.type || "button"}
        // className={`${defaultStyle} ${getVariant(props.variant, props.disabled)} ${props.width || "w-full"} ${haveIcon(props.icon)} ${props.margin || "m-0"}`}
        className={`${defaultStyle} ${getVariant(props.variant, props.disabled)} ${props.width || "w-full"} ${props.margin || "m-0"}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {/* {props.icon && <props.icon size={20} />} */}
        {props.children}
      </button>
    );
  };

export default ButtonRiseTact;
