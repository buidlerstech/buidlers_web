import CommunitySlider from '../components/sections/CommunitySlider'
import Engagement from '../components/sections/Engagement'
import FeaturedAreas from '../components/sections/FeaturedAreas'
import Footer from '../components/Footer'
import HeroMain from '../components/sections/HeroMain'
import Motivations from '../components/sections/Motivations'
import Navigator from '../components/Navigator'
import PageLayout from '../components/PageLayout'
import Proposal from '../components/sections/Proposal'

export default function Home() {
  return (
    <PageLayout title="Buidlers.tech">
      <div className="mx-12 bg-resd-600">
        <Navigator />
        <div className="  w-full bg-resd-500 ">
          {/* <HeroMain />
          <Motivations />
          <FeaturedAreas />
          <Proposal />
          <Engagement />
          <Footer /> */}

          <div className="flex flex-cosl justify-between items-end  min-h-screen overflow-visible">
            <div className="text-white mb-40 text-5xl  font-extralight tracking-tigh">
              <span className="italic playfair  ">Synergy</span> to bring
              <br />
              decentralization
              <br />
              to the world
            </div>
            {/* <div className="text-white mb-40 text-8xl tracking-tighter">
            Creamos{' '}
            <span className="italic font-thin font-sserif">sin permiso,</span>
            avanzamos sin límites
          </div> */}
            <div
              className="text-[180pt] tracking-tighter italic mx-2 font-extrabold text-transparent bg-clip-text"
              style={{
                backgroundImage: 'url("/w.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              build.
            </div>
            {/* Pensamiento distribuido, excelencia compartida
          Creamos sin permiso, avanzamos sin límites */}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
