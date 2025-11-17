import { useTheme } from "../../contexts/ThemeContext";

// Iconos SVG para el toggle de tema
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const SystemIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

interface ThemeToggleProps {
  variant?: "button" | "dropdown";
  className?: string;
}

export const ThemeToggle = ({
  variant = "button",
  className = "",
}: ThemeToggleProps) => {
  const { theme, setTheme, toggleTheme } = useTheme();

  if (variant === "dropdown") {
    return (
      <div className={`relative inline-block text-left ${className}`}>
        <select
          value={theme}
          onChange={(e) =>
            setTheme(e.target.value as "light" | "dark" | "system")
          }
          className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 pr-8 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <option value="light">☀️ Claro</option>
          <option value="dark">🌙 Oscuro</option>
          <option value="system">💻 Sistema</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    );
  }

  // Variante de botón (por defecto)
  const getIcon = () => {
    switch (theme) {
      case "light":
        return <SunIcon className="h-5 w-5" />;
      case "dark":
        return <MoonIcon className="h-5 w-5" />;
      case "system":
        return <SystemIcon className="h-5 w-5" />;
      default:
        return <SunIcon className="h-5 w-5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Modo Claro";
      case "dark":
        return "Modo Oscuro";
      case "system":
        return "Seguir Sistema";
      default:
        return "Cambiar Tema";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        inline-flex items-center justify-center p-2 rounded-lg 
        text-gray-500 dark:text-gray-400 
        hover:text-gray-900 dark:hover:text-white 
        hover:bg-gray-100 dark:hover:bg-gray-700 
        focus:outline-none focus:ring-2 focus:ring-inset
        transition-all duration-200 ease-in-out
        ${className}
      `}
      title={getLabel()}
      aria-label={getLabel()}
    >
      <span className="sr-only">{getLabel()}</span>
      <div className="transform transition-transform duration-200 hover:scale-110">
        {getIcon()}
      </div>
    </button>
  );
};

// Componente más completo con etiqueta
export const ThemeToggleWithLabel = ({
  className = "",
}: {
  className?: string;
}) => {
  const { theme, toggleTheme } = useTheme();

  const handleSetTheme = () => {
    console.log("Setting theme...", theme);
    toggleTheme();
  };

  const getThemeInfo = () => {
    switch (theme) {
      case "light":
        return {
          icon: <SunIcon className="h-4 w-4" />,
          label: "Claro",
          next: "Cambiar a modo oscuro",
        };
      case "dark":
        return {
          icon: <MoonIcon className="h-4 w-4" />,
          label: "Oscuro",
          next: "Cambiar a modo sistema",
        };
      case "system":
        return {
          icon: <SystemIcon className="h-4 w-4" />,
          label: "Sistema",
          next: "Cambiar a modo claro",
        };
      default:
        return {
          icon: <SunIcon className="h-4 w-4" />,
          label: "Claro",
          next: "Cambiar tema",
        };
    }
  };

  const themeInfo = getThemeInfo();

  return (
    <button
      onClick={handleSetTheme}
      className={`
        inline-flex items-center gap-2 px-3 py-2 rounded-lg
        text-sm font-medium
        text-gray-700 dark:text-gray-200
        bg-gray-100 dark:bg-gray-800
        hover:bg-gray-200 dark:hover:bg-gray-700
        border border-gray-200 dark:border-gray-600
        focus:outline-none focus:ring-2 focus:ring-offset-2
        transition-all duration-200 ease-in-out
        ${className}
      `}
      title={themeInfo.next}
      aria-label={themeInfo.next}
    >
      <span className="transition-transform duration-200 hover:scale-110">
        {themeInfo.icon}
      </span>
      <span>{themeInfo.label}</span>
    </button>
  );
};

export default ThemeToggle;

