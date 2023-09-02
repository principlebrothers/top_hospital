import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import SubHeader from "../subheader/SubHeader"
import Footer from "../footer/Footer"

const Layout = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout