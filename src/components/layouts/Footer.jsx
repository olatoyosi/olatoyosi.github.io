import footer from "../../assets/images/footer.jpg";
import {GoLocation} from "react-icons/go";
import {BsTelephone} from "react-icons/bs";
import {FiMail} from "react-icons/fi";

const Footer = () => {
    return (
        <footer className={`bg-center bg-no-repeat bg-cover`} style={{backgroundImage: `url(${footer})`}}>
            <div className={`px-5 sm:px-10 md:px-20 bg-green-900/70 py-10 md:py-20`}>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20'>
                    <div>
                        <h1 className="text-3xl font-bold text-white">
                            <span className="text-green-200">RO</span>SH
                        </h1>
                        <p className="text-gray-200 mt-5 text-sm opacity-70">
                            We Engages In The Farming And Value Chain Addition To All Agricultural Crops And Enterprises.
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
                        <div
                            className="flex flex-col items-start justify-start mt-5 space-y-5 text-sm font-semibold">
                            <div>
                                <h1 className="text-xl font-semibold mb-2">Our Mission</h1>
                                <p className="text-sm font-medium text-gray-50 text-left whitespace-normal">
                                    To aid food security in Nigeria, and making food available for all Nigerians,
                                    through our expert services of farm creation.Creation of employment for
                                    Nigerian youths.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-xl font-semibold mb-2">Our Vision</h1>
                                <p className="text-sm font-medium text-gray-50">
                                    To be the world leading agro-expert in rending agro-services to intending and
                                    prospective farmers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer