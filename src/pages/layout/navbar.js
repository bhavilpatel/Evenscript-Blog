import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import logo from "../../Assets/logo.svg"
import { Menu } from '@/component/icons';

function Navbar() {
    return (
        <div>
            <header className="header flex flex-wrap justify-between backdrop-blur-lg">
                <nav className="flex flex-wrap justify-between w-[98%] md:w-[96%] py-[10px]">
                    {/* <ul className="flex flex-wrap justify-between items-center"> */}
                    <div>
                        <Link href="/">
                            <li className="p-3 relative text-3xl font-bold flex items-center gap-3">
                                <Image className="h-10 w-10" src={logo} alt={logo} />
                                <span className="text-3xl hidden md:block">
                                    <span className="text-4xl">E</span>VEN
                                    <span className="text-4xl">S</span>CRIPT
                                </span>
                            </li>
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center">
                        <Link href="/write">
                            <li className="bg-gradient-to-r from-pink-700 to-violet-700 inline-block bg-clip-text hover:text-transparent font-normal p-3 text-lg md:block">
                                Write
                            </li>
                        </Link>
                        
                        <Link href="/signup">
                            <li className="bg-gradient-to-r from-pink-700 to-violet-700 inline-block bg-clip-text hover:text-transparent font-normal p-3 text-lg md:block">
                                Sign Up
                            </li>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar