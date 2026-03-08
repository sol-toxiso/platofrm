"use client"

import { siteConfig } from "@/lib/site-config"
import { ToxisoFlameLogo } from "@/components/toxiso-flame-logo"

export function LogoExport() {
  return (
    <div className="flex items-center space-x-3 p-8 bg-white">
      <ToxisoFlameLogo size={40} variant="fire" />
      <span className="text-2xl font-bold fire-gradient-text">{siteConfig.siteName}</span>
    </div>
  )
}

export function LogoIconOnly() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <ToxisoFlameLogo size={40} variant="fire" />
    </div>
  )
}

export function LogoTextOnly() {
  return (
    <span className="text-2xl font-bold gradient-text">
      {siteConfig.siteName}
    </span>
  )
}
