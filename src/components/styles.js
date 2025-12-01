"use client";

import { useTheme } from '@mui/material/styles';

/**
 * Theme hook to use it when available.
 *
 * @param {*} stylesFn
 * @returns
 */
function makeStyles(stylesFn) {

    return () => stylesFn(useTheme())
}


export { useTheme, makeStyles };