import Header from "../components/layouts/Header";
import {BsArrowRight, BsTelephone} from "react-icons/bs";
import Item from "../components/Item";
import Testimonial from "../components/Testimonial";
import footer from "../assets/images/footer.jpg";
import {GoLocation} from "react-icons/go";
import {FiMail} from "react-icons/fi";

const Main = () => {
    return (
        <div className={`w-full`}>
            <Header></Header>
            <main className={`w-full`}>
                <section
                    className={`px-5 pt-32 md:pt-44 flex flex-wrap items-center justify-center`}>
                    <div className={`flex flex-col space-y-5 py-5 px-10 w-4/5 sm:w-1/3 mx-10 md:w-1/5`}>
                        <h2 className={`text-2xl text-gray-900 font-bold text-left tracking-wide capitalize`}>
                            Why we are the best in our town
                        </h2>
                        <p className={`text-left font-medium`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque euismod, urna eu tincidunt consectetur,
                            nisi nisl aliquam nunc, euismod aliquam nunc nisl eu
                            nisi.
                        </p>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href={`#`}>
                            <BsArrowRight
                                className={`text-white animate-pulse p-2 h-10 w-10 bg-green-700/70 rounded-full`}/>
                        </a>
                    </div>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </section>
                <Testimonial/>
            </main>
            <footer className={`bg-center bg-no-repeat bg-cover`} style={{backgroundImage: `url(${footer})`}}>
                <div className={`px-5 sm:px-10 md:px-20 bg-green-900/70 py-10 md:py-20`}>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20'>
                        <div>
                            <h1 className="text-3xl font-bold text-white">
                                <span className="text-green-200">Toy</span>osi
                            </h1>
                            <p className="text-gray-200 mt-5 text-sm opacity-70">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque euismod, urna eu tincidunt consectetur,
                                nisi nisl aliquam nunc, euismod aliquam nunc nisl eu
                                nisi.
                            </p>
                        </div>
                        <div>
                            <div
                                className='bg-green-500 h-16 w-16 rounded-full flex items-center justify-center animate-pulse'>
                                <div
                                    className={`bg-green-300 h-1/2 w-1/2 rounded-full flex items-center justify-center animate-pulse`}>
                                    <div className={`bg-green-700 h-1/2 w-1/2 rounded-full animate-pulse`}>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-10 bg-white/70 flex flex-col items-start justify-start space-y-5 shadow-xl shadow-green-900 p-5 inline-block rounded-md ">
                                <span className="flex items-center justify-start space-x-3 text-xs font-medium">
                                  <GoLocation className="text-green-900 h-6 w-6"/>
                                  <p>
                                      lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  </p>
                              </span>
                                <span className="flex items-center justify-start space-x-3 text-xs font-medium">
                                  <BsTelephone className="text-green-900 h-6 w-6"/>
                                  <p>
                                      +234 809 809 809
                                  </p>
                              </span>
                                <span className="flex items-center justify-start space-x-3 text-xs font-medium">
                                  <FiMail className="text-green-900 h-6 w-6"/>
                                  <p>
                                      google@gmail.com
                                  </p>
                              </span>
                            </div>
                        </div>
                        <div className="text-white">
                            <h3 className="font-semibold text-lg">Site Map</h3>
                            <div className="flex flex-col items-start justify-start mt-5 space-y-2 text-sm font-semibold">
                                <button className="hover:underline underline-offset-1 hover:text-green-200" >Home</button>
                                <button className="hover:underline underline-offset-1 hover:text-green-200">Home</button>
                                <button className="hover:underline underline-offset-1 hover:text-green-200">Home</button>
                                <button className="hover:underline underline-offset-1 hover:text-green-200">Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Main;