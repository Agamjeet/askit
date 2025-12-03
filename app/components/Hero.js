import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-900 via-purple-900 to-black rounded-full mix-blend-screen filter blur-[100px] animate-pulse duration-[10s]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-block mb-6 px-4 py-2 border border-white/20 rounded-full backdrop-blur-md">
                    <span className="text-sm font-mono tracking-widest uppercase text-gray-400">HIPAA Compliant • 24/7 Active</span>
                </div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
                    AI RECEPTIONIST<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                        FOR DOCTORS.
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Stop missing patient calls. Vavework handles appointments, insurance verification, and triage 24/7. Seamlessly integrated with your EMR.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <Link href="mailto:contact@vavework.com" className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-black transition-all duration-300 bg-white rounded-full hover:bg-gray-200 hover:scale-105">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                        <span className="relative text-xl tracking-wide">TRANSFORM YOUR CLINIC</span>
                        <svg className="w-5 h-5 ml-2 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>

                    <div className="text-sm text-gray-500 font-mono">
                        Exclusive pilot program for medical practices.
                    </div>
                </div>
            </div>
        </section>
    );
}
