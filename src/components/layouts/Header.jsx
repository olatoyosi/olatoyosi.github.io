import bgImg from '../../assets/images/bgImg.png';
import {Link} from "react-router-dom";
import pattern from '../../assets/images/pattern.png';

const Header = () => {
    return (
        <header className="p-5 md:mx-20 sm:py-10 sm:flex sm:items-center">
            <div className="text-left flex flex-col sm:w-1/3 justify-start items-start space-y-4 md:space-y-14 tracking-tighter capitalize relative">
                <img src={pattern} className="absolute right-10 top-5 h-1/2 w-1/2 -z-10"  alt="pattern"/>
                <p className="text-5xl md:text-6xl font-bold">
                    Delicious food is waiting for you.
                </p>
                <p className="text-lg font-medium tracking-tighter text-gray-500">
                    Order your favorite food from ourF menu.
                </p>
                <Link to="/product" className="text-lg whitespace-nowrap px-5 py-3 bg-green-900 hover:bg-green-700 text-white font-semibold rounded-tl-xl rounded-br-xl">
                    View Products
                </Link>
            </div>
            <img src={bgImg} alt="bgImg" className="w-full sm:w-2/3 mt-10 sm:mt-0 h-auto"/>
        </header>
    );
}

export default Header;