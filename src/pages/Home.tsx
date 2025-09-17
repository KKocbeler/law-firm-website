import CaseTypes from '../components/Home/CaseTypes/CaseTypes'
import Country from '../components/Home/County/Country'
import HeroSection from '../components/Home/HeroSection/HeroSection'
import SectionOne from '../components/Home/SectionOne/SectionOne'
import UsefullLink from '../components/Home/UsefullLiks/UsefulLink'

const Home = () => {
  return (
    <>
        <HeroSection />
        <SectionOne />
        <CaseTypes />
        <UsefullLink />
        {/* <Country /> */}
    </>
  )
}

export default Home