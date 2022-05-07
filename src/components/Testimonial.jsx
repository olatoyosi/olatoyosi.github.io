import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import usePagination from "../hooks/usePagination";
import testimonialData from "./../db/testimonial.json";

const Testimonial = () => {
    const {currentData, handlePrev, handleNext} = usePagination(testimonialData, 1);
  return (
      <section className={`mt-10 px-5 sm:px-20`}>
          {currentData.map((data)=>(
              <div key={data.id} className={`bg-gray-200 px-10 sm:px-40 md:px-64 py-20 w-full `}>
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
                      <div className={`bg-center bg-contain bg-no-repeat h-96 w-full md:w-2/3 justify-self-end`}
                           style={{backgroundImage: `url("${data.image}")`}}
                      ></div>
                      <div className={`text-green-900 flex flex-col items-start justify-center`}>
                          <h3 className={`uppercase font-semibold text-2xl`}>
                              {data.company}
                          </h3>
                          <p className={`mt-5 text-sm opacity-80`}>
                              {data.detail}
                          </p>
                          <span className={`mt-5 flex flex-col`}>
                                <span>{data.name}</span>
                                <span>{data.position}</span>
                            </span>
                          <div className={`flex items-center justify-start space-x-5 mt-5`}>
                              <button onClick={handlePrev}>
                                  <BsArrowLeft
                                      className={`text-white animate-pulse p-2 h-10 w-10 bg-green-700/70 rounded-full hover:animate-none`}/>
                              </button>
                              <button onClick={handleNext}>
                                  <BsArrowRight
                                      className={`text-white animate-pulse p-2 h-10 w-10 bg-green-700/70 rounded-full hover:animate-none`}/>
                              </button>

                          </div>
                      </div>
                  </div>
              </div>
          ))}
      </section>
  )
};

export default Testimonial;