
"use client"

import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Mail } from "lucide-react"
import { ArrowRightCircle } from 'lucide-react';
 
import { Button } from "@/components/ui/button"

const videos = [
 { url: 'https://youtu.be/M3XJ--6pOnw?si=tk_YL0euMCd_wQ1E', name: 'Learn Simple & Beautiful Memories by Maroon 5 on Flute' },
 
 { url: 'https://youtu.be/8_ozoDhO1Zc?si=EnY5gK1cmxBLlAwm', name: 'Believer Flute Tutorial' },

 { url: 'https://youtu.be/5wh8FnNOOvM?si=jOh7wKewI_2w-JTN', name: 'Improve Ma Pa transition for Flute Beginners' },



 

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
        id="english"
      >
        <br/>
        <br/>
        <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold">

          {'//englishSong'}
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

        <div className="divider lg:divider-horizontal"></div> 
        <div className="playlist-wrapper flex-col   lg:flex-row  ">
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
        
        
          <span className='flex  gap-5 animate-bounce next-video-button'>
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
  