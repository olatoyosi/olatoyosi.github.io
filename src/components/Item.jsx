const Item = () => {
    return (
        <div className={`py-5 flex flex-col items-center justify-start w-4/5 sm:w-1/3 hover:bg-gray-200 px-10 h-96 mx-10 md:w-1/5`}>
            <div className={`bg-center bg-no-repeat w-full bg-contain h-3/4`} style={{backgroundImage: `url(${'https://res.cloudinary.com/jimlah/image/upload/v1650564100/Test/okra-soup_xgguev.png'})`}} />
            <p className={`text-sm font-bold tracking-tight mt-8`}>
                Green Chair with metal
            </p>
            <span className={`text-sm font-bold tracking-tight mt-2`}>
                    $100
                    </span>
        </div>
    )
}

export default Item