import { FC } from "react";
import { ITextInput } from "./types";

export const TextInput:FC<ITextInput> = ({type, value, textUpdate, full}) => {
    return <input
    className={`${full ? 'w-full' : ''} border-2 border-gray-500`}
    type={type}
    value={value}
    onChange={(event) => textUpdate(event.target.value)}
/>
}