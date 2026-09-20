import React from "react";
import {
  FileText,
  HeartHandshake,
  MessageSquare,
  Sparkles,
  Check,
  Zap,
  BookOpen,
  BrainCircuit,
  Binary,
  Code,
  ArrowRight,
} from "lucide-react";
import { DEMO_FEATURE_CARDS, DEMO_PERKS } from "../utils/courseData";

export default function DemoClassSpotlight({ onOpenRegistration }) {
  const getFeatureIcon = (idx) => {
    switch (idx) {
      case 0:
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 1:
        return <BrainCircuit className="w-5 h-5 text-sky-600" />;
      case 2:
        return <Binary className="w-5 h-5 text-indigo-600" />;
      default:
        return <Code className="w-5 h-5 text-sky-600" />;
    }
  };

  const getPerkIcon = (title) => {
    if (title.includes("Notes")) return <FileText className="w-5 h-5 text-indigo-600" />;
    if (title.includes("Guidance")) return <HeartHandshake className="w-5 h-5 text-emerald-600" />;
    return <MessageSquare className="w-5 h-5 text-sky-600" />;
  };

  return (
    <section id="demo-spotlight" className="py-16 sm:py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-premium-lg relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-50 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
              <span>UPCOMING FREE LIVE TRIAL SESSION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Programming & DSA Demo Class
            </h2>

            <p className="text-base sm:text-lg text-slate-600">
              Get a real feel of how we learn, teach, and grow — together.
            </p>

            <span className="inline-block font-sketch text-indigo-600 text-lg sm:text-xl font-bold bg-amber-100 px-3 py-0.5 rounded-md rotate-1 shadow-2xs">
              ⚡ Let's Build Your Future Together
            </span>
          </div>

          {/* 4 Feature Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
            {DEMO_FEATURE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="group bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getFeatureIcon(idx)}
                    </div>
                    <span className="font-mono text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                      {card.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs font-bold text-indigo-700 mb-2 italic">
                    "{card.tagline}"
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Free Attendee Perks Bar */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white border border-indigo-500/20 relative z-10 mb-8 shadow-md">
            <div className="text-center sm:text-left mb-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                🎁 Exclusive Free Attendee Perks
              </span>
              <h4 className="text-lg font-bold text-white mt-0.5">
                What you get simply by joining the Demo Session:
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DEMO_PERKS.map((perk, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-white/10 text-white flex-shrink-0">
                    {getPerkIcon(perk.title)}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{perk.title}</span>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </h5>
                    <p className="text-xs text-slate-300 mt-1 leading-snug">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instant Booking Callout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 bg-amber-50 rounded-2xl border border-amber-200/80 relative z-10">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-800 flex-shrink-0">
                <Zap className="w-5 h-5 fill-amber-600 text-amber-600" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-amber-900 uppercase tracking-wide bg-amber-200/80 px-2 py-0.5 rounded">
                  Limited Seats Available
                </span>
                <p className="text-sm font-bold text-slate-800 mt-0.5">
                  Over 120+ students already reserved for this Sunday's batch demo.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenRegistration("Programming & DSA Demo Class")}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
            >
              <span>Book My Free Spot Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
