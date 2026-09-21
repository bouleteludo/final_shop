import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
const config:Config={
  content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme:{container:{center:true,padding:{DEFAULT:"1.25rem",sm:"2rem"},screens:{"2xl":"1200px"}},extend:{colors:{brand:{50:"#f4fbf7",100:"#e7f7ed",300:"#91d66f",500:"#59b52e",700:"#2f871e",900:"#123f22"},navy:{50:"#edf7ff",100:"#dceeff",300:"#72b7ea",500:"#1671b8",700:"#0b4d80",900:"#073455"}},boxShadow:{soft:"0 18px 55px rgba(7,52,85,.12)",glow:"0 16px 45px rgba(89,181,46,.22)"},keyframes:{float:{ "0%,100%":{transform:"translateY(0)"}, "50%":{transform:"translateY(-8px)"}},fadeUp:{from:{opacity:"0",transform:"translateY(20px)"},to:{opacity:"1",transform:"translateY(0)"}}},animation:{float:"float 5s ease-in-out infinite",fadeUp:"fadeUp .8s ease-out both"}}},plugins:[typography]};
export default config;
