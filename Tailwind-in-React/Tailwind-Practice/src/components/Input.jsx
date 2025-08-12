export const Input = ({
    type,
    onChange,
    placeholder
}) => {
    return (
        <div className="mb-5">
            <span className="bg-teal-900 text-white rounded-lg py-1 m-2">
                <input type={type} onChange={onChange} placeholder={placeholder} className="p-4 outline-none"></input>
            </span>
        </div>
    )
}