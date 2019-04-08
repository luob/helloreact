import React from "react"
// interface Props {
//     to: string
// }

// export const Link: FC<Props> = ({ to, children }) => {
//     const { setCurrentPath } = useContext(RouterStateContext)
//     const go = () => {
//         window.history.pushState(null, "", to)
//         setCurrentPath(to)
//     }
//     return (<>
//         <button onClick={go}>{children}</button>
//     </>)
// }



// export default Link

// type ViewProps = {
//     routes: Routes
// }

// type Routes = Array<{
//     path: string
//     component: FC
// }>

// export const View: FC<ViewProps> = ({ routes }) => {
//     const { currentPath } = useContext(RouterStateContext)
//     const route = routes.find(route => matchPath(route.path, currentPath))

//     const Page = route ? route.component : routes[routes.length - 1].component
//     return <Page />
// }