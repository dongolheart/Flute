
"use client"

import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Mail } from "lucide-react"
import { ArrowRightCircle } from 'lucide-react';
 
import { Button } from "@/components/ui/button"

const videos = [
 { url: 'https://www.youtube.com/watch?v=f-x5VvbFNjI&t=325s', name: 'Basic Flute Lesson By Rubin Kumar Shrestha' },
 
 { url: 'https://www.youtube.com/watch?v=ZH_RTBwDhKU', name: 'Important suggestion to flute beginners' },

 { url: 'https://youtu.be/5wh8FnNOOvM?si=jOh7wKewI_2w-JTN', name: 'Improve Ma Pa transition for Flute Beginners' },

 { url: 'https://youtu.be/HE24v9_lUpk?si=QRqmihPNHw1xqLZv', name: 'AVOID Thumb Pain' },

 { url: 'https://youtu.be/mgbowmNgGfY?si=bpkd2ZVz7Y7kuNfs', name: 'Most common mistakes by beginners' },

 { url: 'https://youtu.be/yXZqmgkEmyA?si=2dzNwbyCbFuFZI7a', name: '6 Steps to follow to Play your Flute Faster' },


 

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
        id="Beginners"
      >
        <br/>
        <br/>
        <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold">

          {'//Beginners'}
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
        <div className="playlist-wrapper flex-col   lg:flex-row ">
          <ul className='grid gap-8'>
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
  