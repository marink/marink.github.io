"use client";

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const theme = createTheme({

    typography: {

        fontFamily: 'SF Pro Display, SF Pro Icons, SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif',
        
        margin: "16px 0",
        
        fontSize: 16,
        
        lineHeight: 1.2,
        
        pageTitle: {
            fontSize: '3rem',
            fontWeight: 700
        },

        h1: {
            paddingTop: "1rem",
            fontSize: "2rem"
        },
        
        h2: {
            fontSize: "1.6rem"
        },
        
        h3: {
            fontSize: "1.2rem"
        },
    },

    palette: {

        primary: {
            main: '#556cd6',
        },

        secondary: {
            main: '#19857b',
        },

        error: {
            main: red.A400,
        },

        background: {
            default: '#fff',
        },

        header: {
            backgroundColor: "#002f6c"
        }
    },

    drawerWidth: 240,

    components: {

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#002f6c",
                }
            }
        },

        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingTop: "1rem",
                    paddingBottom: "1rem"
                }
            }
        },
        
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: "2rem",
                    fontWeight: 700,
                },
                h2: {
                    fontSize: "1.6rem",
                    fontWeight: 600,
                },
                h3: {
                    fontSize: "1.2rem",
                    fontWeight: 500,
                }
            }
        }
    }
});


export default theme;