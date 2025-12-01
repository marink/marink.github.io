
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import {CssBaseline, Container} from '@mui/material';
import theme from '@theme';

import AppBar, { AppBarSpacer } from "@components/AppBar";
import Footer from '@components/Footer';

export const metadata = {
    title: "How the Body Works",
    description: "Math concepts explained by examples",
    metadataBase: new URL("https://marink.github.io"), // Change this to your actual base URL
};


export default function RootLayout({children: pageContent}) {

    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>

                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />


                        { /* Main container for application pages */}
                        <Container maxWidth={false} disableGutters>

                            { /* Top navigation bar for all pages */}
                            <AppBar />
                            <AppBarSpacer />

                            { /* Pages content for all pages */}
                            {pageContent}

                            { /* Footer for all pages */}
                            <Footer />

                        </Container>

                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}