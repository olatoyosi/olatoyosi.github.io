import {BsArrowRight} from "react-icons/bs";

function AboutUs() {
    return <div className={`flex flex-col space-y-5 py-5 px-10 w-4/5 sm:w-1/3 mx-10 md:w-1/5`}>
        <h2 className={`text-2xl text-gray-900 font-bold text-left tracking-wide capitalize`}>
            Who are we?
        </h2>
        <p className={`text-left font-medium`}>
            rosh global farms and consult Ltd is one that engages in the farming and value chain addition to all
            agricultural crops and enterprises.
        </p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href={`#`}>
            <BsArrowRight
                className={`text-white animate-pulse p-2 h-10 w-10 bg-green-700/70 rounded-full`}/>
        </a>
    </div>;
}

export default AboutUs;