import { useContext } from "react"
import { RouterStateContext } from "./context";

const usePathParam = (key: string) => {
    const { pathParams } = useContext(RouterStateContext)
    return pathParams.get(key)
}