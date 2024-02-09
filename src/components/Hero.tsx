import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const Hero = () => {
  return (

    <section className="w-[90%] md:w-4/5 mx-auto h-[calc(100vh-72px)]">
      <div className="flex flex-col items-center justify-evenly h-full">
        <div className="flex flex-col gap-5">
          <br/>
          <br/>
          <br/>
          <br/>
          <header className="text-3xl sm:text-4xl lg:text-6xl text-center font-medium font-inter">
           <span className="animate-spine"> Welcome to</span> 
            <br /> 
            <span className="inline-block bg-gradient-to-r from-green-400 via-secondary to-accent font-bold text-transparent bg-clip-text p-2 animate-gradient bg-300% text-5xl md:text-6xl lg:text-7xl py-4 ">
Flute Learning Website
            </span>
          </header>
        </div>

        <div className="flex flex-col sm:flex-row items-center">
        <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 hide-scroll-bar">
        <div className="snap-center shrink-0">
          <div className="shrink-0 w-4 sm:w-48"></div>
        </div>
        <div className="snap-center shrink-0">
        </div>
        <div className="snap-center shrink-0">
          <h4 className='animate-wiggle-more animate-infinite animate-ease-in-out justify-center'>Step1</h4>
        <img className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/flute/step1.jpg"/>

        </div>
        <div className="snap-center shrink-0">
        <h4 className='animate-wiggle-more animate-infinite animate-ease-in-out justify-center'>Step2</h4>

        <img className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/flute/step2.jpg"/>

        </div>
        <div className="snap-center shrink-0">
        <h4 className='animate-wiggle-more animate-infinite animate-ease-in-out justify-center'>Step3</h4>

        <img className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/flute/step3.jpg"/>

        </div>
        <div className="snap-center shrink-0">
        <h4 className='animate-wiggle-more animate-infinite animate-ease-in-out justify-center'>Step4</h4>

        <img className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/flute/step4.jpg"/>

        </div>
        <div className="snap-center shrink-0">

        </div>
        <div className="snap-center shrink-0">
          <div className="shrink-0 w-4 sm:w-48"></div>
        </div>
      </div>
        </div>
      </div>
   
    </section>
  );
};
