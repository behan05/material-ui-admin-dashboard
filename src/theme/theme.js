// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

export const getCustomTheme = (mode = 'light') =>
    createTheme({
        palette: {
            mode,
            ...(mode === 'dark'
                ? {
                    // 🌙 DARK MODE — Your input
                    primary: {
                        main: '#006D77',
                        light: '#33a1a8',
                        dark: '#004f53',
                        contrastText: '#ffffff',
                    },
                    secondary: {
                        main: '#EF476F',
                        light: '#ff6f8e',
                        dark: '#b80043',
                        contrastText: '#ffffff',
                    },
                    background: {
                        default: '#0B0F10',
                        paper: '#12181B',
                    },
                    text: {
                        primary: '#F5F5F5',
                        secondary: '#B0B0B0',
                        disabled: '#7a7a7a',
                    },
                    success: {
                        main: '#10B981',
                        contrastText: '#ffffff',
                    },
                    error: {
                        main: '#F43F5E',
                        contrastText: '#ffffff',
                    },
                    warning: {
                        main: '#FFD166',
                        contrastText: '#000000',
                    },
                    info: {
                        main: '#3ABFF8',
                        contrastText: '#ffffff',
                    },
                    divider: 'rgba(255,255,255,0.08)',
                }
                : {
                    // ☀️ LIGHT MODE — Custom-crafted to match
                    primary: {
                        main: '#007B83',
                        light: '#4FC0C5',
                        dark: '#00575D',
                        contrastText: '#ffffff',
                    },
                    secondary: {
                        main: '#EF476F',
                        light: '#FF7B94',
                        dark: '#C30043',
                        contrastText: '#ffffff',
                    },
                    background: {
                        default: '#F5F7F8',   // soft warm white with a cool touch
                        paper: '#FFFFFF',
                    },
                    text: {
                        primary: '#1C1E1F',   // Ink-like black
                        secondary: '#4D4F52', // Cool gray
                        disabled: '#A0A0A0',
                    },
                    success: {
                        main: '#10B981',
                        contrastText: '#ffffff',
                    },
                    error: {
                        main: '#F43F5E',
                        contrastText: '#ffffff',
                    },
                    warning: {
                        main: '#FFD166',
                        contrastText: '#000000',
                    },
                    info: {
                        main: '#0EA5E9',
                        contrastText: '#ffffff',
                    },
                    divider: 'rgba(0,0,0,0.08)',
                }),
        },

        typography: {
            fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
            button: {
                textTransform: 'none',
                fontWeight: 600,
            },
        },

        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        textTransform: 'none',
                        fontWeight: 600,
                        paddingInline: 16,
                        paddingBlock: 10,
                        '&:hover': {
                            opacity: 0.95,
                            boxShadow: mode === 'dark'
                                ? '0 4px 12px rgba(16, 185, 129, 0.2)'
                                : '0 4px 12px rgba(0, 125, 137, 0.2)',
                        },
                    },
                },
            },
        },
    });
