import React, { FC, useContext } from "react"
import { RouterStateContext } from "../context"

interface Props {
    to: string
}

export const Link: FC<Props> = ({ to, children }) => {
    const { setCurrentPath } = useContext(RouterStateContext)
    const go = () => {
        window.history.pushState(null, "", to)
        setCurrentPath(to)
    }
    return (<>
        <button onClick={go}>{children}</button>
    </>)
}



function go(to: string) {
}

export default Link