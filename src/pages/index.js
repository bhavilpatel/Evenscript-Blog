import React from 'react'
import Link from 'next/link'
import { Save, Tranding } from '@/component/icons'

import Image from 'next/image'
import Profile1 from '../Assets/Profile1.webp'
import Profile2 from '../Assets/Profile2.webp'
import Profile3 from '../Assets/Profile3.webp'
import Profile4 from '../Assets/Profile4.webp'
import Profile5 from '../Assets/Profile5.webp'
import Profile6 from '../Assets/Profile6.webp'

import Bloger1 from '../Assets/Bloger1.webp'
import Bloger2 from '../Assets/Bloger2.webp'
import Bloger3 from '../Assets/Bloger3.webp'
import Bloger4 from '../Assets/Bloger4.webp'
import Bloger5 from '../Assets/Bloger5.webp'

function index() {

  const imageLoader = (src) => {
    return (src);
  }

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
    {
      id: 4,
      img: Profile4,
      name: "Keith McNulty",
      headding: "Here’s How Two New Orleans Teenagers Found a New Proof of the Pythagorean",
      date: "Apr 9",
      time: "7",
    },
    {
      id: 5,
      img: Profile5,
      name: "Alexander Nguyen",
      headding: "Why I Keep Failing Candidates During Google Interviews",
      date: "Apr 13",
      time: "4",
    },
    {
      id: 6,
      img: Profile6,
      name: "Behdad Esfahbod",
      headding: "On a great interview question",
      date: "Apr 13",
      time: "6",
    },
  ]


  const blogs = [
    {
      id: 1,
      img: Profile3,
      name: "Kaki Okumura",
      headding: "6 powerful lessons from Japan that helped me heal my health",
      description: "Health which no longer feels like treading water, simply leaning back and floating",
      date: "Apr 19",
      time: "6",
      img2: Bloger1,
      tags: ["sd", "sad", "fsd", "erw", "fdv", "refdg", "xcvh", "ertj", "werg", "yuj", "ert", "as", "sdf"]
    },
    {
      id: 2,
      img: Profile4,
      name: "Donald G. McNeil Jr.",
      headding: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
      description: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
      date: "Apr 27",
      time: "18",
      img2: Bloger2,
      tags: ["sdf", "efsd", "sdf", "asdfs", "weqr", "sd", "xzc", "ewr", "s", "rgrd", "sad", "rf", "asd", "efr", "rged", "erg", "dfgd"]
    },
    {
      id: 3,
      img: Profile1,
      name: "UX Collective Felicia Wu in UX Collective",
      headding: "My first layoff was the best thing that could happen to my career",
      description: "I expect the recent layoff to be no different. Here’s the approach I’m taking for the best that’s yet to come.",
      date: "Apr 25",
      time: "7",
      img2: Bloger3,
      tags: ["dfdfg", "ertse", "dfgg", "re", "fds", "tybn", "cvx", "wer"]
    },
    {
      id: 4,
      img: Profile5,
      name: "Medium Staff",
      headding: "What we’re reading: Declutter your brain",
      description: "A few Medium stories you may have missed this week",
      date: "Apr 28",
      time: "5",
      img2: Bloger4,
      tags: ["dfd", "r", "fdg", "cvb", "nth", "dfv", "wqer", "ynt"]
    },
    {
      id: 5,
      img: Profile2,
      name: "Sybarite Jay Sillings in Sybarite",
      headding: "Starting A New Hobby: What My Research Shows",
      description: "Disclaimer: I haven’t done any formal research on this (or any) subject. You will find no evidence of systematic investigation or",
      date: "May 1",
      time: "6",
      img2: Bloger5,
      tags: ["zfdg", "aSDF", "ASD", "dverg", "trht", "rgg", "rtgd", "erdf"]
    },
    {
      id: 6,
      img: Profile3,
      name: "Kaki Okumura",
      headding: "6 powerful lessons from Japan that helped me heal my health",
      description: "Health which no longer feels like treading water, simply leaning back and floating",
      date: "Apr 19",
      time: "6",
      img2: Bloger1,
      tags: ["frd", "er", "f", "4rwe", "sdf", "vxc", "hgf", "rtgf"]
    },
    {
      id: 7,
      img: Profile4,
      name: "Donald G. McNeil Jr.",
      headding: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
      description: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
      date: "Apr 27",
      time: "18",
      img2: Bloger2,
      tags: ["fdg", "tyh", "ewr", "xzc", "fgb", "yj", "xcv", "tyd"]
    },
    {
      id: 8,
      img: Profile1,
      name: "UX Collective Felicia Wu in UX Collective",
      headding: "My first layoff was the best thing that could happen to my career",
      description: "I expect the recent layoff to be no different. Here’s the approach I’m taking for the best that’s yet to come.",
      date: "Apr 25",
      time: "7",
      img2: Bloger3,
      tags: ["drfgcv", "retd", "er", "rtgf", "yjgn", "dsxx", "rt", "thfg"]
    },
    {
      id: 9,
      img: Profile5,
      name: "Medium Staff",
      headding: "What we’re reading: Declutter your brain",
      description: "A few Medium stories you may have missed this week",
      date: "Apr 28",
      time: "5",
      img2: Bloger4,
      tags: ["er", "xcv", "ghn", "xvc", "hmg", "tre", "xcv", "thg"]
    },
    {
      id: 10,
      img: Profile2,
      name: "Sybarite Jay Sillings in Sybarite",
      headding: "Starting A New Hobby: What My Research Shows",
      description: "Disclaimer: I haven’t done any formal research on this (or any) subject. You will find no evidence of systematic investigation or",
      date: "May 1",
      time: "6",
      img2: Bloger5,
      tags: ["fcv", "gdf", "jmh", "try", "gnjc", "cn", "rter", "xcc"]
    },
  ]
  return (
    <div className="mt-[90px] justify-center animate-slideUpEnter">
      <div className="flex flex-wrap flex-col justify-center items-center">
        <div className=" w-[98%] md:w-[95%]">
          <div>
            <div className="flex text-start gap-3"><Tranding /><span className="text-2xl">Trending Now</span></div>

            <div className="flex flex-wrap mt-5 gap-y-5 md:gap-y-7 lg:gap-y-10 justify-between">
              {Trendings.map((on, index) => (
                <div key={index} className="p-3 w-[100%] md:w-[49%] lg:w-[31%] flex gap-3 ">
                  <div className="text-5xl font-extrabold opacity-50 w-10">{on.id}.</div>
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-7"><Image loader={imageLoader(on.img)} className="w-[100%] rounded-full" src={on.img} width={1000} height={0} /></div>
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

          <div className="mt-10"><hr className="border-black" /></div>

          <div className="flex flex-wrap justify-start items-center mt-10 ">
            <input className="text-center w-[100%] md:w-[50%] lg:w-[25%] px-5 py-3 rounded-3xl border-2 head bg-slate-100" type='search' placeholder='Search Your Favorite Here' />
          </div>

          <div className="mt-10 flex flex-wrap gap-5 justify-between">
            <div className="w-[100%] lg:w-[67%] border-[1px] rounded-3xl p-2">
              <div className="flex flex-wrap gap-3">
                {blogs.map((all, index) => (
                  <div key={index} className="flex flex-wrap border-[1px] rounded-2xl gap-3 p-2 justify-between items-center w-[100%] ">
                    <div className="md:w-[68%] w-[100%]">
                      <div className="flex items-center gap-3">
                        <div className="w-7"><Image loader={imageLoader(all.img)} className="w-[100%] rounded-full" src={all.img} width={1000} height={0} /></div>
                        <div className="font-semibold text-lg">{all.name}</div>
                      </div>
                      <Link href="/detail">
                        <div className="mt-4 text-xl font-bold">{all.headding}</div>
                        <div className="mt-3">{all.description}</div>
                      </Link>
                      <div className="flex  justify-between mt-3">
                        <div className="flex gap-3">
                          <div>{all.date}</div>
                          <span> • </span>
                          <div>{all.time} Min read</div>
                        </div>
                        <div><Save /></div>
                      </div>
                      <div className="flex gap-2 w-[100%] rounded-xl overflow-auto hideScrollbar p-2">
                        {all.tags.map((item) =>
                          <button className="px-5 py-2 bg-gray-200 rounded-xl hover:scale-110 hover:bg-black/50 hover:text-white boxs">{item}</button>
                        )}
                      </div>
                    </div>
                    <div className="md:w-[30%] w-[100%]"><Image loader={imageLoader(all.img2)} className="w-[100%] rounded-xl" src={all.img2} width={1000} height={0} /></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[100%] lg:w-[29%] border-[1px] rounded-3xl p-2"></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>

  )
}

export default index