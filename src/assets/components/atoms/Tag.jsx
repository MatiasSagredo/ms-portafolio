/**
 * Etiqueta base reutilizable para construir componentes interactivos.
 * @param {object} props - Propiedades de la etiqueta.
 * @param {React.ReactNode} props.children - Contenido visual dentro de la etiqueta.
 * @param {string} props.className - Clases extra para personalizar la etiqueta.
 * @param {'primary' | 'red' | 'green'} props.variant - La variante a usar de la etiqueta.
 * @param {string} props.title - Texto que se muestra como tooltip al pasar el cursor.
 * @returns {JSX.Element} Etiqueta renderizada.
 */
export default function Tag({ variant = "primary", children, className, title }) {
    const variantes = {
        primary: "bg-gray-200 text-black",
        red: "bg-red-400 text-white",
        green: "bg-green-400 text-white",
    };

    return (
        <span title={title} className={`px-1.5 py-0.5 rounded-md text-sm font-semibold shadow-md shadow-black/20 ${variantes[variant]}${className ? ` ${className}` : ''}`}>{children}</span>
    )
}
