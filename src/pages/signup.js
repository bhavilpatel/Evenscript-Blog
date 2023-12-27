import { FacebookIcon, Google, GoogleIcon } from '@/component/icons'
import Link from 'next/link'
import React from 'react'

function signup() {
    return (
        <div className="md:mt-[90px] mt-[90px] justify-center animate-slideUpEnter">
            <div className="flex flex-wrap flex-col justify-center items-center">
                <div className=" w-[98%] md:w-[95%]">
                    <div className="py-6">
                        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="px-8 pt-6 pb-8 mb-4 rounded-3xl">
                                <h2 className="text-center text-2xl font-bold mb-6">Sign up for our service</h2>
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" for="username">
                                            Username
                                        </label>
                                        <input className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" for="email">
                                            Email
                                        </label>
                                        <input className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" for="password">
                                            Password
                                        </label>
                                        <input className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" for="confirm-password">
                                            Confirm Password
                                        </label>
                                        <input className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="Confirm Password" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Link href="/"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline" type="button">
                                            Sign Up
                                        </button>
                                        </Link>
                                    </div>
                                </form>
                                <hr className="my-6 border-gray-300 w-full" />
                                <p className="text-center text-gray-500 text-sm">
                                    Already have an account? <Link href="/logIn" className="text-blue-500 hover:text-blue-700">Log in</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default signup