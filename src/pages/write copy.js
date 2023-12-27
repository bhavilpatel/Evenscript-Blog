import React from 'react'
import Image from 'next/image'
import img from '../Assets/Profile4.webp'
import { CopyLink, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/component/icons'


import dynamic from 'next/dynamic';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function write() {
    const [editorState, setEditorState] = React.useState("")
    console.log("editorState :", editorState)
    
    return (
        <div className="mt-[90px] justify-center animate-slideUpEnter">
            <div className="flex flex-wrap flex-col justify-center items-center">
                <div className=" w-[98%] md:w-[95%]">
                    write
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={setEditorState}
                    />

                    <div className="w-[100%] lg:w-[67%] border-[1px] rounded-3xl p-2">
                        <div className="flex flex-wrap justify-center">
                            <div className="flex flex-wrap justify-start items-center gap-5 w-[98%] md:w-[90%]">
                                <div className="w-10 lg:w-16"><Image className="w-[100%] rounded-full" src={img} /></div>
                                <div>
                                    <div className="text-2xl font-bold">Auther Name</div>
                                    <div className="text-lg font-semibold">Date</div>
                                    <div></div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-wrap flex-col justify-center items-center mt-10">
                            <div className="flex flex-wrap text-xl font-semibold w-[90%]">Heading</div>
                        </div>

                        <div className="flex flex-wrap flex-col justify-center items-center mt-5">
                            <div className="flex flex-wrap font-semibold w-[90%]">Sub Heading</div>
                        </div>
                        <div className="flex flex-wrap flex-col justify-center items-center mt-5">
                            <div className="flex flex-wrap w-[98%] md:w-[90%] text-justify">
                                <div className="flex flex-wrap ">

                                    {/* {editorState} */}

                                </div>
                                <div className="flex flex-wrap justify-between w-[100%] items-center">
                                    <div>
                                        <textarea rows="1" placeholder="+Add Your Suggestion" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full" />
                                    </div>
                                    <div className="flex flex-wrap justify-center items-center gap-3 mt-7">
                                        <div className="hover:bg-gradient-to-tl from-[#feda75] via-[#962fbf] to-[#fa7e1e] hover:text-white w-[40px] rounded-md p-1 bg-white"><a href=""><InstagramIcon /></a></div>
                                        <div className="hover:bg-gradient-to-t to-[#17A9FD] from-[#0165E1] hover:text-white w-[40px] rounded-md p-1 bg-white"><a href=""><FacebookIcon /></a></div>
                                        <div className="hover:bg-[#1D9BF0] hover:text-white w-[40px] rounded-md p-1 bg-white"><a href=""><TwitterIcon /></a></div>
                                        <div className="hover:bg-[#0A66C2] hover:text-white w-[40px] rounded-md p-1 bg-white"><a href=""><LinkedinIcon /></a></div>
                                        <div className="hover:bg-[#0A66C2] hover:text-white w-[40px] rounded-md p-1 bg-white"><a href=""><CopyLink /></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default write