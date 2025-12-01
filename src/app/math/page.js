"use client";

import React from "react";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

export default function MathPage() {
    return (
        <div>
            <h1>Welcome to the Math page</h1>
            <div>
                In this site we're going to explore concepts like Euler's form
                ula: <BlockMath math="e^{i\pi} + 1 = 0" />
                and attempt to explain in detail the background and derivation of these formulas or concepts.
            </div>
        </div>
    );
}
