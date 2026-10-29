import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LANGUAGE, translations } from './translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'portfolio-language'

/** Ambil bahasa awal: dari localStorage, kalau tidak ada pakai English. */
function getInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'en' || saved === 'id' ? saved : DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  // Simpan pilihan bahasa supaya tetap dipakai saat halaman dimuat ulang.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'))
  }, [])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      /** t = objek terjemahan sesuai bahasa aktif */
      t: translations[language],
    }),
    [language, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

/** Hook untuk memakai kamus bahasa di komponen mana pun. */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage harus dipakai di dalam <LanguageProvider>')
  }
  return context
}
