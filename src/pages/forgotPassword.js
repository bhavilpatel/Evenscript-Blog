import Link from 'next/link'
import React from 'react'

function forgotPassword() {
    return (
        <div className="mt-[60px] justify-center animate-slideUpEnter">
            <div className="flex flex-wrap flex-col justify-center items-center">
                <div className=" w-[98%] md:w-[95%]">
                    <div class="flex flex-col items-center justify-center min-h-screen">
                        <div class="w-full max-w-md px-6 py-8 rounded-lg">
                            <h2 class="text-2xl font-bold mb-4">Forgot Password</h2>
                            <form class="space-y-4">
                                <div>
                                    <label for="email" class="block text-gray-700 font-bold mb-2">Email Address</label>
                                    <input id="email" type="email" class="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500" required />
                                </div>
                                <div>
                                    <Link href="/"><button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Reset Password</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default forgotPassword