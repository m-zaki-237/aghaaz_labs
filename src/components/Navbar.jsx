import React, { useState, useEffect } from "react";
import { MessageSquare, Sparkles, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar({ onOpenRegistration }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Demo Class", href: "#demo-spotlight" },
    { name: "Courses", href: "#courses" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Why Us", href: "#roadmap" },
    { name: "Resources", href: "#resources" },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleWhatsAppDirect = () => {
    const msg = encodeURIComponent(
      "Hi Aghaaz Labs! I have a question about the upcoming Programming & DSA Demo Class."
    );
    window.open(`https://wa.me/923356662958?text=${msg}`, "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80"
          : "bg-slate-50/70 backdrop-blur-sm py-4 border-b border-slate-200/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-sky-500 text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 20L12 4L20 20" />
                <path d="M7 14h10" />
              </svg>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-sky-400 rounded-full animate-ping" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Aghaaz Labs
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-200">
                  Academy
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 tracking-wider">
                Learn • Build • Grow
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-white hover:shadow-xs transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={handleWhatsAppDirect}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all cursor-pointer"
              title="Chat on WhatsApp +92 335 6662958"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp Quick Chat</span>
            </button>

            <button
              onClick={() => onOpenRegistration("Programming & DSA Demo Class")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 hover:from-indigo-700 hover:to-sky-700 shadow-md hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
              <span>Book Free Demo</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenRegistration("Programming & DSA Demo Class")}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-lg shadow-sm"
            >
              Book Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppDirect();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm text-emerald-700 bg-emerald-50 border border-emerald-200"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp (+92 335 6662958)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration("Programming & DSA Demo Class");
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 to-sky-600 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Free Demo Class</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
