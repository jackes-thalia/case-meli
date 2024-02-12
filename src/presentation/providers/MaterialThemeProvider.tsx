'use client'

import { ThemeOptions } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { NextFont } from 'next/dist/compiled/@next/font'
import breakpoints from '../constants/breakpoints'

const MaterialThemeProvider = ({
  children,
  font,
}: {
  children: React.ReactNode
  font: NextFont
}) => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode: 'light',
      primary: {
        main: '#2F80ED',
      },
      secondary: {
        main: '#FFF059',
      },
      info: {
        main: '#4F4F4F',
      },
    },
    typography: {
      fontFamily: font.style.fontFamily,
      button: {
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: 600,
      },
      h2: {
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '26px',

        [`@media (min-width: ${breakpoints.small})`]: {
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '26px',
        },
      },
      h4: {
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '26px',
      },
      subtitle1: {
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '20px',
      },
      subtitle2: {
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '20px',
      },
      caption: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
      },
      body1: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
    spacing: [0, 4, 8, 12, 16, 20, 24, 28, 48, 64, 72, 84],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '6px',
          },
        },
      },
    },
  }
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>{children}</ThemeProvider>
  )
}
export default MaterialThemeProvider
