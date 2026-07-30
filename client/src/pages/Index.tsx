import Footer from "../components/website/Footer"
import AutomatedAlerts from "../components/website/home/AutomatedAlerts"
import Hero from "../components/website/home/Hero"
import Integration from "../components/website/home/Integration"
import Services from "../components/website/home/Services"
import SuccessStories from "../components/website/home/SuccessStories"
import WhyChooseUs from "../components/website/home/WhyChooseUs"
import Navbar from "../components/website/Navbar"

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <AutomatedAlerts />
      <Integration />
      <SuccessStories />
      <Footer />
    </>
  )
}

export default Index
