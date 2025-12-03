export default function Stats() {
    return (
        <section className="py-24 bg-zinc-900 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        The Cost of <span className="text-red-500">Missed Calls</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        In today's on-demand world, patients expect immediate answers. Voicemail is a dead end.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Stat 1 */}
                    <div className="p-8 border border-white/10 bg-black/50 backdrop-blur-sm rounded-2xl hover:border-blue-500/50 transition-colors duration-300">
                        <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                            32%
                        </div>
                        <h3 className="text-xl font-bold text-gray-200 mb-2">Calls Missed</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Nearly one-third of all calls to medical practices go to voicemail or hang up. That's lost revenue.
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-8 border border-white/10 bg-black/50 backdrop-blur-sm rounded-2xl hover:border-blue-500/50 transition-colors duration-300">
                        <div className="text-5xl md:text-6xl font-black text-blue-500 mb-4 tracking-tighter">
                            $50k
                        </div>
                        <h3 className="text-xl font-bold text-gray-200 mb-2">Lost Revenue</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Average annual revenue lost per provider due to missed appointments and uncaptured leads.
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="p-8 border border-white/10 bg-black/50 backdrop-blur-sm rounded-2xl hover:border-blue-500/50 transition-colors duration-300">
                        <div className="text-5xl md:text-6xl font-black text-green-500 mb-4 tracking-tighter">
                            24/7
                        </div>
                        <h3 className="text-xl font-bold text-gray-200 mb-2">Patient Access</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Clinics with after-hours booking see a 40% increase in patient retention and satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
