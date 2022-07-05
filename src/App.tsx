import { DefaultTheme, ThemeProvider } from "styled-components"
import Products from "./components/Products"
import Theme from "./components/Theme"
import useLocalStorage from "./hooks/useLocalStorage"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"

function App() {
  const ls = useLocalStorage();
  const [theme, setTheme] = ls.persistedStateLs<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Products />
      <Theme toggleTheme={toggleTheme}/>
    </ThemeProvider>  
  )
}

export default App
