import Link from "next/link";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Learning Services - Nicole Tal | Custom AI Solutions",
  description: "Transform your training with AI-powered learning solutions. Services include AI strategy consulting, chatbot development, instructional design, and custom AI implementations.",
  keywords: ["AI learning services", "chatbot development", "AI consulting", "instructional design", "training optimization"],
};

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            AI-Powered Learning Solutions
          </h1>
          <p className="text-xl text-ink opacity-90">
            Custom services that bridge the gap between innovative AI technology and effective learning experiences
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Core Services
            </h2>
            <p className="text-lg text-ink opacity-80 max-w-3xl mx-auto">
              Comprehensive AI integration services designed to enhance your learning and training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-sage-tint p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-buttons rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">AI</span>
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-4">
                AI Strategy & Consulting
              </h3>
              <p className="text-ink opacity-80 mb-6">
                Strategic guidance for organizations looking to integrate AI into their learning and training programs. From assessment to implementation roadmaps.
              </p>
              <ul className="text-ink opacity-70 text-sm space-y-2">
                <li>• Current state analysis</li>
                <li>• AI readiness assessment</li>
                <li>• Implementation planning</li>
                <li>• ROI measurement frameworks</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-sage-tint p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-buttons rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">🤖</span>
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-4">
                Chatbot Development
              </h3>
              <p className="text-ink opacity-80 mb-6">
                Custom conversational AI agents that provide 24/7 learner support, answer questions, and guide users through training materials.
              </p>
              <ul className="text-ink opacity-70 text-sm space-y-2">
                <li>• Learning support chatbots</li>
                <li>• FAQ automation</li>
                <li>• Progress tracking bots</li>
                <li>• Multi-platform integration</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-sage-tint p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-buttons rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">📚</span>
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-4">
                Instructional Design
              </h3>
              <p className="text-ink opacity-80 mb-6">
                AI-enhanced learning experiences that adapt to individual learner needs while maintaining pedagogical best practices.
              </p>
              <ul className="text-ink opacity-70 text-sm space-y-2">
                <li>• Adaptive learning paths</li>
                <li>• Personalized content delivery</li>
                <li>• Assessment automation</li>
                <li>• Learning analytics integration</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-sage-tint p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-buttons rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-4">
                Training Optimization
              </h3>
              <p className="text-ink opacity-80 mb-6">
                Leverage AI analytics to optimize existing training programs, improve engagement, and enhance learning outcomes.
              </p>
              <ul className="text-ink opacity-70 text-sm space-y-2">
                <li>• Performance analytics</li>
                <li>• Content optimization</li>
                <li>• Engagement metrics</li>
                <li>• Predictive modeling</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-sage-tint p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-buttons rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">🔧</span>
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-4">
                Custom AI Solutions
              </h3>
              <p className="text-ink opacity-80 mb-6">
                Bespoke AI tools and platforms tailored to your organization&apos;s specific learning and training requirements.
              </p>
              <ul className="text-ink opacity-70 text-sm space-y-2">
                <li>• Custom platform development</li>
                <li>• API integrations</li>
                <li>• Data pipeline setup</li>
                <li>• Ongoing maintenance</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-sage-tint p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-buttons rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">👥</span>
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-4">
                Team Training & Support
              </h3>
              <p className="text-ink opacity-80 mb-6">
                Comprehensive training programs to help your team effectively use and maintain AI-powered learning tools.
              </p>
              <ul className="text-ink opacity-70 text-sm space-y-2">
                <li>• AI literacy workshops</li>
                <li>• Tool-specific training</li>
                <li>• Best practices guidance</li>
                <li>• Ongoing support packages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-sage-tint py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              My Process
            </h2>
            <p className="text-lg text-ink opacity-80">
              A collaborative approach that ensures AI integration aligns with your goals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-buttons rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">Discovery</h3>
              <p className="text-ink opacity-80">
                Understanding your current training landscape, goals, and challenges through comprehensive analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-buttons rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">Strategy</h3>
              <p className="text-ink opacity-80">
                Developing a customized AI integration plan that aligns with your organizational objectives and culture.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-buttons rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">Implementation</h3>
              <p className="text-ink opacity-80">
                Building and deploying AI solutions with careful attention to user experience and adoption.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-buttons rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">Optimization</h3>
              <p className="text-ink opacity-80">
                Continuous monitoring, refinement, and support to ensure maximum effectiveness and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-buttons py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Training?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let&apos;s discuss how AI can enhance your learning initiatives while maintaining the human touch that makes training effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-buttons px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-buttons transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}