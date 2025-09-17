import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Welcome from '../components/Pieces/Welcome/Welcome'
import WhatsApp from '../components/Pieces/WatsApp/WhatsApp'

const MainLayout = () => {
  return (
    <>
    <Welcome />
    <WhatsApp />
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default MainLayout