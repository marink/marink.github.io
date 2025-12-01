"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { makeStyles } from '@components/styles';
import { addBasePath } from 'next/dist/client/add-base-path';

/**
 * Responsive application bar for the main application.
 * This component is used to display the application logo and name.
 * It is used on all pages of the application.
 *
 * @returns
 */
function ResponsiveAppBar() {

    const style = {
        boxShadow: 2,
        bgcolor: "#fffc",
        backdropFilter: "saturate(180%) blur(5px)",
        height: 60

    };
    return (
        <AppBar position="fixed" sx={style} color="default">
            <Container maxWidth="md">
                <Toolbar disableGutters>

                    <AppName />

                    {/* <AccessibilityIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

                </Toolbar>
            </Container>
        </AppBar>
    );
}

/**
 * Application logo
 *
 * @returns
 */
const AppLogo = () => {
    const imageSrc = addBasePath("/images/human-body.png");
    return (
        <Link href="/">
            <Box component="img"
                    sx={{
                        // display: { xs: 'none', md: 'flex' },
                        width: 64,
                        paddingRight: 1
                    }}
                    src={imageSrc} />
        </Link>
    )
}

/**
 * Application name component.
 *
 * @returns
 */
const AppName = () => {

    const styles = {
        display: { xs: 'none', md: 'flex' },
        fontWeight: 700,
        fontSize: "2rem",
        color: "black",
        paddingBottom: 2,
        textDecoration: 'none'
    };

    return (        
        <Link href="/" passHref>
            <Typography
                variant="h6"
                noWrap
                sx={styles}
            >
                Mathematics Concepts Explained
            </Typography>
        </Link>
    )
}

/**
 * Used as a vertical spacer so that the page contents
 * don't fall behind the app bar.
 *
 * @returns
 */
export const AppBarSpacer = () => {

    const classes = useStyles();

    return (
        <Box sx={classes.contentHeader} />
    )
}

export default ResponsiveAppBar;


/**
 * Define main layout styles.
 */
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },

    contentHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));