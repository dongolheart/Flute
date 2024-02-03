import About from '@/components/About';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Beginners from '@/components/Beginners';
import Music from '@/components/Music';
import English from '@/components/English';
import Hindisong from '@/components/Hindisong';
import Nepalisong from '@/components/Nepalisong';




export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-[calc(16px+56px)] ">
        <Hero />
        {/* <About /> */}
        <Beginners/>
        
        <English/>
        <Nepalisong/>
        <Hindisong/>
        {/* <Music/> */}
        {/* <Skills /> */}
      </main>
      <Footer />
    </>
  );
}
