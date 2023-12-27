import Image from 'next/image'
import React from 'react'

import Profile1 from '../Assets/Profile1.webp'
import Profile2 from '../Assets/Profile2.webp'
import Profile3 from '../Assets/Profile3.webp'

import img from '../Assets/Profile4.webp'
import { CopyLink, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/component/icons'
import Link from 'next/link'

function detail() {

    const Trendings = [
        {
            id: 1,
            img: Profile1,
            name: "Arthur Hayes",
            headding: "Exit Liquidity",
            date: "Apr 21",
            time: "27",
        },
        {
            id: 2,
            img: Profile2,
            name: "MartinEdic",
            headding: "Living in Florida Is No Longer Viable",
            date: "Apr 14",
            time: "3",
        },
        {
            id: 3,
            img: Profile3,
            name: "Akilah Hughes",
            headding: "I Hope Frank Ocean is Okay",
            date: "Apr 19",
            time: "7",
        },
    ]

    return (
        <div className="mt-[90px] justify-center animate-slideUpEnter">
            <div className="flex flex-wrap flex-col justify-center items-center">
                <div className=" w-[98%] md:w-[95%]">
                    <div className="mt-10 flex flex-wrap justify-between gap-5">
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
                                    <p className="mt-5">A blog (a truncation of "weblog")[1] is an informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.</p>

                                    <p className="mt-5">The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools that facilitated the posting of content by non-technical users who did not have much experience with HTML or computer programming. Previously, knowledge of such technologies as HTML and File Transfer Protocol had been required to publish content on the Web, and early Web users therefore tended to be hackers and computer enthusiasts. In the 2010s, the majority are interactive Web 2.0 websites, allowing visitors to leave online comments, and it is this interactivity that distinguishes them from other static websites.[2] In that sense, blogging can be seen as a form of social networking service. Indeed, bloggers not only produce content to post on their blogs but also often build social relations with their readers and other bloggers.[3] Blog owners or authors often moderate and filter online comments to remove hate speech or other offensive content. There are also high-readership blogs which do not allow comments.</p>

                                    <p className="mt-5">Many blogs provide commentary on a particular subject or topic, ranging from philosophy, religion, and arts to science, politics, and sports. Others function as more personal online diaries or online brand advertising of a particular individual or company. A typical blog combines text, digital images, and links to other blogs, web pages, and other media related to its topic. Most blogs are primarily textual, although some focus on art (art blogs), photographs (photoblogs), videos (video blogs or "vlogs"), music (MP3 blogs), and audio (podcasts). In education, blogs can be used as instructional resources; these are referred to as edublogs. Microblogging is another type of blogging, featuring very short posts.</p>

                                    <p className="mt-5">'Blog' and 'blogging' are now loosely used for content creation and sharing on social media, especially when the content is long-form and one creates and shares content on regular basis. So, one could be maintaining a blog on Facebook or blogging on Instagram. Blogging is writing about what you like. In other words, writing about what you know and providing valuable information to people searching for it.</p>

                                    <p className="mt-5">A 2022 estimate suggested that there were over 600 million public blogs out of more than 1.9 billion websites.[4]</p>

                                    <p className="mt-5">History</p>
                                    <p className="mt-5">Main articles: History of blogging and online diary</p>

                                    <p className="mt-5">An early example of a "diary" style blog consisting of text and images transmitted wirelessly in real-time from a wearable computer with head-up display, February 22, 1995</p>
                                    <p className="mt-5">The term "weblog" was coined by Jorn Barger[5] on December 17, 1997. The short form "blog" was coined by Peter Merholz, who jokingly broke the word weblog into the phrase we blog in the sidebar of his blog Peterme.com in May 1999.[6][7][8] Shortly thereafter, Evan Williams at Pyra Labs used "blog" as both a noun and verb ("to blog", meaning "to edit one's weblog or to post to one's weblog") and devised the term "blogger" in connection with Pyra Labs' Blogger product, leading to the popularization of the terms.[9]</p>

                                    <p className="mt-5">Origins</p>
                                    <p className="mt-5">Before blogging became popular, digital communities took many forms, including Usenet, commercial online services such as GEnie, Byte Information Exchange (BIX) and the early CompuServe, e-mail lists,[10] and Bulletin Board Systems (BBS). In the 1990s, Internet forum software created running conversations with "threads". Threads are topical connections between messages on a virtual "corkboard".[further explanation needed]</p>

                                    <p className="mt-5">Berners-Lee also created what is considered by Encyclopedia Britannica to be "the first 'blog'" in 1992 to discuss the progress made on creating the World Wide Web and software used for it.[11]</p>

                                    <p className="mt-5">From June 14, 1993, Mosaic Communications Corporation maintained their "What's New"[12] list of new websites, updated daily and archived monthly. The page was accessible by a special "What's New" button in the Mosaic web browser.</p>

                                    <p className="mt-5">The earliest instance of a commercial blog was on the first business to consumer Web site created in 1995 by Ty, Inc., which featured a blog in a section called "Online Diary". The entries were maintained by featured Beanie Babies that were voted for monthly by Web site visitors.[13]</p>

                                    <p className="mt-5">The modern blog evolved from the online diary where people would keep a running account of the events in their personal lives. Most such writers called themselves diarists, journalists, or journalers. Justin Hall, who began personal blogging in 1994 while a student at Swarthmore College, is generally recognized as one of the earlier bloggers,[14] as is Jerry Pournelle.[15] Dave Winer's Scripting News is also credited with being one of the older and longer running weblogs.[16][17] The Australian Netguide magazine maintained the Daily Net News[18] on their web site from 1996. Daily Net News ran links and daily reviews of new websites, mostly in Australia.</p>

                                    <p className="mt-5">Another early blog was Wearable Wireless Webcam, an online shared diary of a person's personal life combining text, digital video, and digital pictures transmitted live from a wearable computer and EyeTap device to a web site in 1994. This practice of semi-automated blogging with live video together with text was referred to as sousveillance, and such journals were also used as evidence in legal matters. Some early bloggers, such as The Misanthropic Bitch, who began in 1997, actually referred to their online presence as a zine, before the term blog entered common usage.</p>

                                    <p className="mt-5">The first research paper about blogging was Torill Mortensen and Jill Walker Rettberg's paper "Blogging Thoughts",[19] which analysed how blogs were being used to foster research communities and the exchange of ideas and scholarship, and how this new means of networking overturns traditional power structures.</p>

                                    <p className="mt-5">Technology</p>
                                    <p className="mt-5">Early blogs were simply manually updated components of common Websites. In 1995, the "Online Diary" on the Ty, Inc. Web site was produced and updated manually before any blogging programs were available. Posts were made to appear in reverse chronological order by manually updating text-based HTML code using FTP software in real time several times a day. To users, this offered the appearance of a live diary that contained multiple new entries per day. At the beginning of each new day, new diary entries were manually coded into a new HTML file, and at the start of each month, diary entries were archived into their own folder, which contained a separate HTML page for every day of the month. Then, menus that contained links to the most recent diary entry were updated manually throughout the site. This text-based method of organizing thousands of files served as a springboard to define future blogging styles that were captured by blogging software developed years later.[13]</p>

                                    <p className="mt-5">The evolution of electronic and software tools to facilitate the production and maintenance of Web articles posted in reverse chronological order made the publishing process feasible for a much larger and less technically-inclined population. Ultimately, this resulted in the distinct class of online publishing that produces blogs we recognize today. For instance, the use of some sort of browser-based software is now a typical aspect of "blogging". Blogs can be hosted by dedicated blog hosting services, on regular web hosting services, or run using blog software.</p>

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

                        <div className="w-[100%] lg:w-[29%] border-[1px] rounded-3xl p-2"></div>
                    </div>

                    <div className="flex flex-wrap mt-5 gap-y-5 md:gap-y-7 lg:gap-y-10 justify-between">
                        {Trendings.map((on, index) => (
                            <div key={index} className="p-3 w-[100%] md:w-[49%] lg:w-[31%] flex gap-3 ">
                                <div className="text-5xl font-extrabold opacity-50">{on.id}.</div>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-7"><Image className="w-[100%] rounded-full" src={on.img} width={1000} height={0} /></div>
                                        <div className="text-xl font-bold">{on.name}</div>
                                    </div>
                                    <Link href="/detail">
                                        <p className="mt-1">{on.headding}</p>
                                    </Link>
                                    <div className="flex gap-3 mt-2">
                                        <div>{on.date}</div>
                                        <span> • </span>
                                        <div>{on.time} Min read</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default detail