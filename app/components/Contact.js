'use client';

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-black border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto animate-fade-in-up">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
                        Ready to Transform Your Practice?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        Let&apos;s discuss how Vavework can help your clinic capture every patient opportunity. Drop us a line.
                    </p>

                    <a
                        href="https://calendly.com/vavework/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-5 mb-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/30"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Schedule a 30-Min Call
                    </a>

                    <div className="text-sm text-gray-600 mb-8 font-mono">OR</div>

                    <div className="inline-block p-8 border-2 border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <p className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-widest">Direct Line</p>
                        <a
                            href="mailto:adam@vavework.com"
                            className="text-3xl md:text-4xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
                        >
                            adam@vavework.com
                        </a>
                    </div>

                    <p className="text-sm text-gray-600 mt-8 font-mono">
                        Typically respond within 24 hours
                    </p>
                </div>
            </div>
        </section>
    );
}
