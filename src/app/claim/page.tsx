"use client"

import Script from "next/script"
import { motion } from "framer-motion"
import { Wallet, Gift, CheckCircle2 } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Navigation } from "@/components/navigation"

export default function ClaimPage() {
  return (
    <>
      <Script src="/noir.js" strategy="afterInteractive" />

      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl"
          animate={{ x: [0, -25, 20, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />

        {/* Grid accent */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(245,158,11,0.2) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(245,158,11,0.2) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative w-full max-w-xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
          >
            <Gift className="w-4 h-4" />
            Rewards
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5"
          >
            Claim{" "}
            <span className="fire-gradient-text">{siteConfig.siteName}</span>{" "}
            rewards
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed"
          >
            Connect your wallet to claim the project&apos;s coin and access your rewards on Solana.
          </motion.p>

          {/* Claim card with CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-secondary/30 to-primary/50 shadow-xl shadow-primary/20 mb-12"
          >
            <div className="rounded-[calc(1rem-1px)] bg-card/90 backdrop-blur-sm p-8 sm:p-10">
              <p className="text-sm text-muted-foreground mb-6">
                One click to connect and claim
              </p>
              <button
                type="button"
                className="connect-btn noir-connect w-full py-4 px-8 text-base font-semibold rounded-xl border-0 fire-gradient-bg text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-3"
              >
                <Wallet className="w-5 h-5" />
                Connect Wallet
              </button>
            </div>
          </motion.div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-sm mx-auto mb-10"
          >
            {[
              { icon: Wallet, label: "Connect" },
              { icon: Gift, label: "Claim" },
              { icon: CheckCircle2, label: "Done" },
            ].map((step, i) => (
              <div
                key={step.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-muted/60 border border-border/50 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {step.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-xs text-muted-foreground/80"
          >
            Secured on Solana · No sign-up required
          </motion.p>
        </div>
      </section>
      </main>
    </>
  )
}
