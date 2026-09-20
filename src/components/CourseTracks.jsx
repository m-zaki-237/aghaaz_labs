import React from "react";
import {
  Code2,
  Bot,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Lock,
  Layers,
  Users,
  MessageSquare,
  Award,
} from "lucide-react";
import { COURSE_TRACKS } from "../utils/courseData";

export default function CourseTracks({ onOpenRegistration }) {
  return (
    <section id="courses" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold tracking-wide">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>SHERYIANS-INSPIRED CURATED LEARNING TRACKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Learning Pathways
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Structured, step-by-step tracks designed to take you from foundational logic to building autonomous AI systems.
          </p>
        </div>

        {/* Course Grid - 2 Main Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {COURSE_TRACKS.map((track) => {
            const isActive = track.active;

            return (
              <div
                key={track.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isActive
                    ? "bg-white border-2 border-indigo-600 shadow-premium-lg ring-4 ring-indigo-500/10"
                    : "bg-slate-100/80 border border-slate-300/80 opacity-95 shadow-sm hover:border-slate-400"
                }`}
              >
                {/* Active Indicator Glow Pill */}
                {isActive && (
                  <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-indigo-600 text-white text-xs font-extrabold tracking-wider shadow-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                    <span>{track.badge}</span>
                  </div>
                )}

                {!isActive && (
                  <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-slate-800 text-slate-200 text-xs font-extrabold tracking-wider shadow-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    <span>{track.badge}</span>
                  </div>
                )}

                <div>
                  {/* Track Icon & Title */}
                  <div className="flex items-start justify-between gap-4 mb-4 mt-2">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${
                        isActive
                          ? "bg-gradient-to-br from-indigo-600 to-sky-600 text-white"
                          : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {isActive ? <Code2 className="w-7 h-7" /> : <Bot className="w-7 h-7" />}
                    </div>

                    <div className="text-right">
                      <span className="inline-block text-xs font-mono font-bold text-slate-500 bg-slate-200/80 px-2.5 py-1 rounded-lg">
                        {track.duration}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                    {track.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {track.description}
                  </p>

                  {/* Target Audience Box */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                      <Users className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Who is this for?</span>
                    </div>
                    <p className="text-xs text-slate-600">{track.targetAudience}</p>
                  </div>

                  {/* Highlighted Feature Bullet Points */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block">
                      Track Highlights:
                    </span>
                    {track.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            isActive ? "text-indigo-600" : "text-slate-500"
                          }`}
                        />
                        <span className="text-xs font-semibold text-slate-700">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA & Pricing Action */}
                <div className="pt-6 border-t border-slate-200">
                  {isActive ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                        <span className="flex items-center gap-1 text-emerald-700">
                          <Award className="w-4 h-4" />
                          Certificate of Mastery Included
                        </span>
                        <span className="text-indigo-600 font-mono">LIVE BATCH 01</span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => onOpenRegistration(track.title)}
                          className="flex-1 py-3 px-5 rounded-xl text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Sparkles className="w-4 h-4 text-amber-300" />
                          <span>{track.ctaText}</span>
                        </button>

                        <button
                          onClick={() => {
                            const msg = encodeURIComponent(
                              "Hi Aghaaz Labs! I want to join the active Programming & DSA Live Cohort."
                            );
                            window.open(`https://wa.me/923356662958?text=${msg}`, "_blank");
                          }}
                          className="py-3 px-4 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                          <span>WhatsApp Direct</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                        <span className="flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5" />
                          Prerequisite: Programming & DSA Track
                        </span>
                        <span className="font-mono">PHASE 2</span>
                      </div>

                      <button
                        onClick={() => onOpenRegistration(track.title)}
                        className="w-full py-3 px-5 rounded-xl text-xs font-extrabold text-slate-700 bg-white border border-slate-300 hover:bg-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                      >
                        <Clock className="w-4 h-4 text-sky-600" />
                        <span>Join Priority Waitlist (Notify Me)</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
