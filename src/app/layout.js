import { CssBaseline } from "@mui/material"

export const metadata = {
  title: 'AI Tales',
  description: 'Limitless Creativity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <CssBaseline>
          {children}
        </CssBaseline>
      </body>
    </html>
  )
}
