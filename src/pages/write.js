import React, { Component, useState } from "react";
import Image from 'next/image'
import img from '../Assets/Profile4.webp'
import { CopyLink, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/component/icons'


import ReactDOM from "react-dom";
import { convertToRaw, EditorState, convertFromRaw } from "draft-js";
import draftToHtmlPuri from "draftjs-to-html";
import { convertToHTML } from "draft-convert";
import { stateToHTML } from "draft-js-export-html";
import draftToHtml from 'draftjs-to-html';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import dynamic from 'next/dynamic';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const parser = require('html-react-parser');

function write() {
    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty(),)


    // console.log("editorState :", editorState.getCurrentContent().getBlocksAsArray())
    const [editorValue, setEditorValue] = React.useState(
        ""
    )
    const handleChange = (editorState) => {
        // const contentState = stateToHTML(editorState.getCurrentContent())
        const contentState = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        // JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        // console.log(contentState)
        // console.log(contentState)
        setEditorValue(contentState.toString())


    }



    return (
        <div className="mt-[90px] justify-center animate-slideUpEnter" >
            <div className="flex flex-wrap flex-col justify-center items-center">
                <div className=" w-[98%] md:w-[95%]">
                    write
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={editorState => {
                            setEditorState(editorState)
                            handleChange(editorState)
                        }}
                    />
                    {/* <Editor
                        readOnly={true}
                    /> */}

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
                                <div className="flex flex-wrap">

                                   <p className="break-all   ">{parser(editorValue)}<br /></p>

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

                {/* <React.Fragment>
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={editorState => {
                            setEditorState(editorState);
                            handleChange(editorState);
                        }}
                        toolbar={{
                            options: [
                                "inline",
                                "fontSize",
                                "fontFamily",
                                "textAlign",
                                "colorPicker",
                                "link",
                                "remove",
                                "history"
                            ],
                            inline: {
                                inDropdown: false,
                                options: ["bold", "italic", "underline"]
                            }
                        }}
                    />
                    <div>
                        <p>puri</p>
                        <textarea disabled value={htmlPuri} /> 
                        <div
                            dangerouslySetInnerHTML={{
                                __html: htmlPuri
                            }}
                        /> 
                    </div>
                     <div>
           <p>draft-convert</p>
           <textarea disabled value={htmlDraftConvert} />
           <div
             dangerouslySetInnerHTML={{
               __html: htmlDraftConvert
             }}
           />
         </div> 
                    <div className="w-96 border-2">
                        <p>draft-convert</p>


                        <p className="break-words">{editorValue.blocks?.map(ele => ele.text)}<br /></p>
                       {console.log(editorValue)} 
                       <textarea disabled value={html} />
                        <div
                            dangerouslySetInnerHTML={{
                                __html: html
                            }}
                        /> 
                    </div>
                </React.Fragment> */}

            </div>
        </div >
    )
}
export default write









// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { convertToRaw, EditorState } from "draft-js";
// import draftToHtmlPuri from "draftjs-to-html";
// import { convertToHTML } from "draft-convert";
// import { stateToHTML } from "draft-js-export-html";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// /*
//  * https://github.com/HubSpot/draft-convert
//  * https://github.com/sstur/draft-js-utils/tree/master/packages/draft-js-export-html
//  * */
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty()
//     };
//   }

//   onEditorStateChange = editorState => {
//     this.setState({ editorState });
//   };

//   render() {
//     const { editorState } = this.state;
//     const htmlPuri = draftToHtmlPuri(
//       convertToRaw(this.state.editorState.getCurrentContent())
//     );
//     // const styles = {};
//     // const htmlDraftConvert = convertToHTML({
//     //   styleToHTML: (...style) => {
//     //     console.log(style);
//     //     // if (style.includes("fontsize-")) {
//     //     //   styles.fontSize = `${style.split("-")[1]}px`;
//     //     // }

//     //     // if (style.includes("fontfamily-")) {
//     //     //   styles.fontFamily = style.split("-")[1];
//     //     // }
//     //     // console.log(styles);
//     //     // return <span style={styles} />;
//     //   },
//     //   blockToHTML: a => console.log(a)
//     // })(this.state.editorState.getCurrentContent());

//     const html = stateToHTML(this.state.editorState.getCurrentContent(), {
//       inlineStyleFn: styles => {
//         let key = "color-";
//         let color = styles.filter(value => value.startsWith(key)).first();
//         let a = "fontfamily-";
//         let b = styles.filter(value => value.startsWith(a)).first();
//         console.log(b, color);

//         if (color) {
//           return {
//             element: "span",
//             style: {
//               color: color.replace(key, ""),
//               fontFamily: b.replace(a, "")
//             }
//           };
//         }
//       }
//     });

//     return (
//       <React.Fragment>
//         <Editor
//           editorState={editorState}
//           onEditorStateChange={this.onEditorStateChange}
//           toolbar={{
//             options: [
//               "inline",
//               "fontSize",
//               "fontFamily",
//               "textAlign",
//               "colorPicker",
//               "link",
//               "remove",
//               "history"
//             ],
//             inline: {
//               inDropdown: false,
//               options: ["bold", "italic", "underline"]
//             }
//           }}
//         />
//         <div>
//           <p>puri</p>
//           <textarea disabled value={htmlPuri} />
//           <div
//             dangerouslySetInnerHTML={{
//               __html: htmlPuri
//             }}
//           />
//         </div>
//         {/* <div>
//           <p>draft-convert</p>
//           <textarea disabled value={htmlDraftConvert} />
//           <div
//             dangerouslySetInnerHTML={{
//               __html: htmlDraftConvert
//             }}
//           />
//         </div> */}
//         <div>
//           <p>draft-convert</p>
//           <textarea disabled value={html} />
//           <div
//             dangerouslySetInnerHTML={{
//               __html: html
//             }}
//           />
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
