const Item = ({product}) => {
    return (
        <div
            className={`py-5 flex flex-col items-center justify-start w-4/5 sm:w-1/3 hover:bg-gray-200 px-10 h-96 mx-10 md:w-1/5`}>
            <div className={`bg-center bg-no-repeat w-full bg-contain h-3/4`}
                 style={{backgroundImage: `url(${product.image})`}}/>
            <p className={`text-base font-semibold tracking-tight mt-8 tracking-wide`}>
                {product?.name}
            </p>
            <span className={`text-base font-bold tracking-tight mt-2 tracking-wide`}>
                    ₦{product?.price}
            </span>
        </div>
    )
}

export default Item