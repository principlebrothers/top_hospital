import './QuickNavigate.css'
import { Outlet, Link } from "react-router-dom"

const QuickNavigate = () => {
  return (
    <>
      <nav className='quick__navs'>
        <Link to={`medical-services`}>
          <span>Medical Services</span>
        </Link>
        <Link to={`pre-travel-services`}>
          <span>Pre-travel services</span>
        </Link>
        <Link to={`post-treatment-services`}>
          <span>Post Treatment services</span>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default QuickNavigate