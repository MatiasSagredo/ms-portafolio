import Button from './Button'

/**
 * Botón icónico flexible basado en Button.
 * @param {object} props - Propiedades del botón.
 * @param {React.ReactNode} props.icon - Ícono a mostrar.
 * @param {React.ReactNode} props.children - Contenido visual dentro del botón.
 * @param {'left' | 'right'} props.iconPosition - Posición del ícono.
 * @param {string} props.title - Texto que se muestra como tooltip al pasar el cursor.
 * @param {boolean} props.disabled - Si es `true`, el botón no responde a eventos de clic.
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} props.onClick - Función que se ejecuta al hacer clic.
 * @param {string} props.className - Clases extra para personalizar el boton.
 * @param {'primary' | 'secondary'} props.variant - La variante a usar del boton.
 * @returns {JSX.Element} Botón renderizado.
 */
export default function IconButton({
    icon,
    children,
    iconPosition = "left",
    title = "",
    disabled = false,
    onClick,
    className = "",
    variant = "primary",
}) {
    const contenido = (children == null) ? (
        <span className="w-6 h-6 flex items-center justify-center shrink-0">
            {icon}
        </span>

    ) : (iconPosition === 'left') ? (
        <span className="flex items-center gap-2">
            {icon}
            {children}
        </span>
    ) : (
        <span className="flex items-center gap-2">
            {children}
            {icon}
        </span>
    );

    return (
        <Button
            title={title}
            disabled={disabled}
            onClick={onClick}
            variant={variant}
            className={`px-2 py-2 flex items-center justify-center ${className}`}
        >
            {contenido}
        </Button>
    );
}
