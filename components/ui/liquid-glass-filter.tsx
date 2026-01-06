"use client";

import React from "react";

export function LiquidGlassFilter() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fixed inset-0 pointer-events-none z-[-1] opacity-0 w-0 h-0"
            role="presentation"
            style={{ display: "block" }} // Ensure it's in the DOM but hidden
        >
            <filter
                id="glass-distortion"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                filterUnits="objectBoundingBox"
            >
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.001 0.005"
                    numOctaves="1"
                    seed="17"
                    result="turbulence"
                />
                <feComponentTransfer in="turbulence" result="mapped">
                    <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                    <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                    <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
                </feComponentTransfer>
                <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
                <feSpecularLighting
                    in="softMap"
                    surfaceScale="5"
                    specularConstant="1"
                    specularExponent="100"
                    lightingColor="white"
                    result="specLight"
                >
                    <fePointLight x="-200" y="-200" z="300" />
                </feSpecularLighting>
                <feComposite
                    in="specLight"
                    operator="arithmetic"
                    k1="0"
                    k2="1"
                    k3="1"
                    k4="0"
                    result="litImage"
                />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="softMap"
                    scale="20"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>

            <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.008 0.008"
                    numOctaves="2"
                    seed="92"
                    result="noise"
                />
                <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="blurred"
                    scale="70"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
        </svg>
    );
}
