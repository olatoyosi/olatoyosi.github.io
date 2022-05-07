import Header from "../components/layouts/Header";
import Item from "../components/Item";
import Testimonial from "../components/Testimonial";
import ProductList from "../components/ProductList";
import AboutUs from "../components/AboutUs";
import products from "../db/products";

const Main = () => {
    return (
        <div className={`w-full`}>
            <Header></Header>
            <main className={`w-full`}>
                <ProductList>
                    <AboutUs/>
                    {products.slice(0,5).map((product, index) => (<Item key={index} product={product}/>))}
                </ProductList>
                <Testimonial/>
            </main>
        </div>
    );
};

export default Main;