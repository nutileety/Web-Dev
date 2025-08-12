export const Button = ({isVisible, children}) => {
    return (
        <div>
             <span className={` text-teal-950 cursor-pointer ${isVisible ? "bg-teal-500": "bg-neutral-400/30 "} rounded-lg  px-22 py-1 m-2 mb-5`}>
                {children}
            </span>
        </div> 
    )
}