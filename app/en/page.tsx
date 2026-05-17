import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"
import { translations } from "@/lib/i18n"

export const metadata: Metadata = {
  title: translations.en.meta.title,
  description: translations.en.meta.description,
  keywords: translations.en.meta.keywords,
}

export default function Page() {
  return <HomePage locale="en" />
}
