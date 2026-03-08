"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle, HelpCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const faqs = siteConfig.faq.items

export function FAQSectionV2() {
  return (
    <section id="faq" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 border border-primary/30 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {siteConfig.faq.title}{' '}
            <span className="text-primary">{siteConfig.faq.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteConfig.faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary/20 rounded-xl px-6 bg-card/50 backdrop-blur-sm glass hover:bg-card/70 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            {siteConfig.faq.supportPrompt}
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="group"
            onClick={() => window.open(siteConfig.links.telegram, '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            {siteConfig.faq.supportCta}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
