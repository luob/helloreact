import React, { FC } from "react"

import { Link } from "react-router-dom"

export const AppHeader: FC = ({ }) => {
    return (
        <header className="app__header">
            <Link className="app__header__logo" to="/">Scientific Raligun</Link>
            <ul className="app__header__nav">
                <li className="app__header__nav__item"><Link to="/"></Link></li>
                <li className="app__header__nav__item"><Link to="/about"></Link></li>
                <li ><Link to="/article"></Link></li >
            </ul >
        </header >
    )
}