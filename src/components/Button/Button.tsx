import { FC } from "react";
import { IButton } from "./types";

export const Button: FC<IButton> = ({ label, secondary, action }) => {
    return <button className={`${secondary ? 'bg-red-500' : 'bg-sky-500'} text-white py-2 px-4 rounded`} onClick={action}>{label}</button>

}