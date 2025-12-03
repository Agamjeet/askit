export default function Philosophy() {
    return (
        <section className="py-32 bg-zinc-900 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div>
                        <h3 className="text-sm font-mono text-blue-500 mb-4 uppercase tracking-widest">Our Standard</h3>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Built for <span className="text-gray-500">Healthcare.</span><br />
                            Engineered for Trust.
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8">
                            Generic AI isn&apos;t enough for patient care. Vavework is engineered specifically for medical workflows. We prioritize accuracy, empathy, and absolute data security above all else.
                        </p>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                100% HIPAA Compliant Infrastructure
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Deep EMR Integration (Epic, Cerner, etc.)
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Intelligent Triage & Scheduling
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 blur-3xl opacity-20"></div>
                        <div className="relative border border-white/10 p-8 bg-black/50 backdrop-blur-sm">
                            <div className="font-mono text-sm text-gray-500 mb-4">&#47;&#47; CLINIC_METRICS</div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-green-400">
                                    <span>&gt; CALLS_ANSWERED</span>
                                    <span>100%</span>
                                </div>
                                <div className="flex justify-between text-blue-400">
                                    <span>&gt; APPOINTMENTS_BOOKED</span>
                                    <span>+40%</span>
                                </div>
                                <div className="flex justify-between text-purple-400">
                                    <span>&gt; STAFF_HOURS_SAVED</span>
                                    <span>20hrs/wk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
