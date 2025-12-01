import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

/**
 * Customize the default theme:
 *  https://mui.com/material-ui/customization/default-theme/
 */
const theme = createTheme({
    typography: {
        fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
        pageTitle1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
        },
        h1: {
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

    overrides: {
        MuiCssBaseline: {
            '@global': {
                h1: {
                    fontFamily: "MMSharpSans, Helvetica, Arial, sans-serif",
                    fontSize: "0.5rem"
                }
            }
        },
        MuiButton: {
            root: {
                fontSize: '1rem',
            },
        },
        MuiSvgIcon: {
            root: {
                fontSize: 20
            }
        },
        MuiAppBar: {
            root: {
                display: 'flex',
                marginBottom: "1.5rem"
            },

            colorPrimary: {
                backgroundColor: "#002f6c",
            },
        },
        MuiBottomNavigationAction: {
            wrapper: {
                color: "white"
            }
        },
        MuiBottomNavigation: {
            root: {
                backgroundColor: "#002f6c",
                position: "fixed",
                bottom: 0
            }
        }
    }
});


export default theme;