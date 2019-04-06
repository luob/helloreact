import React, { FC, useState } from "react"
import { RouterStateContext, RouterState } from "../context"

export const Router: FC = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    const routerState: RouterState = { currentPath, setCurrentPath }
    return (
        <RouterStateContext.Provider value={routerState} >
            {children}
        </RouterStateContext.Provider >
    )
}