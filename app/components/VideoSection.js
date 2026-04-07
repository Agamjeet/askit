'use client';

export default function VideoSection() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto animate-fade-in-up">
                    <div className="flex items-end justify-between mb-12 border-b border-yellow-200 pb-8">
                        <h2 className="text-4xl font-bold text-zinc-900">How Ask It works in real life</h2>
                        <div className="text-right hidden md:block">
                            <p className="text-zinc-500 text-sm font-mono">MEDICINE_REQUEST_FLOW</p>
                            <p className="text-zinc-500 text-sm font-mono">WHATSAPP_CHAT_DEMO</p>
                        </div>
                    </div>

                    <div className="aspect-[4/5] w-full bg-zinc-100 rounded-sm overflow-hidden border border-yellow-200 relative group">
                        <div className="absolute inset-0 bg-yellow-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <iframe
                            className="w-full h-full transition-all duration-700"
                            src="https://www.instagram.com/reel/DVSnDoqEt-d/embed"
                            title="Ask It Instagram Demo"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
