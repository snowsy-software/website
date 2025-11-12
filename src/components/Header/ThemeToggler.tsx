import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button aria-label='theme toggler'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
    >
      <Moon className="dark:hidden w-5 h-5 md:h-6 md:w-6" />
      <Sun className="hidden dark:block w-5 h-5 md:h-6 md:w-6" />
    </button>
  );
};

export default ThemeToggler;
