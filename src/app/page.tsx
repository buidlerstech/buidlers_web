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

{
  /* <HeroMain />
          <Motivations />
          <FeaturedAreas />
          <Proposal />
          <Engagement />
          <Footer /> */
}
{
  /* <div className="text-white mb-40 text-5xl  font -extralight tracking-tigh">
            <span className="italic playfair">Synergy</span> to bring
            <br />
            decentralization
            <br />
            to the world
          </div> */
}
{
  /* <div className="text-white mb-40 text-8xl tracking-tighter">
            Creamos{" "}
            <span className="italic font-thin font-sserif">sin permiso,</span>
            avanzamos sin límites
          </div> */
}

export default function Home() {
  return (
    <div id="theWholeScreen" className="flex flex-col min-h-screen mx-12">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <Timeline />
      </main>
      <div id="bigFooter" className="flex justify-between items-center ">
        <div className="text-white text-5xl font-extralight tracking-tight ">
          <span className="text-[64pt] mr-3 italic ephesis">Sinergia</span> para
          llevar
          <br />
          descentralización
          <br />
          al mundo
        </div>

        <div
          className="text-[180pt] tracking-tighter italic font-extrabold text-transparent leading-none bg-clip-text"
          style={{
            backgroundImage: 'url("/w.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          build.
        </div>
        {/* Pensamiento distribuido, excelencia compartida
          Creamos sin permiso, avanzamos sin límites */}
      </div>
    </div>
  );
}
