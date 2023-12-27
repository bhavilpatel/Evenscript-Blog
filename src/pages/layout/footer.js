import Link from 'next/link'
import React from 'react'


function Footer() {
    return (
        <div className="mt-[20px] justify-center animate-slideUpEnter">
            <div className="flex flex-wrap flex-col justify-center items-center bg-white">
                <div className=" w-[98%] md:w-[95%]">

                    <hr />
                    <div className="flex flex-wrap justify-around py-10 items-center font-semibold text-xl">
                        <div className="text-center mt-3">© 2023 Evenscript. All Rights Reserved.</div>
                        <div className="text-center mt-3">
                            <div className="w-64 relative group">
                                <div className="bg-white text-black">Contact Us</div>
                                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end bg-white text-black">blog@evenscript.gmail.com</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center gap-5 mt-3">
                            <div><Link href="/terms&conditions" className="hover:text-blue-500">Terms & Conditions</Link></div>
                            <div className=""> | </div>
                            <div><Link href="/privacy&policy" className="hover:text-blue-500">Privacy & Policy</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer