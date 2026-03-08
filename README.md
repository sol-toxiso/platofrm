# toxiso

**The complete Solana DeFi platform for token creation, market making, and advanced trading.**

toxiso is a comprehensive platform that empowers builders and traders to create tokens, launch markets, and manage liquidity on Solana. With powerful market making tools including automated launches, volume boosting, copy trading, sniping, bundle buys, limit orders, and liquidity management, toxiso provides everything needed to succeed in DeFi.

## About

toxiso combines token creation, DEX integration (OpenBook & Raydium), and professional trading tools into one unified platform. Whether you're launching a new token or managing sophisticated trading strategies, toxiso offers the tools and infrastructure to move markets and build futures on Solana.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient animations and glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed with Next.js 14 and modern React patterns
- **Accessibility**: Built with accessibility in mind using shadcn/ui components
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd toxiso-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Solana RPC Endpoint
NEXT_PUBLIC_RPC_ENDPOINT=https://mainnet.helius-rpc.com/?api-key=your-api-key

# NFT Pass Configuration
NEXT_PUBLIC_NFT_PRICE=10
NEXT_PUBLIC_NFT_METADATA_URI=https://arweave.net/your-metadata-uri

# Shop Private Key (Base58 encoded)
# Generate a new keypair for your shop wallet
# You can use: solana-keygen new --outfile shop-keypair.json
# Then convert to base58: solana-keygen pubkey shop-keypair.json
SHOP_PRIVATE_KEY=your-shop-private-key-base58-encoded
```

### Setting up the NFT Pass

1. **Generate a shop wallet keypair:**
   ```bash
   solana-keygen new --outfile shop-keypair.json
   ```

2. **Get the private key in base58 format:**
   ```bash
   solana-keygen pubkey shop-keypair.json
   ```

3. **Fund the shop wallet with SOL for transaction fees**

4. **Update the metadata URI** with your actual NFT metadata

5. **Set up your RPC endpoint** (Helius, QuickNode, or custom)

## 🎨 Design Features

### Hero Section
- Animated gradient text
- Floating background elements
- Call-to-action buttons with hover effects
- Statistics display
- Solana branding

### Features Section
- 9 comprehensive feature cards
- Interactive hover animations
- Live demo simulation
- Gradient backgrounds and icons

### Testimonials Section
- User testimonials with ratings
- Glass morphism cards
- Floating background elements
- Statistics counter

### FAQ Section
- Accordion-style FAQ
- Smooth expand/collapse animations
- Support contact information

### Call-to-Action Section
- Compelling CTA with visual elements
- Trust indicators
- Feature highlights
- Floating animations

## 🎯 Key Improvements Over Original

1. **Modern UI**: Replaced MUI with shadcn/ui for better performance and customization
2. **Enhanced Animations**: Added Framer Motion for smooth, professional animations
3. **Better Performance**: Optimized bundle size and loading times
4. **Improved Accessibility**: Better keyboard navigation and screen reader support
5. **Mobile-First**: Completely responsive design
6. **SEO Optimized**: Better meta tags and structured data

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎨 Customization

### Colors
The design uses CSS custom properties for easy color customization. Main colors can be changed in `src/app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other colors */
}
```

### Components
All components are modular and can be easily customized or replaced. They're located in `src/components/`.

### Content
Update the content in the respective component files:
- `src/components/hero-section.tsx` - Hero content
- `src/components/features-section.tsx` - Features list
- `src/components/testimonials-section.tsx` - Testimonials
- `src/components/faq-section.tsx` - FAQ content

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: support@toxiso.xyz
- Twitter: @toxiso_xyz
- Telegram: @toxiso_community

---

Built with ❤️ by the toxiso team
