"use client"

import { createContext, useContext, type ReactNode } from "react"
import { translations, type Locale, type Translation } from "@/lib/i18n"

type LocaleContextValue = {
  locale: Locale
  t: Translation
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  const t = translations[locale]
  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): Locale {
  const ctx = useContext(LocaleContext)
  return ctx?.locale ?? "ja"
}

export function useT(): Translation {
  const ctx = useContext(LocaleContext)
  return ctx?.t ?? translations.ja
}
