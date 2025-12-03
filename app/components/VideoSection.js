export default function VideoSection() {
    return (
        <section className="py-32 bg-black">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-8">
                        <h2 className="text-4xl font-bold">Patient Experience Demo</h2>
                        <div className="text-right hidden md:block">
                            <p className="text-gray-500 text-sm font-mono">MEDICAL_AGENT_V1</p>
                            <p className="text-gray-500 text-sm font-mono">LIVE_CALL_RECORDING</p>
                        </div>
                    </div>

                    <div className="aspect-video w-full bg-gray-900 rounded-sm overflow-hidden border border-white/10 relative group">
                        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <iframe
                            className="w-full h-full transition-all duration-700"
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
    );
}
