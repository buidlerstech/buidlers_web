import CommunitySlider from '../components/sections/CommunitySlider'
import Engagement from '../components/sections/Engagement'
import FeaturedAreas from '../components/sections/FeaturedAreas'
import Footer from '../components/Footer'
import HeroMain from '../components/sections/HeroMain'
import Motivations from '../components/sections/Motivations'
import Navigator from '../components/Navigator'
import PageLayout from '../components/PageLayout'
import Proposal from '../components/sections/Proposal'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <PageLayout title="Buidlers.tech">
      <div className={styles.container}>
        <Navigator />
        <div className=" mt-20">
          <HeroMain />
          <Motivations />
          <FeaturedAreas />
          <Proposal />
          {/* <CommunitySlider /> */}
          <Engagement />
          <Footer />
        </div>
      </div>
    </PageLayout>
  )
}
