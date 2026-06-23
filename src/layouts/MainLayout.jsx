import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = ({isOwnerPath, setShowLogin}) => {
  return (
    <>
      { !isOwnerPath && <Navbar setShowLogin={setShowLogin}/> }
      <Outlet />
      { !isOwnerPath && <Footer /> }
    </>
  )
}

export default MainLayout