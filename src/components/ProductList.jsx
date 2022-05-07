import {BsArrowRight} from "react-icons/bs";
import Item from "./Item";



function ProductList({children}) {
    return (
        <section
            className={`px-5 pt-32 md:pt-44 flex flex-wrap items-center justify-center`}>
            {children}
        </section>
    );
}

export default ProductList;