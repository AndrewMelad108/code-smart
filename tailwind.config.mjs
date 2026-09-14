export default {
  theme: {
    extend: {
      colors: {
        ink: "#152552",
        navy: "#1C3461",
        muted: "#707995",
        brand: "#635bff",
        "brand-dark": "#4338ca",
        "brand-soft": "#f0efff",
        blue: "#3156d9",
        green: "#21c979",
        "green-soft": "#eafbf2",
        cyan: "#3dcfd2",
        yellow: "#ffb21c",
        paper: "#fbfbff",
        surface: "#ffffff",
        line: "#e9eafb",
        success: "#287857",
        "success-soft": "#eaf5ee",
        peach: "#fff1e8",
        "peach-ink": "#ad6033",
        night: "#242035",
      },
      fontFamily: {
        sans: ["Cairo", "Tahoma", "sans-serif"],
        header: ["Cairo", "Tahoma", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px -22px rgb(49 32 89 / 0.2)",
        header: "0 4px 40px 0 #E7EBFF",
        button: "0 5px 14px rgb(107 71 220 / 0.18)",
        dashboard: "0 32px 80px -30px rgb(76 49 134 / 0.3)",
      },
      backgroundImage: {
        hero: "linear-gradient(180deg, #f3f1ff 0%, #fafaff 100%)",
        "brand-gradient": "linear-gradient(90deg, #594CE3 0%, #1600FF 100%)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { rise: "rise 650ms ease-out both" },
    },
  },
};
