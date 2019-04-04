import * as React from "react"
import { Header } from "./components/header"

function Front(props) {
    const Page = props.children
    return (
        <>
            <Header />
            {Page}
        </>
    )
}

export { Front }
