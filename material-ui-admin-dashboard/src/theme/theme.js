// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

export const getCustomTheme = (mode = "light") =>
    createTheme({
        palette: {
            mode,
            ...(mode === "light"
                ? {
                    primary: {
                        main: "#1976d2",
                    },
                    secondary: {
                        main: "#9c27b0",
                    },
                    error: {
                        main: "#f44336",
                    },
                    success: {
                        main: "#4caf50",
                    },
                    info: {
                        main: "#2196f3",
                    },
                    background: {
                        default: "#000",
                        paper: "#ffffff",
                    },
                    text: {
                        primary: "#000000",
                        secondary: "#555555",
                    },
                }
                : {
                    primary: {
                        main: "#90caf9",
                    },
                    secondary: {
                        main: "#ce93d8",
                    },
                    error: {
                        main: "#ef5350",
                    },
                    success: {
                        main: "#66bb6a",
                    },
                    info: {
                        main: "#29b6f6",
                    },
                    background: {
                        default: "#151A2A",
                        paper: "#1e1e1e",
                    },
                    text: {
                        primary: "#ffffff",
                        secondary: "#aaaaaa",
                    },
                }),
        },

        typography: {
            fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
            button: {
                textTransform: "none",
                fontWeight: 600,
            },
        },

        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                        borderRadius: 8,
                    },
                },
            },
        },
    });
