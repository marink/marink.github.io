"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Container, Link as MuiLink } from '@mui/material';

export default function Footer() {

    const linkStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': {
            textDecoration: 'underline',
            color: '#000'
        }
    };
    return (
        <Box component="footer"
                sx={{
                    display: "flex",
                    gap: 2,                    
                    mt: 4, // optional: margin-top for spacing
                    fontSize: "0.9rem", 
                    color: "#666",
                    padding: 1,
                    flexDirection: "column",
                    alignItems: "center"
                }}>
        </Box>
    );
}