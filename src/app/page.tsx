import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background min-h-screen wave-bg relative px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center relative z-10">
          {/* Main Hero Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center w-full mb-16">
            {/* Content Block */}
            <div className="text-center md:text-left space-y-6 animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight">
                Nicole Tal
              </h1>
              
              <p className="text-2xl md:text-3xl text-additional font-medium leading-relaxed">
                Senior Instructional Designer and AI Consultant
              </p>
              
              {/* Decorative Line */}
              <div className="w-32 h-1 bg-accents mx-auto md:mx-0 my-8"></div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Link 
                  href="/contact"
                  className="bg-buttons text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center"
                >
                  Work With Me
                </Link>
                <Link 
                  href="/portfolio"
                  className="bg-buttons text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center"
                >
                  See My Work
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-center">
              <div className="relative animate-float">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-xl shadow-2xl overflow-hidden border-4 border-accents transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/nicole-headshot.png"
                    alt="Nicole Tal - AI-Savvy Instructional Designer"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-additional rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-buttons rounded-full animate-float" style={{animationDelay: '4s'}}></div>
              </div>
            </div>
          </div>
          
          {/* Additional Text Section - Centered Below Everything */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-6">
              Helping Learning Teams Level Up with AI.
            </h2>
            <p className="text-lg md:text-xl text-ink opacity-80 max-w-4xl mx-auto leading-relaxed">
              At the intersection of instructional design and intelligent technology, I help organizations modernize their learning experiences with clarity, strategy, and smart systems.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8">
            AI Integration for Learning & Training
          </h2>
          <p className="text-lg text-ink mb-12 max-w-3xl mx-auto opacity-80">
            Helping organizations seamlessly incorporate AI workflows while maintaining human-centered design principles
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-lg border-2 border-accents hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-additional rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">Instructional Design</h3>
              <p className="text-ink opacity-80">Custom learning solutions that blend proven pedagogy with innovative technology</p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-lg border-2 border-accents hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-buttons rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">Chatbot Development</h3>
              <p className="text-ink opacity-80">Intelligent conversational agents that enhance learning experiences</p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-lg border-2 border-accents hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-accents rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">AI Consulting</h3>
              <p className="text-ink opacity-80">Strategic guidance for organizations adopting AI in education and training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-additional py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning Strategy?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let&apos;s discuss how AI can enhance your educational initiatives while keeping learners at the center.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-additional px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg inline-block hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
