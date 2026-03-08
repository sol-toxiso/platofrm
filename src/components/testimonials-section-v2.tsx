"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const testimonials = [
  {
    name: siteConfig.testimonials.author1,
    role: siteConfig.testimonials.role1,
    content: siteConfig.testimonials.quote1,
    rating: 5,
    avatar: "AC",
  },
  {
    name: siteConfig.testimonials.author2,
    role: siteConfig.testimonials.role2,
    content: siteConfig.testimonials.quote2,
    rating: 5,
    avatar: "SJ",
  },
  {
    name: siteConfig.testimonials.author3,
    role: siteConfig.testimonials.role3,
    content: siteConfig.testimonials.quote3,
    rating: 5,
    avatar: "MR",
  },
]

export function TestimonialsSectionV2() {
  return (
    <section className="py-32 bg-muted/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {siteConfig.testimonials.title}{' '}
            <span className="text-primary">{siteConfig.testimonials.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteConfig.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto blur-sm">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 glass hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center text-foreground font-bold mr-3 shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center blur-sm"
        >
          <div className="inline-flex items-center justify-center space-x-12">
            <div>
              <div className="text-3xl font-bold text-primary">{siteConfig.testimonials.stat1}</div>
              <div className="text-sm text-muted-foreground">{siteConfig.testimonials.stat1Label}</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">{siteConfig.testimonials.stat2}</div>
              <div className="text-sm text-muted-foreground">{siteConfig.testimonials.stat2Label}</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">{siteConfig.testimonials.stat3}</div>
              <div className="text-sm text-muted-foreground">{siteConfig.testimonials.stat3Label}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
