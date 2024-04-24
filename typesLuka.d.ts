import { ReactNode } from "react"

export interface IMiddlewareConfig {
    matcher: string[]
}

export interface IError {
    // ერორის კომპონენტი სტანდარტულია და იღებს გარკვეულ პროპებს რომელიც გამოყენების მიხედვით optional ტაიპად დაემატება
    reset?: () => void;
}

export type MetaDataTranslationsType = Record<string, Record<string, Record<string, string>>>
export type ChildrenProp = { children: ReactNode }
export type UserInfoType = Record<string, string>
