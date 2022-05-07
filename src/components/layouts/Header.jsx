import bgImg from '../../assets/images/bgImg.png';
import {Link} from "react-router-dom";
import pattern from '../../assets/images/pattern.png';

const Header = () => {
    return (
        <header className="p-5 sm:px-20 py-10 sm:flex sm:items-center bg-green-700/70">
            <div className="text-left flex flex-col text-center sm:text-left sm:w-1/3 justify-start items-start space-y-4 md:space-y-14 tracking-tighter capitalize relative">
                <img src={pattern} className="absolute right-10 top-5 h-1/2 w-1/2 -z-10"  alt="pattern"/>
                <p className="text-5xl md:text-6xl font-bold">
                    Rosh global farms and consult Ltd
                </p>
                <p className="text-lg font-medium tracking-tighter text-gray-900/80">
                     We engages in the farming and value chain addition to all agricultural crops and enterprises.
                </p>
                <Link to="/product" className="text-lg whitespace-nowrap px-5 py-3 bg-green-900 hover:bg-green-700 text-white font-semibold rounded-tl-xl rounded-br-xl">
                    View Products
                </Link>
            </div>
            <img src={bgImg} alt="bgImg" className="-mb-28 w-full sm:w-2/3 mt-10 sm:mt-0 sm:-mb-56 h-auto"/>
        </header>
    );
}

export default Header;