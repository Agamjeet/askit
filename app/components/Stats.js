'use client';

export default function Stats() {
    return (
        <section className="py-24 bg-yellow-50 border-y border-yellow-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900">
                        Why people use <span className="text-yellow-600">Ask It</span>
                    </h2>
                    <p className="text-xl text-zinc-700 max-w-2xl mx-auto">
                        We make medicine buying easier by checking nearby vendor prices for you in one WhatsApp flow.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Stat 1 */}
                    <div className="p-8 border border-yellow-200 bg-white rounded-2xl hover:border-yellow-400 transition-colors duration-300 animate-fade-in-up animate-delay-100">
                        <div className="text-5xl md:text-6xl font-black text-zinc-900 mb-4 tracking-tighter">
                            1 Chat
                        </div>
                        <h3 className="text-xl font-bold text-zinc-800 mb-2">Simple Start</h3>
                        <p className="text-zinc-600 leading-relaxed">
                            Just message us on WhatsApp with your medicine list or prescription.
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-8 border border-yellow-200 bg-white rounded-2xl hover:border-yellow-400 transition-colors duration-300 animate-fade-in-up animate-delay-200">
                        <div className="text-5xl md:text-6xl font-black text-yellow-600 mb-4 tracking-tighter">
                            Nearby
                        </div>
                        <h3 className="text-xl font-bold text-zinc-800 mb-2">Local Vendors</h3>
                        <p className="text-zinc-600 leading-relaxed">
                            We compare medicine prices from vendors near your location.
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="p-8 border border-yellow-200 bg-white rounded-2xl hover:border-yellow-400 transition-colors duration-300 animate-fade-in-up animate-delay-300">
                        <div className="text-5xl md:text-6xl font-black text-zinc-900 mb-4 tracking-tighter">
                            Best Price
                        </div>
                        <h3 className="text-xl font-bold text-zinc-800 mb-2">Clear Comparison</h3>
                        <p className="text-zinc-600 leading-relaxed">
                            You get side-by-side options so you can choose what works best for your budget.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
