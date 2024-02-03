
"use client"

import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { ArrowRightCircle } from 'lucide-react';
 
import { Button } from "@/components/ui/button"

const videos = [
 { url: 'https://youtu.be/4W96IcwLxsI?si=SeqLeZanzvMjx4qI', name: 'MAIN RAHOON YA NA RAHOON `' },
 
 { url: 'https://youtu.be/lhvKM2WiWpc?si=0vl0eCyJ_XqiMc7J', name: 'ACHUTAM KESHIVAM FLUTE COVER WITH NOTATION' },

 { url: 'https://youtu.be/2Gy5i-DlTQA?si=ILmKlWvd8RAohNwl', name: 'HAR GHADI BADAL RAHI HAI FLUTE COVER | WITH NOTATIONS' },

 { url: 'https://youtu.be/uywery2wIHs?si=Zgc-cuCMhWDQpc6J', name: 'TUM HI HO (Aashiqui 2) FLUTE COVER | WITH NOTATIONS' },

 { url: 'https://youtu.be/jKza65jfP8o?si=Ol-6Da3rDqL4W8AG', name: 'Dil Diya Gallan | Tiger Zinda Hai | Flute Tutorial ' },

 { url: 'https://youtu.be/KV7xYbyPV60?si=aYRecsIWsjam5_fC', name: 'Flute tutorial Ajeeb Dasta Hai ye | hindi' },


 

 // ... more videos
]

export default function About() {
  const [videoIndex, setVideoIndex] = useState(0)

 const handleNextVideo = () => {
    setVideoIndex((videoIndex + 1) % videos.length)
 }

    return (
      <section
        className="bg-slate-950 rounded-[56px] h-max text-slate-50 p-6 md:p-10 my-10 sm:w-[90%] mx-auto"
        id="Hindisong"
      >
        <br/>
        <br/>
        <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold">

          {'//Hindisong'}
        </h2>
        <div className="flex flex-col items-start justify-center h-full">
        <div className="container mx-auto flex items-center justify-center rounded-full p-4 mt-7">
      <div className='flex flex-col   lg:flex-row gap-8'>
        <div className="player-wrapper">
          <ReactPlayer
            url={videos[videoIndex].url}
            width="80vh"
            // height="auto"
            controls={true}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
        </div>

        <div className="divider lg:divider-horizontal gap-3"></div> 
        <div className="playlist-wrapper flex-col   lg:flex-row gap-8 ">
          <ul className='grid gap-3'>
            {videos.map((video, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                 index === videoIndex ? 'font-bold' : ''
                }`}
                onClick={() => setVideoIndex(index)}
              >
                {video.name}
              </li>
            ))}
          </ul>
          <br/>
          <span className='flex animate-bounce next-video-button gap-5'>
                    <ArrowRightCircle />

          <button className="next-video-button" onClick={handleNextVideo}>
            Next Video
          </button>
         
         
          </span>
        </div>
      </div>
    </div>
    </div>
      </section>
    );
  }
  