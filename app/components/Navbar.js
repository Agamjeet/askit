import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-black/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 h-20">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl font-black hover:bg-transparent">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-white tracking-tighter">
              Vave<span className="text-gray-500">work</span>
            </span>
          </div>
        </Link>
      </div>

      <div className="navbar-end gap-3">
        <Link href="mailto:contact@vavework.com" className="btn btn-white bg-white text-black hover:bg-gray-200 font-bold rounded-full px-8 border-none">
          Reach Out
        </Link>
      </div>
    </div>
  );
}