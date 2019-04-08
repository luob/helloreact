import React, { FC, useState } from "react"
import { RouterStateContext } from "./context"

export const RouterStateProvider: FC = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    const [pathParams, setPathParams] = useState(new Map<string, string>())
    const routerState = {
        currentPath, setCurrentPath, pathParams, setPathParams
    }
    return (
        <RouterStateContext.Provider value={routerState} >
            {children}
        </RouterStateContext.Provider >
    )
}