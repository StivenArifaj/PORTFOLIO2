"use client";

import { useEffect } from "react";

export default function ScrollFixer() {
    useEffect(() => {
        // Only handle hash scrolling if needed, but avoid forcing top scroll on load
        if (window.location.hash) {
            setTimeout(() => {
                const element = document.querySelector(window.location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        }
    }, []);

    return null;
}
