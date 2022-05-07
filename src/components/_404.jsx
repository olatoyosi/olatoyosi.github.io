import NotFound from '../assets/images/NotFound.png';

const _404 = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <img src={NotFound} alt="404" className="w-1/2" />
        </div>
    )
}

export default _404