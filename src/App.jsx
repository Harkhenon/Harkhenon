import { MantineProvider } from '@mantine/core'
import theme from './theme.js'
import Layout from './layout/Layout.jsx'

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout />
    </MantineProvider>
  )
}

export default App
