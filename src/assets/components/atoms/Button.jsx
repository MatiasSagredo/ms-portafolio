/**
 * Botón base reutilizable para construir componentes interactivos.
 * @param {object} props - Propiedades del botón.
 * @param {boolean} props.disabled - Si es `true`, el botón no responde a eventos de clic.
 * @param {'primary' | 'secondary'} props.variant - La variante a usar del boton.
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} props.onClick - Función que se ejecuta al hacer clic.
 * @param {string} props.title - Texto que se muestra como tooltip al pasar el cursor.
 * @param {React.ReactNode} props.children - Contenido visual dentro del botón.
 * @param {'button' | 'submit' | 'reset'} [props.type - Tipo de botón HTML (`button`, `submit`, etc.).
 * @param {string} props.className - Clases extra para personalizar el boton.
 * @returns {JSX.Element} Botón renderizado.
 */
export default function Button({ children, disabled = false, variant = "primary", onClick, title = "", type = "button", className = "" }) {
    const variantes = {
        primary: 'bg-primary text-main dark:bg-primary-dark dark:text-main-dark',
        secondary: 'bg-secondary text-main dark:bg-secondary-dark'
    }
  return (
    <button disabled={disabled} onClick={onClick} title={title} type={type}
      className={`px-4 py-2 rounded-lg font-semibold transition-all shadow-black/30 shadow-lg ${variantes[variant]} hover:not-disabled:brightness-90 active:not-disabled:brightness-75 disabled:opacity-80 disabled:cursor-not-allowed${className ? ` ${className}` : ''}`}
    >
      {children}
    </button>
  );
};
