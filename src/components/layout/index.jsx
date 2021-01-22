import React from 'react'

//Components
import Header from './header'
import Footer from './footer'

import './layout.scss'

//simple layout with header
const Layout = ({children}) => (
        <div id="wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>  
)

export default Layout;