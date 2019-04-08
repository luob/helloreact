import { useContext } from "react"
import { RouterStateContext } from "./context"

export const useRouterGo = (to: string) => {
    return () => {
        const { setCurrentPath } = useContext(RouterStateContext)
        setCurrentPath(to)
        window.history.pushState(null, "", to)
    }
}