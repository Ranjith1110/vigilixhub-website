import Footer from "../components/website/Footer"
import Services from "../components/website/home/Services"
import Navbar from "../components/website/Navbar"

const Service = () => {
    return (
        <>
            <Navbar />
            <div className="mt-10">
                <Services />
            </div>
            <Footer />
        </>
    )
}

export default Service
