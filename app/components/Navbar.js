import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-xl border-b border-base-200 sticky top-0 z-50 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100/95 backdrop-blur-md rounded-2xl w-52 border border-base-200">
            <li><Link href="/" className="btn btn-ghost justify-start">Home</Link></li>
            <li><Link href="#features" className="btn btn-ghost justify-start">Features</Link></li>
            <li><Link href="#pricing" className="btn btn-ghost justify-start">Pricing</Link></li>
            <li><Link href="#contact" className="btn btn-ghost justify-start">Contact</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-black hover:bg-transparent">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-gradient-to-tr from-primary to-secondary text-primary-content rounded-xl w-10 shadow-lg shadow-primary/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
            <span className="text-2xl bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text text-transparent tracking-tight">
              Vave<span className="text-primary">work</span>
            </span>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <Link href="/" className="btn btn-ghost text-base font-medium hover:bg-base-200/50 hover:text-primary transition-all duration-300 rounded-xl">
              Home
            </Link>
          </li>
          <li>
            <a href="#features" className="btn btn-ghost text-base font-medium hover:bg-base-200/50 hover:text-primary transition-all duration-300 rounded-xl">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="btn btn-ghost text-base font-medium hover:bg-base-200/50 hover:text-primary transition-all duration-300 rounded-xl">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="btn btn-ghost text-base font-medium hover:bg-base-200/50 hover:text-primary transition-all duration-300 rounded-xl">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <Link href="#pricing" className="btn btn-primary font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 rounded-xl px-6">
          Start Free Trial
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}