import type { Config } from "tailwindcss";

export default {
  content: [
      "./src/**/*.{js,ts,tsx}",
  ],
  safelist: [
    { pattern: /^blur-(sm|md|lg|xl|2xl|3xl)$/ },
    { pattern: /^brightness-(0|50|75|90|95|100|105|110|125|150|200)$/},
    { pattern: /^select-(auto|all|text|none)$/},
    { pattern: /^contrast-(0|50|75|100|125|150|200)$/},
    { pattern: /^hue-rotate-(0|15|30|60|90|180)$/},
    { pattern: /^saturate-(0|50|100|150|200)$/},
],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

