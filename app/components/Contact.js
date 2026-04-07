'use client';

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-white border-t border-yellow-200">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto animate-fade-in-up">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-zinc-900">
                        Need medicines? Start on WhatsApp.
                    </h2>
                    <p className="text-xl text-zinc-700 mb-12 leading-relaxed">
                        Right now, the fastest way is simple: message us on WhatsApp with what you need, and we&apos;ll compare nearby vendor prices for you.
                    </p>

                    <a
                        href="https://wa.me/919877392768?text=Hi%20Ask%20It%2C%20I%20want%20to%20buy%20medicines."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-5 mb-8 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-300/60"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.52 3.48A11.89 11.89 0 0012.06 0C5.5 0 .18 5.31.18 11.87c0 2.09.54 4.13 1.57 5.93L0 24l6.37-1.67a11.85 11.85 0 005.68 1.45h.01c6.56 0 11.88-5.31 11.88-11.87 0-3.17-1.24-6.15-3.42-8.43zM12.06 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.78.99 1.01-3.68-.23-.38a9.88 9.88 0 01-1.51-5.27c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.14 1.03 7.01 2.91a9.83 9.83 0 012.9 6.99c0 5.47-4.45 9.93-9.91 9.93zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.29-.77.97-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.76-1.66-2.06-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35z" />
                        </svg>
                        Message us on WhatsApp
                    </a>

                    <div className="text-sm text-zinc-500 mb-8 font-mono">CURRENT SUPPORT</div>

                    <div className="inline-block p-8 border-2 border-yellow-200 rounded-2xl bg-yellow-50">
                        <p className="text-sm font-mono text-zinc-500 mb-3 uppercase tracking-widest">What happens next</p>
                        <p className="text-xl md:text-2xl font-bold text-zinc-900">
                            Share medicine details
                        </p>
                        <p className="text-zinc-600 mt-2">
                            We compare nearby vendors and reply with price options.
                        </p>
                    </div>

                    <p className="text-sm text-zinc-500 mt-8 font-mono">
                        Usually responds quickly on WhatsApp
                    </p>
                </div>
            </div>
        </section>
    );
}
