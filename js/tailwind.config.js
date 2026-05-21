tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-error-container": "#ffdad6",
                "on-secondary": "#303030",
                "surface-container-highest": "#333535",
                "secondary-fixed": "#e2e2e2",
                "surface-variant": "#333535",
                "on-primary": "#2d3400",
                "on-tertiary-container": "#4c6971",
                "on-secondary-fixed": "#1b1b1b",
                "secondary-container": "#474747",
                "inverse-on-surface": "#2f3131",
                "surface-dim": "#121414",
                "on-tertiary": "#17343b",
                "on-surface": "#e2e2e2",
                "surface-container-high": "#282a2b",
                "on-background": "#e2e2e2",
                "tertiary-container": "#c9e8f1",
                "tertiary-fixed": "#c9e8f1",
                "secondary-fixed-dim": "#c6c6c6",
                "accent-lime-muted": "rgba(225, 255, 0, 0.1)",
                "surface-container-low": "#1a1c1c",
                "inverse-primary": "#586400",
                "on-error": "#690005",
                "surface-white": "#FFFFFF",
                "primary-container": "#d4f000",
                "outline": "#909378",
                "on-secondary-fixed-variant": "#474747",
                "tertiary-fixed-dim": "#adccd4",
                "surface-tint": "#b9d200",
                "on-secondary-container": "#b5b5b5",
                "on-tertiary-fixed": "#001f26",
                "secondary": "#c6c6c6",
                "surface-dark-grey": "#1A1A1A",
                "surface-container": "#1e2020",
                "error": "#ffb4ab",
                "background": "#121414",
                "error-container": "#93000a",
                "on-primary-container": "#5d6b00",
                "surface-container-lowest": "#0d0e0f",
                "primary-fixed": "#d4f000",
                "on-surface-variant": "#c6c9ab",
                "outline-variant": "#464932",
                "surface-bright": "#38393a",
                "surface": "#121414",
                "tertiary": "#ffffff",
                "on-tertiary-fixed-variant": "#2e4b52",
                "inverse-surface": "#e2e2e2",
                "on-primary-fixed-variant": "#424b00",
                "on-primary-fixed": "#191e00",
                "primary": "#d4f000",
                "primary-fixed-dim": "#b9d200"
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem"
            },
            spacing: {
                "margin-mobile": "16px",
                "margin-desktop": "64px",
                "base": "8px",
                "container-max": "1280px",
                "gutter": "24px"
            },
            fontFamily: {
                "body-lg": ["DM Sans"],
                "display-lg": ["Space Grotesk"],
                "display-lg-mobile": ["Space Grotesk"],
                "code": ["Space Grotesk"],
                "headline-md": ["Space Grotesk"],
                "headline-lg": ["Space Grotesk"],
                "label-caps": ["Space Grotesk"],
                "body-md": ["DM Sans"]
            },
            fontSize: {
                "body-lg":           ["18px", { lineHeight: "28px", fontWeight: "400" }],
                "display-lg":        ["72px", { lineHeight: "80px", letterSpacing: "-0.02em", fontWeight: "700" }],
                "display-lg-mobile": ["40px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
                "code":              ["14px", { lineHeight: "20px", fontWeight: "400" }],
                "headline-md":       ["24px", { lineHeight: "32px", fontWeight: "600" }],
                "headline-lg":       ["32px", { lineHeight: "40px", fontWeight: "600" }],
                "label-caps":        ["14px", { lineHeight: "20px", letterSpacing: "0.1em", fontWeight: "700" }],
                "body-md":           ["16px", { lineHeight: "24px", fontWeight: "400" }]
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "float-delayed": "float 6s ease-in-out 3s infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite"
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%":      { transform: "translateY(-10px)" }
                }
            }
        }
    }
};
