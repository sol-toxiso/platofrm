"use client"

import { cn } from "@/lib/utils"

interface ToxisoFlameLogoProps {
  className?: string
  size?: number
  /** Use fire gradient (orange/red) or inherit text/primary color */
  variant?: "fire" | "mono"
}

/**
 * Toxiso flame logo – stylized fire icon that reads as intense, energetic.
 * Works as icon-only or with the wordmark.
 */
export function ToxisoFlameLogo({ className, size = 40, variant = "fire" }: ToxisoFlameLogoProps) {
  const isFire = variant === "fire"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex-shrink-0", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="toxiso-flame-core" x1="20" y1="36" x2="20" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="0.25" stopColor="#F59E0B" />
          <stop offset="0.55" stopColor="#EF4444" />
          <stop offset="0.85" stopColor="#DC2626" />
          <stop offset="1" stopColor="#B91C1C" />
        </linearGradient>
        <linearGradient id="toxiso-flame-outer" x1="20" y1="38" x2="20" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCD34D" />
          <stop offset="0.2" stopColor="#F97316" />
          <stop offset="0.5" stopColor="#EA580C" />
          <stop offset="0.8" stopColor="#DC2626" />
          <stop offset="1" stopColor="#991B1B" />
        </linearGradient>
        <filter id="toxiso-flame-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Main flame – teardrop with pointed base, classic fire shape */}
      <path
        d="M20 4c0 0-8 8-8 16 0 6 3.5 10 8 14 4.5-4 8-8 8-14 0-8-8-16-8-16z"
        fill={isFire ? "url(#toxiso-flame-outer)" : "currentColor"}
        fillOpacity={isFire ? 1 : 1}
        className="transition-colors"
      />
      {/* Inner hot core */}
      <path
        d="M20 10c0 0-4 6-4 12 0 4 2 6 4 8 2-2 4-4 4-8 0-6-4-12-4-12z"
        fill={isFire ? "url(#toxiso-flame-core)" : "currentColor"}
        fillOpacity={isFire ? 1 : 0.7}
        filter={isFire ? "url(#toxiso-flame-glow)" : undefined}
        className="transition-colors"
      />
      {/* Bright tip */}
      {isFire && (
        <ellipse cx="20" cy="8" rx="2" ry="2.5" fill="#FEF3C7" fillOpacity="0.95" />
      )}
    </svg>
  )
}
