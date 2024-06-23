import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  safelist: [
    "bg-orange-600",
    "bg-pink-600",
    "bg-purple-600",
    "bg-blue-600",
    "bg-green-600",
    "hover:bg-orange-600",
    "hover:bg-pink-600",
    "hover:bg-purple-600",
    "hover:bg-blue-600",
    "hover:bg-green-600",
    "text-orange-600",
    "text-pink-600",
    "text-purple-600",
    "text-blue-600",
    "text-green-600",
    "border-orange-600",
    "border-pink-600",
    "border-purple-600",
    "border-blue-600",
    "border-green-600",
  ],
};
export default config;
