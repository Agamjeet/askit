import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function ClinicAIReceptionist() {
  return (
    <div className="min-h-screen bg-base-100 font-sans selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="hero min-h-screen relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-base-100">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        <div className="hero-content text-center relative z-10 max-w-5xl mx-auto px-4 py-20">
          <div className="flex flex-col items-center">
            <div className="badge badge-primary/10 text-primary border-primary/20 badge-lg mb-8 text-sm font-semibold px-6 py-4 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              #1 AI Receptionist for Medical Clinics
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-base-content via-base-content/80 to-base-content/60 bg-clip-text text-transparent">
                Your 24/7 Medical
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Front Desk
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-base-content/70 max-w-3xl mx-auto leading-relaxed font-medium">
              Transform your practice with <span className="text-base-content font-bold">Vavework</span>.
              Automate patient calls, verify insurance instantly, and fill your calendar
              while ensuring 100% HIPAA compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link href="#pricing" className="btn btn-primary btn-lg px-10 h-16 text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 rounded-2xl border-none bg-gradient-to-r from-primary to-primary/90">
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button className="btn btn-ghost btn-lg px-10 h-16 text-lg font-bold hover:bg-base-200/50 hover:scale-105 transition-all duration-300 rounded-2xl border border-base-200 bg-base-100/50 backdrop-blur-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-8 border-t border-base-200/60 w-full max-w-4xl">
              <p className="text-sm font-semibold text-base-content/40 mb-6 uppercase tracking-widest">Trusted by 500+ Clinics</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simple SVG Placeholders for Logos */}
                <div className="h-8 w-24 bg-base-content/20 rounded animate-pulse"></div>
                <div className="h-8 w-24 bg-base-content/20 rounded animate-pulse animation-delay-200"></div>
                <div className="h-8 w-24 bg-base-content/20 rounded animate-pulse animation-delay-400"></div>
                <div className="h-8 w-24 bg-base-content/20 rounded animate-pulse animation-delay-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-base-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-base-content tracking-tight">
              Everything Your Practice Needs
            </h2>
            <p className="text-xl text-base-content/60 leading-relaxed">
              Powerful features designed specifically for modern medical practices.
              HIPAA-compliant, secure, and incredibly efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Smart Scheduling",
                desc: "AI integrates directly with your EMR to book, reschedule, and manage appointments in real-time.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
                color: "text-primary",
                bg: "bg-primary/5"
              },
              {
                title: "Insurance Verification",
                desc: "Automatically verify patient insurance eligibility and copay amounts before the appointment.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                color: "text-secondary",
                bg: "bg-secondary/5"
              },
              {
                title: "Patient Recall",
                desc: "Proactively reach out to patients for follow-ups, annual check-ups, and preventative care.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
                color: "text-accent",
                bg: "bg-accent/5"
              },
              {
                title: "24/7 Triage",
                desc: "Intelligent symptom checking and urgent care routing based on your clinic's specific protocols.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                ),
                color: "text-error",
                bg: "bg-error/5"
              },
              {
                title: "Multilingual Support",
                desc: "Communicate with patients in over 30 languages, breaking down barriers to care.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                ),
                color: "text-info",
                bg: "bg-info/5"
              },
              {
                title: "HIPAA Secure",
                desc: "Enterprise-grade security with BAA included. Your patient data is encrypted and protected.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                ),
                color: "text-success",
                bg: "bg-success/5"
              }
            ].map((feature, i) => (
              <div key={i} className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bg} rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700`}></div>
                <div className="card-body p-8 relative">
                  <div className={`p-4 rounded-2xl w-fit mb-6 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="card-title text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-base-content/70 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <div className="badge badge-primary badge-lg mb-4">Watch Demo</div>
          <h2 className="text-4xl font-bold mb-12">See Vavework in Action</h2>
          <div className="max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-base-200">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/E73UhzfaAd8"
              title="Vavework Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-base-100 border-y border-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
            {[
              { label: "Calls Handled", value: "2M+", color: "text-primary" },
              { label: "Clinics Trusted", value: "500+", color: "text-secondary" },
              { label: "Hours Saved", value: "150k", color: "text-accent" },
              { label: "ROI Average", value: "10x", color: "text-success" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className={`text-5xl md:text-6xl font-black ${stat.color} tracking-tighter`}>
                  {stat.value}
                </div>
                <div className="text-base-content/60 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-base-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-base-content">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-base-content/60 max-w-2xl mx-auto">
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Standard Plan */}
            <div className="card bg-base-100 border border-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body p-10">
                <h3 className="text-2xl font-bold mb-2">Standard Practice</h3>
                <p className="text-base-content/60 mb-6">Perfect for solo practitioners and small clinics.</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black text-base-content">$499</span>
                  <span className="text-base-content/60">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Up to 1,000 minutes/month",
                    "Standard Business Hours Support",
                    "Basic EMR Integration",
                    "Email Support",
                    "HIPAA Compliance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline btn-block btn-lg">Start Free Trial</button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="card bg-base-900 text-base-100 shadow-2xl scale-105 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-content text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="card-body p-10">
                <h3 className="text-2xl font-bold mb-2 text-white">Growth Practice</h3>
                <p className="text-white/60 mb-6">For busy clinics needing full automation.</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black text-white">$999</span>
                  <span className="text-white/60">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Unlimited Minutes",
                    "24/7 After-Hours Support",
                    "Advanced EMR Integration (Epic, Cerner)",
                    "Priority Phone Support",
                    "Custom Voice Cloning",
                    "Dedicated Account Manager"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary btn-block btn-lg shadow-lg shadow-primary/20 border-none">Get Started Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="join join-vertical w-full">
            {[
              { q: "Is Vavework HIPAA compliant?", a: "Yes, absolutely. We sign a Business Associate Agreement (BAA) with every clinic and our infrastructure is fully encrypted and HIPAA compliant." },
              { q: "Does it integrate with my EMR?", a: "We integrate with most major EMR systems including Epic, Cerner, AthenaHealth, and DrChrono. Custom integrations are available on the Growth plan." },
              { q: "What happens if the AI can't answer?", a: "The AI is trained to intelligently route complex calls to your human staff or take a detailed message based on your preferences." },
              { q: "Can I keep my existing phone number?", a: "Yes! You simply set up call forwarding from your existing line to your dedicated Vavework number. It takes less than 5 minutes." }
            ].map((faq, i) => (
              <div key={i} className="collapse collapse-plus join-item border-b border-base-200 py-2">
                <input type="radio" name="my-accordion-4" defaultChecked={i === 0} />
                <div className="collapse-title text-xl font-medium">
                  {faq.q}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-base-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-base-900 to-base-900"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 max-w-4xl mx-auto">
            Ready to Modernize Your Practice?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join the future of medical administration. Save time, reduce costs, and improve patient satisfaction today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className="btn btn-primary btn-lg px-12 h-16 text-lg font-bold rounded-2xl">
              Start Your Free Trial
            </Link>
            <button className="btn btn-outline btn-lg px-12 h-16 text-lg font-bold rounded-2xl text-white border-white/20 hover:bg-white/10 hover:border-white">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}