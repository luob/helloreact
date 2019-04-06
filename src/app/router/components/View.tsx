import React, { FC, useContext } from "react"
import { RouterStateContext } from "../context"

type ViewProps = {
    routes: Array<Route>,
    noMatch: PageComponent
}

type Route = {
    path: string
    component: PageComponent
}

type PageComponent = FC<{ params?: object }>

export const View: FC<ViewProps> = ({ routes, noMatch }) => {
    const { currentPath } = useContext(RouterStateContext)
    const route = routes.find(route => matchPath(route.path, currentPath))
    const Component = route ? route.component : noMatch
    const params = {}
    return <Component params={params} />
}

function matchPath(path: string, currentPath: string) {
    return path === currentPath
}
