import React, { useState } from "react";
import {
  ChevronDown,
  BookOpen,
  Code2,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  Terminal,
  Brain,
  FileCode,
} from "lucide-react";
import { CURRICULUM_MODULES } from "../utils/curriculumData";

export default function CurriculumAccordion({ onOpenRegistration }) {
  const [openModuleId, setOpenModuleId] = useState("module-1");
  const [activeCodeModule, setActiveCodeModule] = useState("module-1");

  const toggleModule = (id) => {
    setOpenModuleId(openModuleId === id ? null : id);
    setActiveCodeModule(id);
  };

  return (
    <section id="curriculum" className="py-20 bg-slate-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wide">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>FULL-STACK DSA SYLLABUS BREAKDOWN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curriculum Architecture
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            5 Comprehensive modules designed step-by-step to take you from writing basic code to cracking competitive algorithmic interviews.
          </p>

          <span className="inline-block font-sketch text-indigo-600 text-lg sm:text-xl font-bold bg-amber-100 px-3 py-0.5 rounded-md -rotate-1">
            💡 "Zero Fluff • 100% Practical Implementation"
          </span>
        </div>

        {/* Layout: Accordion List + Code & Topic Preview Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {CURRICULUM_MODULES.map((mod) => {
              const isOpen = openModuleId === mod.id;

              return (
                <div
                  key={mod.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-indigo-400 shadow-md ring-2 ring-indigo-500/10"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  {/* Module Header Bar */}
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-sm flex-shrink-0 transition-colors ${
                          isOpen
                            ? "bg-indigo-600 text-white shadow-xs"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {mod.number}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-indigo-600 font-mono">
                            {mod.duration}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs font-semibold text-slate-500">
                            {mod.problemsCount}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {mod.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded-full transition-transform duration-300 ${
                        isOpen ? "bg-indigo-50 text-indigo-600 rotate-180" : "text-slate-400"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Expanded Body */}
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 border-t border-slate-100 pt-4 bg-slate-50/50">
                      <p className="text-sm text-slate-600 mb-4 italic">
                        {mod.summary}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {mod.topics.map((topic, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/70 shadow-2xs"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs font-semibold text-slate-700">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Code Snippet Mobile Accordion */}
                      <div className="lg:hidden mb-4">
                        <div className="bg-slate-900 rounded-xl p-3 text-xs font-mono text-slate-300 overflow-x-auto">
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
                            <span className="flex items-center gap-1">
                              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                              <span>Code Preview</span>
                            </span>
                          </div>
                          <pre>
                            <code>{mod.codeSnippet}</code>
                          </pre>
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenRegistration("Programming & DSA Demo Class")}
                        className="w-full sm:w-auto py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>Book Demo to Access Notes & Live Session →</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Code & Topic Preview Window (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left">
              {/* Header */}
              <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-sky-400" />
                  <span className="font-mono text-xs text-slate-300 font-bold">
                    Module Code Sample
                  </span>
                </div>

                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  Real Classroom Code
                </div>
              </div>

              {/* Code display */}
              <div className="p-4 font-mono-code text-xs text-slate-300 leading-relaxed overflow-x-auto min-h-[340px]">
                {CURRICULUM_MODULES.find((m) => m.id === activeCodeModule) ? (
                  <pre>
                    <code>
                      {CURRICULUM_MODULES.find((m) => m.id === activeCodeModule).codeSnippet}
                    </code>
                  </pre>
                ) : (
                  <p className="text-slate-500">Select a module to view code snippet.</p>
                )}
              </div>

              {/* Footer info box */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center justify-between font-bold text-slate-200">
                  <span>Mentored Live Coding & Code Reviews</span>
                  <span className="text-indigo-400">LeetCode + Codeforces</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Every topic comes with detailed problem sheets, solution trace sheets, and algorithmic logic diagrams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
