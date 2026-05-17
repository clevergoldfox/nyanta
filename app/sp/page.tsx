import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"
import { translations } from "@/lib/i18n"

export const metadata: Metadata = {
  title: translations.sp.meta.title,
  description: translations.sp.meta.description,
  keywords: translations.sp.meta.keywords,
}

export default function Page() {
  return <HomePage locale="sp" />
}
