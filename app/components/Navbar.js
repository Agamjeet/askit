import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-white/90 backdrop-blur-xl border-b border-yellow-200 sticky top-0 z-50 h-20">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl font-black hover:bg-transparent">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-zinc-900 tracking-tighter">
              Ask <span className="text-yellow-500">It</span>
            </span>
          </div>
        </Link>
      </div>

      <div className="navbar-end gap-3">
        <a
          href="https://wa.me/919877392768?text=Hi%20Ask%20It%2C%20I%20need%20help%20finding%20my%20medicines."
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-yellow-400 text-zinc-900 hover:bg-yellow-300 font-bold rounded-full px-8 border-none"
        >
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
}