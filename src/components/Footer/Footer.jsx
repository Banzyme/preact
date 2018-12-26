import React from 'react'

const today = new Date();

const Footer = ()=>{
    return(
        <footer>
            <span>&copy; Designed by: <a href="https://www.google.com/">N Nemakhavhani</a> { today.getFullYear() } </span>
        </footer>
        )
}

export default Footer;