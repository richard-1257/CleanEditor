import { Dispatch, SetStateAction } from "react"
export type EditorTheme = 'light' | 'dark';
 
export interface IState{
    html: string
    css: string
}

export interface IContext{
    state: IDBRequestReadyState
    dispatch: Dispatch<SetStateAction<IState>>
}