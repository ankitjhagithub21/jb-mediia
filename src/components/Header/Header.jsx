import React, { useState } from 'react'
import "./Header.css"
import links from '../../data/nav-links';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [active, setActive] = useState(false)
    return (

        <header className='fixed top-0 w-full bg-white shadow-lg'>
            <div className='lg:w-3/4 w-full mx-auto flex justify-between  px-3'>
                <nav className='flex items-center w-full justify-between gap-10'>
                    <div id="logo">
                        <img src="/logo.png" alt="logo" />
                    </div>
                    <ul className={`flex lg:flex-row flex-col  gap-10 ${active ? '' : 'active'}`} id='navbar'>
                        {
                            links.map((link, index) => {
                                return <a href={`#${link.path}`} key={index} className='text-2xl  hover-link' onClick={() => setActive(!active)}>{link.name}</a>
                            })
                        }
                    </ul>


                </nav>
                <button id='menuBtn' className='outline-none' onClick={() => setActive(!active)}>{active ? <IoMdClose size={25} /> : <FiMenu size={25} />}</button>
            </div>
        </header>
    )
}

export default Header