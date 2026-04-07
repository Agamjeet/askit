'use client';

export default function Offer() {
    return (
        <section className="py-32 bg-white text-zinc-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                    <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tight">
                        HOW <span className="italic font-serif font-normal">ASK IT</span> WORKS
                    </h2>

                    <div className="border-4 border-yellow-400 p-8 md:p-16 relative bg-yellow-50">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-zinc-900 px-4 md:px-6 py-1 md:py-2 font-bold uppercase tracking-widest text-xs md:text-sm">
                            WhatsApp Flow
                        </div>

                        <p className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Send list.<br />
                            <span className="text-yellow-600">Get prices. Pick vendor.</span>
                        </p>

                        <p className="text-xl text-zinc-700 mb-12 leading-relaxed">
                            No app install. No calling multiple pharmacies yourself. Ask It compares nearby medicine vendors and sends your best options right on WhatsApp.
                        </p>

                        <div className="grid grid-cols-5 gap-4 max-w-lg mx-auto mb-12">
                            <div className="h-2 bg-yellow-400 w-full"></div>
                            <div className="h-2 bg-yellow-400 w-full"></div>
                            <div className="h-2 bg-yellow-400 w-full"></div>
                            <div className="h-2 bg-yellow-400 w-full"></div>
                            <div className="h-2 bg-yellow-400 w-full"></div>
                        </div>
                        <p className="text-sm font-mono text-zinc-600 uppercase tracking-widest">Fast, simple, transparent</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
