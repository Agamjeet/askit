export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-black border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
                        Ready to Transform Your Practice?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        Let's discuss how Vavework can help your clinic capture every patient opportunity. Drop us a line.
                    </p>

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
