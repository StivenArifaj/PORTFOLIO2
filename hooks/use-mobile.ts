import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useMobile() {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        // Media query is more performant than resize event listener
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        }

        // Initial check
        mql.addEventListener("change", onChange)
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

        return () => mql.removeEventListener("change", onChange)
    }, [])

    return isMobile
}
