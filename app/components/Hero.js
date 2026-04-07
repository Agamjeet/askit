export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-yellow-50 to-white">
            <div className="absolute inset-0 opacity-70">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-300 via-yellow-100 to-white rounded-full filter blur-[110px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-block mb-6 px-4 py-2 border border-yellow-300 rounded-full bg-white/80 backdrop-blur-md">
                    <span className="text-sm font-mono tracking-widest uppercase text-zinc-700">WhatsApp First • Fast Local Price Checks</span>
                </div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
                    ASK IT<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-zinc-900">
                        MEDICINES ON WHATSAPP.
                    </span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg md:text-2xl text-zinc-700 leading-relaxed mb-10">
                    Send us your prescription on WhatsApp. We compare nearby medicine vendors for price and help you choose the best option quickly.
                </p>

                <a
                    href="https://wa.me/919877392768?text=Hi%20Ask%20It%2C%20please%20help%20me%20find%20my%20medicines."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-bold rounded-full transition-colors duration-300"
                >
                    Message us on WhatsApp
                </a>
            </div>
        </section>
    );
}
