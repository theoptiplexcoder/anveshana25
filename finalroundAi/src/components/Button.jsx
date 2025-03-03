export default function Button({
    children,
    type='button',
    bgColor='bg-rose-600',
    textColor="text-white",
    className="",
    ...props
}){
    return(
        <>
        <button type={type} className={`px-4 py-rounded-lg ${className} ${bgColor} ${textColor}`}
        {...props}>{children}</button>
        </>
    )
}