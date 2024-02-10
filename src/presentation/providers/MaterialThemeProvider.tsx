/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { ThemeOptions } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { NextFont } from 'next/dist/compiled/@next/font'

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
    },
    typography: {
      fontFamily: font.style.fontFamily,
      button: {
        textTransform: 'none',
      },
    },
    spacing: [0, 4, 8, 12, 16, 20, 24],
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
