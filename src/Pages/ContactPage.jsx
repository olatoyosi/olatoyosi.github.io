import {AiOutlineMail, AiOutlineUser} from "react-icons/ai";
import Input from "../components/forms/Input";
import {IconStyle} from "../components/forms/IconStyle";
import {BsPhone} from "react-icons/bs";

const ContactPage = () => {
    return (
        <div className="mx-auto flex flex-col justify-center items-center">
            <h1 className="text-center text-2xl mt-5 font-bold text-gray-700">Contact</h1>
            <div className="flex flex-col items-center justify-center my-10 max-w-screen-lg mx-10">
                <form className="flex flex-col items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="col-span-1 flex flex-col justify-between items-center w-full space-y-5 h-full">
                            <Input label="Name" type="text" name="name" id="name" placeholder="Your name" icon={<AiOutlineUser className={IconStyle}/>} />
                            <Input label={"Email"} type="email" name="email" id="email" placeholder="Your email" icon={<AiOutlineMail className={IconStyle}/>} />
                            <Input label={"Phone"} type="tel" name="phone" id="phone" placeholder="Your phone" icon={<BsPhone className={IconStyle}/>} />
                        </div>
                        <div className="col-span-1 w-full ">
                            <label htmlFor="message" className="text-gray-900 mb-3 text-sm font-bold tracking-wide">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message" className="border-2 p-2 border-gray-300 focus:outline-green-500/70 rounded-lg w-full resize-none"></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-5 rounded-md">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage