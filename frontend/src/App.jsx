import { useState } from 'react'
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ContactManager from './components/ContactManager'

const theme = createTheme();

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <ContactManager />
      </Container>
    </ThemeProvider>
  )
}

export default App
