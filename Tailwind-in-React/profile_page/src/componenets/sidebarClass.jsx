export const SidebarClass = () => {
    return (
        <div className="flex">
            <div className="transform-all duration-500 sm:w-xs bg-amber-200 w-0 h-screen">
                sidebar
            </div>
            <div className="h-screen w-full bg-blue-950">
                content
            </div>
        </div>
    )
}