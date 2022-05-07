import Nav from "./Nav";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="scroll-smooth w-full min-h-screen bg-gray-100 overflow-x-hidden">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;