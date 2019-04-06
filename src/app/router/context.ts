import { createContext } from "react"

export interface RouterState {
    currentPath: string
    setCurrentPath: (name: string) => void
}

export const RouterStateContext = createContext<RouterState>({
    currentPath: "",
    setCurrentPath: (name: string) => { }
})
