import { Box, Stack } from "@mui/material";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Sidebar } from "./components/Sidebar";
import { Rightbar } from "./components/Rightbar";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { AddPost } from "./components/AddPost";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        light: "#93e1ca",
        main: "#5ac9a9",
        dark: "#21a680",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* we putting a nabar here */}
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
