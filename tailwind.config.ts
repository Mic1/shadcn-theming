import type { Config } from "tailwindcss"

import { shadcnPlugin } from "./lib/shadcn-plugin"

const config = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],

  plugins: [shadcnPlugin],
} satisfies Config

export default config
