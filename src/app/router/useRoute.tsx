import React, { FC, useContext } from "react"
import { RouterStateContext } from "./context"
import { string } from "prop-types";

type Routes = Array<{
    path: string
    component: FC
}>

// const useRoute = (routes: Routes) => {
//     const { currentPath, setPathParams } = useContext(RouterStateContext)

//     const route = routes.findIndex(route => matchPath(route.path, currentPath))
//     return { currentPath }
// }

function matchPath(path: string, currentPath: string) {
    const params = new Map<string, string>()

    const currentPathItems = path.split("/")

    const matched = path.split("/").every((pathItem, index) => {
        const currentPathItem = currentPathItems[index]
        if (pathItem.startsWith(":")) {
            const key = pathItem.substring(1)
            params.set(key, currentPathItem)
            return true
        }
        return pathItem === currentPathItem
    })

    return params
}
