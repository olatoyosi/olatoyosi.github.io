const Input = ({icon, label, ...props}) => {
    return (
        <div className="relative">
            <label htmlFor={props.id} className="text-gray-900 mb-3 text-sm font-bold tracking-wide">{label}</label>
            <input {...props} className="border text-gray-700 font-semibold border-gray-500 p-2 w-full pl-10 rounded-md peer outline-2 outline-gray-300 focus:outline-green-500/70" />
            {icon}
        </div>
    )
}

export default Input