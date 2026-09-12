import { createTheme } from '@mantine/core'

const theme = createTheme({
  primaryColor: 'forest',
  primaryShade: { light: 6, dark: 5 },
  defaultRadius: 'md',
  fontFamily:
    "Inter, system-ui, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily:
      "Inter, system-ui, 'Segoe UI', Roboto, sans-serif",
    fontWeight: '600',
  },
  colors: {
    forest: [
      '#e6f4ea',
      '#c2e6cc',
      '#8fd0a3',
      '#5cb876',
      '#37a057',
      '#21894a',
      '#166a39',
      '#0f5530',
      '#0a4026',
      '#062b18',
    ],
    mistral: [
      '#ff7000',
      '#ff7000',
      '#ff7000',
      '#ff7000',
      '#ff7000',
      '#ff7000',
      '#ff7000',
      '#ff7000',
      '#ff7000',
      '#ff7000',
    ],
  },
  components: {
    Button: {
      defaultProps: {
        size: 'md',
      },
    },
    Anchor: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },
})

export default theme
