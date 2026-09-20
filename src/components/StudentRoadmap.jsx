import React from "react";
import { Compass, CheckCircle, ArrowRight, Zap, Bot, Code, Cpu } from "lucide-react";
import { ROADMAP_STEPS } from "../utils/curriculumData";

export default function StudentRoadmap({ onOpenRegistration }) {
  return (
    <section id="roadmap" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 text-xs font-bold tracking-wide">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            <span>SHERYIANS-STYLE STUDENT CAREER ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Zero to Autonomous AI Engineer
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A clear 3-stage progression path designed to make you future-proof in the tech industry.
          </p>

          <span className="inline-block font-sketch text-amber-300 text-xl font-bold bg-indigo-950 px-3 py-0.5 rounded border border-indigo-800">
            "Small Steps, Big Dreams"
          </span>
        </div>

        {/* Roadmap Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {ROADMAP_STEPS.map((step, idx) => {
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-7 rounded-3xl border transition-all duration-300 ${
                  step.active
                    ? "bg-slate-800/90 border-indigo-500 shadow-2xl ring-2 ring-indigo-500/20"
                    : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Step Header Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-extrabold text-indigo-400 bg-indigo-950 px-3 py-1 rounded-full border border-indigo-800">
                      {step.step}
                    </span>

                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                        step.active
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Key Skills Tags */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Skills Acquired:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {step.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step Action Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  {step.active ? (
                    <button
                      onClick={() => onOpenRegistration("Programming & DSA Demo Class")}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Start Step 01 Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div className="text-center">
                      <span className="text-xs font-semibold text-slate-500">
                        Unlocks after Step 01 completion
                      </span>
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
