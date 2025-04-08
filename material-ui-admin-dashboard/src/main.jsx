import { StrictMode, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { router } from "./routes/AppRoutes";

import { Provider, useSelector } from "react-redux";
import { store } from './redux/store';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// --- Theme Wrapper that listens to Redux ---
function ThemeWrapper() {
  const mode = useSelector((state) => state.setting.themeMode);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

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
