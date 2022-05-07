import ProductList from "../components/ProductList";
import Item from "../components/Item";
import products from "../db/products";

const ProductPage = () => {
    return (
        <div className="mb-10">
            <h1 className="text-center text-2xl mt-5 font-bold text-gray-700">Product Page</h1>
            <ProductList>
                {products.map((product, index) => (
                    <Item key={index} product={product} />
                ))}
            </ProductList>
        </div>
    )
}

export default ProductPage