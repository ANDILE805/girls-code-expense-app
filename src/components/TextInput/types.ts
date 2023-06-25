import { HTMLInputTypeAttribute } from "react";

export interface ITextInput {
    type: HTMLInputTypeAttribute,
    value: string;
    textUpdate: (text: string) => void
    full?: boolean
}