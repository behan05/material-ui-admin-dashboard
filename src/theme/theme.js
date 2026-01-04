import { createTheme } from '@mui/material/styles';

export const getCustomTheme = (mode = 'light') =>
    createTheme({
        palette: {
            mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: '#8AB4F8',
                        light: '#B6CEFB',
                        dark: '#5F8EE4',
                        contrastText: '#0B0F10',
                    },
                    secondary: {
                        main: '#E8C07D',
                        light: '#F2D9A6',
                        dark: '#C9A24D',
                        contrastText: '#1A1A1A',
                    },
                    background: {
                        default: '#021628',
                        paper: '#020617',
                    },
                    text: {
                        primary: '#F1F3F4',
                        secondary: '#C7CCD1',
                        disabled: '#8A9096',
                    },
                    success: {
                        main: '#4ADE80',
                        contrastText: '#062E16',
                    },
                    error: {
                        main: '#FB7185',
                        contrastText: '#3B0A12',
                    },
                    warning: {
                        main: '#FACC15',
                        contrastText: '#2A1F00',
                    },
                    info: {
                        main: '#60A5FA',
                        contrastText: '#081A33',
                    },
                    divider: 'rgba(255,255,255,0.1)',
                }
                : {
                    primary: {
                        main: '#1E3A8A',
                        light: '#4F6FD6',
                        dark: '#162B65',
                        contrastText: '#FFFFFF',
                    },
                    secondary: {
                        main: '#9D6B38',
                        light: '#C89A63',
                        dark: '#6F4822',
                        contrastText: '#FFFFFF',
                    },
                    background: {
                        default: '#F2F4F7',
                        paper: '#FFFFFF',
                    },
                    text: {
                        primary: '#111827',
                        secondary: '#4B5563',
                        disabled: '#9CA3AF',
                    },
                    success: {
                        main: '#22C55E',
                        contrastText: '#FFFFFF',
                    },
                    error: {
                        main: '#EF4444',
                        contrastText: '#FFFFFF',
                    },
                    warning: {
                        main: '#EAB308',
                        contrastText: '#1F1600',
                    },
                    info: {
                        main: '#2563EB',
                        contrastText: '#FFFFFF',
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
                        borderRadius: 10,
                        textTransform: 'none',
                        fontWeight: 600,
                        paddingInline: 18,
                        paddingBlock: 11,
                        boxShadow:
                            mode === 'dark'
                                ? '0 6px 20px rgba(138, 180, 248, 0.25)'
                                : '0 6px 20px rgba(30, 58, 138, 0.25)',
                    },
                },
            },
        },
    });
