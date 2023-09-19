import { useState } from "react";
import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="content">
          <Topbar />
          <Sidebar />
          <div className="main">

            
            <Routes>
              {/* <Route path="/" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} /> <Route path="/" element={<Dashboard />} /> <Route path="/" element={<Dashboard />} /> <Route path="/" element={<Dashboard />} /> <Route path="/" element={<Dashboard />} /> <Route path="/" element={<Dashboard />} /> <Route path="/" element={<Dashboard />} /> */}


            </Routes>
          </div>
        </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
