import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f0e9f1] bg-white/95 backdrop-blur-sm dark:bg-[#1e131f]/95 dark:border-gray-800">
      <div className="flex items-center justify-between px-6 py-4 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 text-primary dark:text-white">
          <a href="/" className="flex items-center gap-3 group">
            <div className="size-8 flex items-center justify-center">
              <img src="/apwen-logo.png" width="50" height="50" alt="APWEN UNILAG Chapter Logo" />
            </div>
            <h2 className="text-primary dark:text-white text-xl font-black leading-tight tracking-tight group-hover:opacity-80 transition-opacity">APWEN UNILAG</h2>
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <a className="text-[#181019] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-[#181019] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#events">Past Events</a>
            <a className="text-[#181019] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#leadership">Leadership</a>
          </nav>
          <a className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-accent text-white text-sm font-bold shadow-md hover:bg-opacity-90 transition-all transform hover:-translate-y-0.5" href="#register">
            <span>Join Now</span>
          </a>
        </div>
        <button
          className="md:hidden text-[#181019] dark:text-white transition-transform duration-300 active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#1e131f] border-b border-gray-100 dark:border-gray-800 shadow-xl animate-fade-in-down">
          <div className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
            <a className="flex items-center gap-3 p-4 text-[#181019] dark:text-gray-200 text-base font-medium hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors" href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined text-primary">info</span>
              About
            </a>
            <a className="flex items-center gap-3 p-4 text-[#181019] dark:text-gray-200 text-base font-medium hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors" href="#events" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined text-primary">event</span>
              Past Events
            </a>
            <a className="flex items-center gap-3 p-4 text-[#181019] dark:text-gray-200 text-base font-medium hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors" href="#leadership" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined text-primary">groups</span>
              Leadership
            </a>
            <div className="p-4 mt-2">
              <a className="flex w-full items-center justify-center rounded-xl h-12 bg-accent text-white text-base font-bold shadow-lg shadow-accent/20" href="#register" onClick={() => setIsMobileMenuOpen(false)}>
                Join Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
