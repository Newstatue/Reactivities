import { Box, Container, Toolbar } from "@mui/material";
import NavBar from "./NavBar";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from "react-router";

function App() {

  return (
    <Box sx={{ bgcolor: (theme) => theme.palette.background.default, minHeight: '100vh' }}>
      <NavBar />
      <Toolbar />
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Outlet/>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </Box>
  )
}

export default App
