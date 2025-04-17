import { StrictMode, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { router } from "./routes/AppRoutes";

import { Provider, useSelector } from "react-redux";
import { store } from './redux/store';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { getCustomTheme } from './theme/theme'; // ✅ Import your custom theme

// --- Theme Wrapper that listens to Redux ---
function ThemeWrapper() {
  const mode = useSelector((state) => state.setting.themeMode);      // light/dark
  const colorMode = useSelector((state) => state.setting.colorMode); // default/purple/etc.

  const theme = useMemo(() => getCustomTheme(mode, colorMode), [mode, colorMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

// --- Root Render ---
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeWrapper />
    </Provider>
  </StrictMode>
);
