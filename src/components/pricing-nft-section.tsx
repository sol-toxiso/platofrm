"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NFTPassSectionV2 } from "@/components/nft-pass-section-v2"
import { Check, Zap, X } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { ToxisoFlameLogo } from "@/components/toxiso-flame-logo"

const PASS_PRICE = "99"
const PASS_CURRENCY = "USDC"

export function PricingNFTSection() {
  const [showNFTMint, setShowNFTMint] = useState(false)

  return (
    <>
      <section id="pricing" className="relative py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Section header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-3 py-1 text-xs font-medium border-primary/40 text-primary/90">
              {siteConfig.pricing.badge}
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {siteConfig.pricing.title}{" "}
              <span className="fire-gradient-text">{siteConfig.pricing.titleHighlight1}</span>,{" "}
              {siteConfig.pricing.titleRest}{" "}
              <span className="fire-gradient-text">{siteConfig.pricing.titleHighlight2}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {siteConfig.pricing.subtitle}
            </p>
          </motion.header>

          {/* Main layout: Pass (dominant) + Free (compact) */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Free tier — compact card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:w-[280px] flex-shrink-0"
            >
              <div className="h-full rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 flex flex-col justify-between opacity-80">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{siteConfig.pricing.freeName}</p>
                  <p className="text-2xl font-bold">0 SOL</p>
                  <p className="text-xs text-muted-foreground mt-1">forever</p>
                  <p className="text-sm text-muted-foreground mt-4">{siteConfig.pricing.freeDescription}</p>
                  <ul className="mt-4 space-y-2">
                    {siteConfig.pricing.freeFeatures.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-primary/60 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" size="lg" className="w-full mt-6" disabled>
                  {siteConfig.pricing.freeCta}
                </Button>
              </div>
            </motion.div>

            {/* Platform Pass — main card, new design */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 min-w-0"
            >
              <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-secondary/30 to-primary/40 shadow-xl shadow-primary/20">
                <div className="rounded-[calc(1rem-1px)] bg-background/95 backdrop-blur-md flex flex-col md:flex-row min-h-[340px] overflow-hidden">
                  {/* Left: Price block */}
                  <div className="md:w-[42%] flex flex-col justify-center p-8 md:pr-4 border-b md:border-b-0 md:border-r border-border/40">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <ToxisoFlameLogo className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-primary uppercase tracking-wider">
                          {siteConfig.pricing.passName}
                        </p>
                        <p className="text-xs text-muted-foreground">NFT · Lifetime</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-5xl sm:text-6xl font-bold tabular-nums fire-gradient-text">
                        {PASS_PRICE}
                      </span>
                      <span className="text-xl font-medium text-muted-foreground">{PASS_CURRENCY}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{siteConfig.pricing.passDescription}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-primary">
                      <Zap className="w-4 h-4" />
                      <span className="font-medium">{siteConfig.pricing.popularLabel}</span>
                    </div>
                  </div>

                  {/* Right: Features + CTA */}
                  <div className="md:flex-1 flex flex-col justify-between p-8 md:pl-6">
                    <ul className="space-y-3">
                      {siteConfig.pricing.passFeatures.map((feature, i) => {
                        const isLast = i === siteConfig.pricing.passFeatures.length - 1
                        return (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            viewport={{ once: true }}
                            className={`flex items-center gap-3 ${isLast ? "pt-1" : ""}`}
                          >
                            {!isLast ? (
                              <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-primary" />
                              </span>
                            ) : (
                              <span className="w-5 h-5 flex-shrink-0" aria-hidden />
                            )}
                            <span className={`text-sm ${isLast ? "text-muted-foreground italic" : "text-foreground/90"}`}>
                              {feature}
                            </span>
                          </motion.li>
                        )
                      })}
                    </ul>
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full mt-8 fire-gradient-bg text-primary-foreground font-bold h-12 text-base hover:opacity-90 transition-opacity border-0 shadow-lg shadow-primary/25"
                      onClick={() => setShowNFTMint(true)}
                    >
                      {siteConfig.pricing.passCta}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showNFTMint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowNFTMint(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                onClick={() => setShowNFTMint(false)}
              >
                <X className="w-4 h-4" />
              </Button>
              <NFTPassSectionV2 />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
