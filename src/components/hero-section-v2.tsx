"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { ToxisoFlameLogo } from "@/components/toxiso-flame-logo"

export function HeroSectionV2() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient drifting orbs – no mouse, slow continuous motion */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 25, -15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl"
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -10, 15, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Animated trading chart visualization */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 400" preserveAspectRatio="none">
          {/* Grid lines */}
          <defs>
            <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Chart waves – gentle opacity breathe + slow path shift */}
          <motion.path
            d="M0,300 Q200,250 400,280 T800,260 T1200,240 L1200,400 L0,400 Z"
            fill="url(#chartGradient1)"
            initial={{ pathLength: 0, opacity: 0.6 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{ 
              pathLength: { duration: 2.2, ease: "easeOut" },
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.path
            d="M0,320 Q200,270 400,300 T800,280 T1200,260 L1200,400 L0,400 Z"
            fill="url(#chartGradient2)"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ 
              pathLength: { duration: 2.8, ease: "easeOut", delay: 0.2 },
              opacity: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            }}
          />
        </svg>
      </div>

      {/* Grid pattern overlay – fire tint */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(245,158,11,0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(245,158,11,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Floating flame marks – slow vertical drift only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${18 + i * 32}%`,
              top: `${28 + i * 22}%`,
            }}
            initial={{ opacity: 0.1 }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.1, 0.18, 0.1],
            }}
            transition={{
              duration: 5 + i * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            <ToxisoFlameLogo size={56} variant="fire" className="opacity-30" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-screen py-20">
          <div className="text-center max-w-5xl space-y-10">
            {/* Badge – spring-based entrance */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex justify-center"
            />

            {/* Main Heading – spring + subtle scale */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.06 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
              >
                {siteConfig.hero.headline}
                <br />
                <span className="fire-gradient-text">
                  {siteConfig.hero.headlineHighlight}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.12 }}
                className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {siteConfig.hero.subheadline}
              </motion.p>
            </div>

            {/* CTA Buttons – spring stagger */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button
                size="xl"
                variant="gradient"
                className="group text-lg px-10 py-7 h-auto font-semibold shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                onClick={() => window.open(siteConfig.appUrl, '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="mr-3 h-6 w-6 inline-block" />
                </motion.div>
                {siteConfig.hero.ctaPrimary}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                size="xl"
                variant="outline"
                className="text-lg px-10 py-7 h-auto font-semibold border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {siteConfig.hero.ctaSecondary}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
