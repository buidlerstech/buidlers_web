// import CommunitySlider from '../components/sections/CommunitySlider'
// import Engagement from '../components/sections/Engagement'
// import FeaturedAreas from '../components/sections/FeaturedAreas'
// import Footer from '../components/Footer'
// import HeroMain from '../components/sections/HeroMain'
// import Motivations from '../components/sections/Motivations'
// import Navigator from "../components/Navigator";
// import PageLayout from "../components/PageLayout";
// import Proposal from '../components/sections/Proposal'

import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import BuildText from "@/components/BuildText";
import Values from "@/components/Values";
import SocialLinks from "@/components/SocialLinks";


export default function Home() {
  return (
    <div id="theWholeScreen" className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center p-4 sm:p-8 md:px-12 lg:px-24">
          {/* Social Links - Hidden en móvil, visible en tablet y desktop */}
          <div className="hidden md:block fixed left-4 lg:left-12 top-1/2 -translate-y-1/2">
            <SocialLinks />
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32 items-center justify-center w-full max-w-6xl">
            <div className="text-white text-2xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-center md:text-left">
              <span className="text-[42pt] sm:text-[48pt] lg:text-[64pt] italic ephesis block mb-2 md:mb-0 md:inline">Sinergia</span>
              {' '}
              <span className="block md:inline">para llevar</span>
              <div className="mt-2 md:mt-4">
                descentralización
              </div>
              <div className="mt-2 md:mt-4">
                al mundo
              </div>
            </div>
            <div className="w-full flex justify-center md:block md:w-auto overflow-hidden">
              <BuildText />
            </div>
          </div>

          {/* Social Links para móvil - Visible solo en móvil */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:hidden">
            <div className="flex flex-row gap-6">
              <SocialLinks />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8">
          <Timeline />
        </section>
        
        {/* Values Section */}
        <section className="min-h-screen px-4 sm:px-8">
          <Values />
        </section>
      </main>
    </div>
  );
}
