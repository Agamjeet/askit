import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function AgencyLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-900 via-purple-900 to-black rounded-full mix-blend-screen filter blur-[100px] animate-pulse duration-[10s]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 border border-white/20 rounded-full backdrop-blur-md">
            <span className="text-sm font-mono tracking-widest uppercase text-gray-400">Limited Offer</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
            WE BUILD<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
              THE FUTURE.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Vavework isn't just another software company. We craft bespoke AI solutions that solve real problems. No fluff. No fake promises. Just code that works.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Link href="mailto:contact@vavework.com" className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-black transition-all duration-300 bg-white rounded-full hover:bg-gray-200 hover:scale-105">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative text-xl tracking-wide">REACH OUT</span>
              <svg className="w-5 h-5 ml-2 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <div className="text-sm text-gray-500 font-mono">
              Direct line to our engineering team.
            </div>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-32 bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tight">
              THE <span className="italic font-serif font-normal">LAUNCH</span> OFFER
            </h2>

            <div className="border-4 border-black p-8 md:p-16 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 font-bold uppercase tracking-widest">
                Exclusive
              </div>

              <p className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                First 5 Clients Get<br />
                <span className="text-blue-600">Month 1 Free.</span>
              </p>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We are looking for partners, not just customers. We want to prove our value before you pay a dime. Let us build your custom AI receptionist, set up your workflows, and demonstrate the ROI.
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-12">
                <div className="h-2 bg-black w-full"></div>
                <div className="h-2 bg-black w-full"></div>
                <div className="h-2 bg-gray-200 w-full"></div>
              </div>
              <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">2 Spots Remaining</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-8">
              <h2 className="text-4xl font-bold">See It In Action</h2>
              <div className="text-right hidden md:block">
                <p className="text-gray-500 text-sm font-mono">DEMO_V1.0</p>
                <p className="text-gray-500 text-sm font-mono">LIVE_PREVIEW</p>
              </div>
            </div>

            <div className="aspect-video w-full bg-gray-900 rounded-sm overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <iframe
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                src="https://www.youtube.com/embed/E73UhzfaAd8"
                title="Vavework Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-zinc-900 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-sm font-mono text-blue-500 mb-4 uppercase tracking-widest">Our Philosophy</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                We Don't Sell Software.<br />
                We Sell <span className="text-gray-500">Solutions.</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Most agencies try to fit you into their box. We build the box around you. Whether you need a complex medical triage system or a simple booking agent, we engineer it from the ground up to fit your specific needs.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Custom Large Language Models
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Seamless EMR/CRM Integration
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  24/7 Reliability Engineering
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 blur-3xl opacity-20"></div>
              <div className="relative border border-white/10 p-8 bg-black/50 backdrop-blur-sm">
                <div className="font-mono text-sm text-gray-500 mb-4">// SYSTEM_STATUS</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-green-400">
                    <span>&gt; UPTIME</span>
                    <span>99.99%</span>
                  </div>
                  <div className="flex justify-between text-blue-400">
                    <span>&gt; CALLS_HANDLED</span>
                    <span>14,203</span>
                  </div>
                  <div className="flex justify-between text-purple-400">
                    <span>&gt; ROI_GENERATED</span>
                    <span>+400%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}