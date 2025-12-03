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
            </div>
        </section>
    );
}
