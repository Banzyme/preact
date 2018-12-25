import React from 'react'

const today = new Date();

const Footer = ()=>{
    return(
        <footer>
            <span>Copyright &copy; <a href="https://www.google.com/">Preact</a> { today.getFullYear() } </span>
        </footer>
        )
}

export default Footer;