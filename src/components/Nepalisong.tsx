
"use client"

import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { ArrowRightCircle } from 'lucide-react';
 
import { Button } from "@/components/ui/button"

const videos = [
 { url: 'https://youtu.be/DnaYLPeb3fk?si=n2vxuaNfhIJ0IFCc', name: 'ऐला लुवया "Aila Luwaya" F scale Tutorial learn' },
 
 { url: 'https://youtu.be/bqI_p_gfIVU?si=ou2f28JqbnPU9_Hj', name: 'TIHAR song _D scale Tutorial learn' },

 { url: 'https://youtu.be/7Wawbm4wXUM?si=-9Qh3EvV1R4WCTSk', name: 'Sachika Cheena_E scale on FLUTE_Tutorial learn' },

 { url: 'https://youtu.be/otoh0QCzwtg?si=B87yW17hn7r9IeJf', name: 'Rajamati wa' },

 { url: 'https://youtu.be/YxZIlDE6teA?si=T0kP1x6YJwWaNtWS', name: 'Sadhai Sadhai Flute tutorial' },

 { url: 'https://youtu.be/_LRgVAhYSGk?si=K5MWoWlrXNp3mECj', name: 'Resham Firiri Flute Lesson' },

 { url: 'https://youtu.be/xrS3TaTIFds?si=Bpy1b1IwOqZEXR0r', name: 'simsime panima' },

 { url: 'https://youtu.be/p3YLwZyAyzw?si=B-ASOVH48UEJ12gp', name: 'Guras Fulyo Bani Ma' },




 

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
        id="Nepalisong"
      >
        <br/>
        <br/>
        <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold">

          {'//Nepalisong'}
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
          <span className='flex animate-bounce next-video-button'>
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
  