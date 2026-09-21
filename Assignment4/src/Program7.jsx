import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Header() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <h2>
      Current Theme: {darkMode ? "Dark" : "Light"}
    </h2>
  );
}

function Content() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        padding: "30px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Content Section</h3>

      <p>
        The current theme is {darkMode ? "Dark" : "Light"}.
      </p>
    </div>
  );
}

function ThemeButton() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ marginTop: "20px" }}>
      Switch to {darkMode ? "Light" : "Dark"} Theme
    </button>
  );
}

function Program7() {
  return (
    <ThemeProvider>
      <div>
        <h2>Program 7 - Context API Theme</h2>

        <Header />
        <Content />
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default Program7;