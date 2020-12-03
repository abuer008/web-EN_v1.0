import Menu from './Menu'
import {Main, NextScript} from "next/document";

const Layout = ({ children }) => {

    return (
        <>
            <Menu />
            {children}
        </>
    )
}

export default Layout