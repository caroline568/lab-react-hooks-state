export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="toggle-dark-mode"
    >
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}