"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-config"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Rocket, 
  Zap, 
  Camera, 
  Store, 
  Lock, 
  BarChart3,
  Shield,
  Users,
  Settings,
  TrendingUp,
  DollarSign,
  Copy,
  Target,
  LineChart,
  Flame,
  Wrench,
  ShieldCheck
} from "lucide-react"

const mainFeatures = [
  {
    icon: Rocket,
    title: "Token Creation",
    description: "Create SPL tokens with custom metadata in seconds. No coding required.",
    gradient: "from-primary to-[#0066FF]",
  },
  {
    icon: Zap,
    title: "Instant Distribution",
    description: "Send tokens to thousands of wallets simultaneously with our multisender.",
    gradient: "from-accent to-[#FFA500]",
  },
  {
    icon: Lock,
    title: "Authority Management",
    description: "Full control over mint, freeze, and update authorities.",
    gradient: "from-secondary to-[#FF33CC]",
  },
  {
    icon: TrendingUp,
    title: "Market Maker",
    description: "Advanced trading tools for market creation and liquidity management.",
    gradient: "from-[#F59E0B] to-[#EF4444]",
  },
]

const marketMakerFeatures = [
  {
    icon: Rocket,
    title: "Launch",
    description: "Launch tokens with automated market making",
  },
  {
    icon: DollarSign,
    title: "Volume Boost",
    description: "Increase trading volume with strategic boosts",
  },
  {
    icon: Copy,
    title: "Copy Trading",
    description: "Copy successful trading strategies automatically",
  },
  {
    icon: Target,
    title: "Sniper",
    description: "Precise token sniping with advanced targeting",
  },
  {
    icon: LineChart,
    title: "Trading",
    description: "Professional trading interface with real-time charts",
  },
  {
    icon: BarChart3,
    title: "Bundle Buys",
    description: "Execute multiple trades in a single transaction",
  },
  {
    icon: Flame,
    title: "Limit Orders",
    description: "Set and manage limit orders for optimal execution",
  },
  {
    icon: Wrench,
    title: "Trenches",
    description: "Advanced liquidity management tools",
  },
  {
    icon: ShieldCheck,
    title: "Wallet Check",
    description: "Verify and validate wallet security before trading",
  },
]

const additionalFeatures = [
  {
    icon: Camera,
    title: "Snapshot Tool",
    description: "Capture token holder data for airdrops",
  },
  {
    icon: Store,
    title: "DEX Integration",
    description: "Create markets on OpenBook & Raydium",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Audited smart contracts & secure infrastructure",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track token performance and holder metrics",
  },
  {
    icon: Users,
    title: "Community Tools",
    description: "Built-in tools for community management",
  },
  {
    icon: Settings,
    title: "Custom Metadata",
    description: "Full control over token properties",
  },
]

export function FeaturesSectionV2() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Subtle wave background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            d="M0,80 Q160,40 320,80 T640,80 T960,80 T1280,80 T1440,80 L1440,320 L0,320 Z"
            fill="url(#featuresWaveGradient)"
            initial={{ d: "M0,80 Q160,40 320,80 T640,80 T960,80 T1280,80 T1440,80 L1440,320 L0,320 Z" }}
            animate={{
              d: [
                "M0,80 Q160,40 320,80 T640,80 T960,80 T1280,80 T1440,80 L1440,320 L0,320 Z",
                "M0,100 Q160,60 320,100 T640,100 T960,100 T1280,100 T1440,100 L1440,320 L0,320 Z",
                "M0,60 Q160,20 320,60 T640,60 T960,60 T1280,60 T1440,60 L1440,320 L0,320 Z",
                "M0,80 Q160,40 320,80 T640,80 T960,80 T1280,80 T1440,80 L1440,320 L0,320 Z",
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="featuresWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
              <animate attributeName="x1" values="0%;100%;0%" dur="20s" repeatCount="indefinite" />
              <animate attributeName="x2" values="100%;0%;100%" dur="20s" repeatCount="indefinite" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6 px-6 py-2">
            {siteConfig.features.badge.toUpperCase()}
          </Badge>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            {siteConfig.features.title}{' '}
            <span className="text-primary">{siteConfig.features.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {siteConfig.features.subtitle}
          </p>
        </motion.div>

        {/* Main features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border border-primary/20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm glass">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Market Maker Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              {siteConfig.features.marketMakerTitle}{' '}
              <span className="text-primary">tools</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {siteConfig.features.marketMakerSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketMakerFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 border border-primary/10 hover:border-primary/30"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional features grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
