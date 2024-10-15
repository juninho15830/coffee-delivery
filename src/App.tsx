import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World!</h1>
      <button>13213</button>
      <GlobalStyle />
    </ThemeProvider>
  )
}
