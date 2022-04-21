import Header from "../components/layouts/Header";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import Item from "../components/Item";

const Main = () => {
    return (
        <div className={`w-full`}>
            <Header></Header>
            <main className={`w-full`}>
                <section
                    className={`px-5 pt-32 md:pt-44 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-10 sm:px-20`}>
                    <div className={`flex flex-col space-y-5 py-5`}>
                        <h2 className={`text-2xl text-gray-900 font-bold text-left tracking-wide capitalize`}>
                            Why we are the best in our town
                        </h2>
                        <p className={`text-left font-medium`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque euismod, urna eu tincidunt consectetur,
                            nisi nisl aliquam nunc, euismod aliquam nunc nisl eu
                            nisi.
                        </p>
                        <a href={`#`}>
                            <BsArrowRight
                                className={`text-white animate-pulse p-2 h-10 w-10 bg-green-700/70 rounded-full`}/>
                        </a>
                    </div>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </section>
                <section className={`mt-10 px-5 sm:px-20`}>
                    <div className={`bg-gray-200 px-10 sm:px-40 md:px-64 py-20 w-full `}>
                        <div>
                            <h2 className={`font-semibold text-6xl text-green-900 text-center`}>
                                What Our Customers Say
                            </h2>
                            <p className={`text-sm font-medium -tracking-wide mt-5 text-gray-500 text-center`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque euismod, urna eu tincidunt consectetur,
                                nisi nisl aliquam nunc, euismod aliquam nunc nisl eu
                                nisi.
                            </p>
                        </div>
                        <div className={`py-10 grid grid-cols-1 gap-5 md:grid-cols-2`}>
                            <div className={`bg-center bg-cover bg-no-repeat h-96 md:w-2/3 justify-self-end`}
                                 style={{backgroundImage: `url(${'https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_640.jpg'})`}}></div>
                            <div className={`text-green-900 flex flex-col items-start justify-center`}>
                                <h3 className={`uppercase font-semibold text-2xl`}>
                                    furmi shop
                                </h3>
                                <p className={`mt-5 text-sm opacity-80`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque euismod, urna eu tincidunt consectetur,
                                    nisi nisl aliquam nunc, euismod aliquam nunc nisl eu
                                    nisi.
                                </p>
                                <span className={`mt-5 flex flex-col`}>
                                <span>Larry Diamond</span>
                                <span>Chief technical Officer</span>
                            </span>
                                <div className={`flex items-center justify-start space-x-5 mt-5`}>
                                    <a href={`#`}>
                                        <BsArrowLeft
                                            className={`text-white animate-pulse p-2 h-10 w-10 bg-green-700/70 rounded-full hover:animate-none`}/>
                                    </a>
                                    <a href={`#`}>
                                        <BsArrowRight
                                            className={`text-white animate-pulse p-2 h-10 w-10 bg-green-700/70 rounded-full hover:animate-none`}/>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
};

export default Main;