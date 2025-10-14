export default function Input({type, placeholder, className}) {
    return (
        <input type={type} placeholder={placeholder} className={`p-2 outline rounded-lg outline-main-dark ${className ? ` ${className}` : ''}`} />
    )
}