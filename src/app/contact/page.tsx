import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Nicole Tal - AI Learning Consultant | Get In Touch",
  description: "Ready to transform your learning strategy with AI? Contact Nicole Tal for AI consulting, chatbot development, and custom learning solutions. Schedule a free consultation.",
  keywords: ["contact Nicole Tal", "AI consultant", "learning strategy consultation", "AI implementation"],
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Let&apos;s Work Together
          </h1>
          <p className="text-xl text-ink opacity-90">
            Ready to transform your learning strategy with AI? Let&apos;s start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info & Calendly */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-ink mb-8">
                  Other Ways to Connect
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-buttons rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Email</h3>
                      <p className="text-ink opacity-80">nicole@idnicoletal.com</p>
                      <p className="text-sm text-ink opacity-60">I typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-buttons rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">💼</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">LinkedIn</h3>
                      <p className="text-ink opacity-80">Connect with me professionally</p>
                      <a
                        href="#"
                        className="text-buttons hover:underline text-sm"
                      >
                        linkedin.com/in/nicoletal
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-buttons rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🕐</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Response Time</h3>
                      <p className="text-ink opacity-80">Within 24 hours on business days</p>
                      <p className="text-sm text-ink opacity-60">Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Integration Placeholder */}
              <div className="bg-sage-tint p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-ink mb-4">
                  Schedule a Call
                </h3>
                <p className="text-ink opacity-80 mb-6">
                  Prefer to talk? Book a free 30-minute consultation to discuss your AI learning strategy.
                </p>

                {/* Calendly Embed Placeholder */}
                <div className="bg-white rounded-lg p-8 text-center border-2 border-dashed border-buttons">
                  <div className="w-16 h-16 bg-buttons rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">📅</span>
                  </div>
                  <h4 className="font-semibold text-ink mb-2">Calendly Integration</h4>
                  <p className="text-sm text-ink opacity-70 mb-4">
                    Embed your Calendly widget here
                  </p>
                  <p className="text-xs text-ink opacity-50">
                    Replace this placeholder with your actual Calendly embed code
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-ink mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-2">
                      What&apos;s the typical project timeline?
                    </h4>
                    <p className="text-ink opacity-80 text-sm">
                      Most projects range from 2-6 months depending on complexity. I&apos;ll provide a detailed timeline during our initial consultation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">
                      Do you work with small organizations?
                    </h4>
                    <p className="text-ink opacity-80 text-sm">
                      Absolutely! I work with organizations of all sizes, from startups to enterprises. Every project is customized to fit your budget and needs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">
                      Can you help with existing AI implementations?
                    </h4>
                    <p className="text-ink opacity-80 text-sm">
                      Yes! I can audit, optimize, and enhance existing AI learning systems to improve their effectiveness and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
