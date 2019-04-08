import React, { FC, useEffect } from "react"

export const Layout: FC = ({ children }) => {
    useEffect(() => {
        console.log("layout rerender")
    })
    useEffect(() => {
        console.log("layout rerender2")
    }, [])
    return (<>
        <p>this is layout wrapper</p>
        {children}
    </>)
}
export const Index: FC = ({ }) => {
    return (
        <Layout>
            <p>hello, this is index page</p>
        </Layout>
    )
}

export const About: FC = ({ }) => {
    return (
        <Layout>
            <p>hello, this is about page</p>
        </Layout>
    )
}

export const Article: FC = ({ }) => {
    return (
        <Layout>
            <p>hello, this is article page</p>
        </Layout>
    )
}