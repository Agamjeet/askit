'use client';

export default function Philosophy() {
    return (
        <section className="py-32 bg-yellow-50 border-t border-yellow-200">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div className="animate-fade-in-up">
                        <h3 className="text-sm font-mono text-yellow-600 mb-4 uppercase tracking-widest">Why Ask It</h3>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-zinc-900">
                            Built for <span className="text-yellow-600">medicine buying.</span><br />
                            Designed for speed.
                        </h2>
                        <p className="text-xl text-zinc-700 leading-relaxed mb-8">
                            People should not have to spend hours calling shops to find medicine prices. Ask It makes this simple through one WhatsApp conversation.
                        </p>
                        <ul className="space-y-4 text-zinc-700">
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                WhatsApp-first experience people already know
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                Nearby vendor comparison for transparent pricing
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                Faster decisions when medicines are urgent
                            </li>
                        </ul>
                    </div>
                    <div className="relative animate-fade-in-up animate-delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-100 blur-3xl opacity-70"></div>
                        <div className="relative border border-yellow-200 p-8 bg-white backdrop-blur-sm rounded-xl">
                            <div className="font-mono text-sm text-zinc-500 mb-4">&#47;&#47; ASK_IT_METRICS</div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-zinc-800">
                                    <span>&gt; REQUESTS_ON_WHATSAPP</span>
                                    <span>100%</span>
                                </div>
                                <div className="flex justify-between text-yellow-700">
                                    <span>&gt; VENDORS_COMPARED</span>
                                    <span>Nearby</span>
                                </div>
                                <div className="flex justify-between text-zinc-700">
                                    <span>&gt; PRICE_VISIBILITY</span>
                                    <span>Clear</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
