import type { SVGProps } from "react"

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

export function LineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M21 11.5c0 4.7-4 8.3-9 8.3-1 0-2-.1-2.9-.3l-4 1.5 1.3-3.5C4 16.5 3 14 3 11.5 3 6.8 7 3.2 12 3.2s9 3.6 9 8.3Z" />
      <path d="M8 9.8v3.4" />
      <path d="M11 9.8v3.4" />
      <path d="M14 13.2V9.8l2 3.4V9.8" />
    </svg>
  )
}

export function ChatWorkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </svg>
  )
}
