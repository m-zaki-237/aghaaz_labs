import React from "react";
import { MessageSquare, Heart, Shield, Terminal, ArrowUpRight } from "lucide-react";

export default function FooterBanner({ onOpenRegistration }) {
  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent(
      "Hi Aghaaz Labs! I want to book my seat for the upcoming Programming & DSA Demo Class."
    );
    window.open(`https://wa.me/923356662958?text=${msg}`, "_blank");
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      {/* Top Banner Callout (Exact Flyer Banner) */}
      <div className="border-b border-slate-800/80 py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 p-6 sm:p-8 rounded-3xl border border-indigo-500/30 shadow-2xl">
            {/* Left Brand */}
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-500 text-white font-extrabold text-xl shadow-md">
                A
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Aghaaz Labs</h3>
                <p className="text-xs font-semibold text-sky-400 tracking-wider">
                  Learn • Build • Grow
                </p>
              </div>
            </div>

            {/* Center Clickable WhatsApp Pill (Flyer Spec) */}
            <div>
              <button
                onClick={handleWhatsAppClick}
                className="group flex items-center gap-3 px-6 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/90 shadow-lg shadow-emerald-950/50 hover:scale-105 transition-all cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-emerald-400 text-emerald-400 group-hover:animate-bounce" />
                <span>Book Your Seat Now | +92 335 6662958</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>

            {/* Right Handwritten Flourish Slogan (Flyer Spec) */}
            <div className="text-center lg:text-right">
              <span className="font-sketch text-amber-300 text-2xl sm:text-3xl font-bold tracking-wide block drop-shadow-xs">
                "Let's Build Your Future Together"
              </span>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                Pakistan's Premier Developer Academy
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                A
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Aghaaz Labs
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sheryians-inspired developer platform delivering practical Programming, DSA, Full-Stack Web Development, and Agentic AI education.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li>
                <a href="#demo-spotlight" className="hover:text-sky-400 transition-colors">
                  Demo Class Spotlight
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-sky-400 transition-colors">
                  Course Tracks
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-sky-400 transition-colors">
                  DSA Curriculum
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-sky-400 transition-colors">
                  Student Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Free Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li>
                <a href="#resources" className="hover:text-sky-400 transition-colors">
                  C++ DSA Cheat Sheet
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-sky-400 transition-colors">
                  Big-O Complexity Guide
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-sky-400 transition-colors">
                  Top 14 LeetCode Patterns
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-sky-400 transition-colors">
                  Student FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Standard Footer Links & Support */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Community & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Discord Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  Contact Support (+92 335 6662958)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Aghaaz Labs (Learn • Build • Grow). All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Developers & AI Engineers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
