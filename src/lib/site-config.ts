/**
 * Central site configuration for branding and URLs.
 * Update these values to rebrand the site.
 */
export const siteConfig = {
  /** Display name used in nav, hero, footer, meta */
  siteName: "toxiso",
  /** App/dashboard URL (CTA buttons) */
  appUrl: "https://app.toxiso.com",
  /** Tagline for meta and hero */
  tagline: "Build, Trade & Scale On Solana",
  /** Full meta description */
  metaDescription:
    "Complete Solana DeFi platform. Create tokens, launch markets, manage distributions, and scale your project. Everything you need to succeed in DeFi.",
  /** Hero section copy */
  hero: {
    headline: "Create. Launch.",
    headlineHighlight: "Scale on Solana",
    subheadline:
      "One platform for tokens, markets, and distribution on Solana. No code. No gatekeeping. Just ship.",
    ctaPrimary: "Launch App",
    ctaSecondary: "See Features",
  },
  /** Features section */
  features: {
    badge: "What we ship",
    title: "Everything you need to",
    titleHighlight: "ship on Solana",
    subtitle: "Token creation, distribution, markets, and analytics. Built for speed and control.",
    marketMakerTitle: "Trading & market maker",
    marketMakerSubtitle: "Launch liquidity, snipe, copy trade, and manage limit orders—all in one place.",
  },
  /** Pricing section */
  pricing: {
    badge: "Pricing",
    title: "Start",
    titleHighlight1: "free",
    titleHighlight2: "scale",
    titleRest: "when you grow",
    subtitle: "No lock-in. Pay for the Platform Pass once and get lifetime access.",
    freeName: "Free",
    freeDescription: "Coming soon. Early access for pass holders.",
    freeFeatures: ["Up to 3 tokens", "Basic management", "Community support"],
    freeCta: "Coming Soon",
    passName: "Platform Pass",
    passDescription: "Lifetime access. One-time payment.",
    passFeatures: [
      "Unlimited tokens",
      "Exclusive NFT Pass",
      "Lowest fees (0.05 SOL/token)",
      "Priority support",
      "Early access to new features",
      "And much more",
    ],
    passCta: "Get Platform Pass",
    popularLabel: "Most popular",
  },
  /** Testimonials section */
  testimonials: {
    title: "Built for",
    titleHighlight: "builders",
    subtitle: "Teams and solo founders already shipping on toxiso.",
    stat1: "10K+",
    stat1Label: "Active users",
    stat2: "50K+",
    stat2Label: "Tokens created",
    stat3: "4.9/5",
    stat3Label: "Rating",
    quote1: "We went from idea to live token in an hour. No devs, no waitlist. Just the tools we needed.",
    quote2: "Finally a Solana stack that doesn’t assume you’re a full-time degen. Clean UI, clear pricing.",
    quote3: "Unlimited tokens + market maker + multisender under one roof. Saved us months of integration work.",
    author1: "Alex Chen",
    role1: "DeFi builder",
    author2: "Sarah J.",
    role2: "Founder",
    author3: "Mike R.",
    role3: "Crypto native",
  },
  /** FAQ section */
  faq: {
    title: "Questions?",
    titleHighlight: "Answered.",
    subtitle: "Quick answers about toxiso and how it works.",
    supportPrompt: "Need more help?",
    supportCta: "Chat with us",
    items: [
      {
        question: "How much does it cost to create a token?",
        answer: "Token creation starts at 0.20 SOL for basic issuance. The Platform Pass gives you lifetime access with the lowest per-token fee (0.05 SOL) and no recurring costs.",
      },
      {
        question: "Do I need to know how to code?",
        answer: "No. toxiso is built so you can create tokens, set up markets, and run distributions from the UI. No coding required.",
      },
      {
        question: "How fast can I go live?",
        answer: "Most users have a token live in under two minutes. Connect your wallet, add metadata and supply, then deploy.",
      },
      {
        question: "What can I build on Solana with toxiso?",
        answer: "Any SPL token: utility, governance, meme, or custom. You get full control over metadata, supply, and authorities, plus tools for distribution and market making.",
      },
      {
        question: "Is it secure?",
        answer: "Yes. We use audited patterns and never touch your keys. Your wallet stays in your control; we only help you build and send transactions.",
      },
    ],
  },
  /** CTA section */
  cta: {
    title: "Ready to",
    titleHighlight: "ship?",
    subtitle: "Join builders who create, launch, and scale on Solana with toxiso.",
    primaryCta: "Launch toxiso",
    secondaryCta: "View pricing",
    trust: "No credit card • Start with SOL • Live in minutes",
  },
  /** NFT Platform Pass modal */
  nftPass: {
    badge: "Premium access",
    title: "Platform Pass",
    subtitle: "Unlock the full toxiso stack: unlimited tokens, markets, distribution, and support.",
    benefitsTitle: "What you get",
    benefitsSubtitle: "Everything included with your Platform Pass",
    mintTitle: "Mint your pass",
    mintSubtitle: "Connect wallet or scan with Solana Pay",
    priceLine1: "99 USDC",
    priceLine2: "One-time payment",
    priceLine3: "Lifetime access to all features",
    priceNote: "Plus ~0.02 SOL for NFT creation (rent + fees)",
    connectStep: "Connect wallet",
    mintCta: "Mint Platform Pass",
    successMessage: "Platform Pass minted successfully!",
    scanNote: "Scan with a Solana Pay–compatible wallet",
    benefits: [
      { title: "Unlimited token creation", desc: "Create as many tokens as you need with full control" },
      { title: "Priority processing", desc: "Faster confirmation and higher throughput" },
      { title: "Advanced token management", desc: "Mint, burn, freeze, and manage authorities" },
      { title: "Trading & markets", desc: "OpenBook and Raydium market creation" },
      { title: "Distribution tools", desc: "Multisender and snapshot management" },
      { title: "VIP support & early access", desc: "Priority support and new features first" },
      { title: "And much more", desc: "Everything you need to scale on Solana" },
    ],
  },
  /** Footer */
  footer: {
    tagline: "Solana token creation, markets, and distribution. Built for builders who ship.",
    launchCta: "Launch app",
    newsletterTitle: "Stay in the loop",
    newsletterSubtitle: "Product updates, Solana news, and no spam.",
    subscribeCta: "Subscribe",
    emailPlaceholder: "Your email",
  },
  /** Contact / legal emails */
  email: {
    privacy: "privacy@toxiso.com",
    legal: "legal@toxiso.com",
  },
  /** Social / external links */
  links: {
    telegram: "#",
    logo: "https://app.toxiso.com/logo/logo_single.png",
  },
  /** Local logo path (public folder). Replace logo_single.png for your brand. */
  logoPath: "/logo/logo_single.png",
} as const
