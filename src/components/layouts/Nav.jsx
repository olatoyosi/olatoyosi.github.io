import {AiOutlineMenu} from "react-icons/ai";
import {FaTimes} from "react-icons/fa";
import useToggler from "../../hooks/useToggler";
import NavMenu from "./NavMenu";

const Nav = () => {

    const [isToggled, toggle] = useToggler()

    return (
        <nav className="flex bg-green-700/70 justify-between text-xs px-5 py-2 items-center sm:px-20">
            <h1 className='text-xl font-bold tracking-tight text-black'>ROSH</h1>
            <div className="relative">
                <button className="sm:hidden text-gray-700 text-xs outline-none" onClick={toggle}>
                    <AiOutlineMenu className={`w-6 h-6 ${isToggled ? "hidden":"" }`}/>
                    <FaTimes className={` w-6 h-6 ${isToggled ? "":"hidden" }`}/>
                </button>
                <div className={` ${isToggled ? "flex":"hidden" } z-10 sm:flex fixed sm:relative bg-white flex-col text-sm font-semibold sm:flex-row mt-2 shadow-md sm:shadow-none sm:bg-transparent left-5 right-5 sm:left-0 sm:right-0 overflow-hidden rounded-md`}>
                    <NavMenu to={{pathname: "/", hash: "#top",}}>Home</NavMenu>
                    <NavMenu to={{pathname: "/", hash: "#about",}}>About</NavMenu>
                    <NavMenu to={{pathname: "/contact"}}>Contact</NavMenu>
                    <NavMenu to={{pathname: "/products"}}>Products</NavMenu>
                </div>
            </div>
        </nav>
    )
}

export default Nav;