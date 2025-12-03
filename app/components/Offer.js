export default function Offer() {
    return (
        <section className="py-32 bg-white text-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-10"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tight">
                        THE <span className="italic font-serif font-normal">PILOT</span> PROGRAM
                    </h2>

                    <div className="border-4 border-black p-8 md:p-16 relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 font-bold uppercase tracking-widest">
                            Doctors Only
                        </div>

                        <p className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            First 5 Clinics Get<br />
                            <span className="text-blue-600">Month 1 Free.</span>
                        </p>

                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            We don't just sell software; we partner with your practice. Let us deploy a custom-trained medical voice agent that understands your specific protocols, insurance lists, and scheduling rules.
                        </p>

                        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-12">
                            <div className="h-2 bg-black w-full"></div>
                            <div className="h-2 bg-black w-full"></div>
                            <div className="h-2 bg-gray-200 w-full"></div>
                        </div>
                        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">2 Spots Remaining</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
