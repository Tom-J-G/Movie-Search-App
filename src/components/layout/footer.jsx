import React from 'react'

const Footer = () => {

    const getYear = () => new Date().getFullYear();

    return (
        <footer>
            <div>© {getYear()}</div>
        </footer>
    )
}

export default Footer
