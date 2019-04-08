import React, { FC, useState, useEffect } from "react"
import { RouterStateContext } from "../context"

export const Router: FC = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    const [pathParams, setPathParams] = useState(new Map<string, string>())
    const routerState = {
        currentPath, setCurrentPath, pathParams, setPathParams
    }

    useEffect(() => {
        window.addEventListener("popstate", (state) => {

        })
    })
    return (
        <RouterStateContext.Provider value={routerState} >
            {children}
        </RouterStateContext.Provider >
    )
}