import {Link} from "react-router-dom";

const NavMenu = (props) => {
    // remove children from props
    const {children, ...otherProps} = props;
    return(
        <Link className="flex-1 px-5 py-2 text-gray-700 hover:text-green-700 hover:bg-gray-200 sm:hover:bg-transparent sm:hover:border-b-2 sm:py-2 sm:hover:border-green-700 sm:px-0 sm:mx-5" {...otherProps}>
            {props.children }
        </Link>
    )
}

export default NavMenu;