import { createContext, FC, useState } from "react";

export interface RouterState {
    currentPath: string
    setCurrentPath: (path: string) => void

    pathParams: Map<string, string>
    setPathParams: (pathParams: Map<string, string>) => void
}

export const RouterStateContext = createContext<RouterState>({
    currentPath: "",
    setCurrentPath: (name: string) => { },
    pathParams: new Map<string, string>(),
    setPathParams: (pathParams: Map<string, string>) => { }
})

// export const Router: FC = ({ children }) => {
//     const [currentPath, setCurrentPath] = useState(window.location.pathname)
//     const [pathParams, setPathParams] = useState(new Map<string, string>())
//     const routerState = {
//         currentPath, setCurrentPath, pathParams, setPathParams
//     }
//     return (
//         <RouterStateContext.Provider value={routerState} >
//             {children}
//         </RouterStateContext.Provider >
//     )
// }
