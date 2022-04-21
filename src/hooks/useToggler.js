import {useState} from "react";

const useToggler = () =>{

    const [isToggled, setToggled] = useState(false);
    const toggle = () => setToggled(!isToggled);
    const reset = () => setToggled(false);

    return [isToggled, toggle, reset];
}

export default useToggler;
