import Sidebar from "../components/Bars/Sidebar";
import Navbar from "../components/Bars/Navbar";
import Footer from "../components/Bars/Footer";

import '../styles/global.scss'

const MainLayout = ({ children }) => {
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebar />
      <div className="content">
        <Navbar />
        { children }
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;