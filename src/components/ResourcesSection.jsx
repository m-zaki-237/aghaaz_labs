import React, { useState } from "react";
import { Download, FileText, Sparkles, Eye, X, BookOpen, Check } from "lucide-react";
import { CHEAT_SHEETS } from "../utils/curriculumData";

export default function ResourcesSection() {
  const [activePreview, setActivePreview] = useState(null);

  return (
    <section id="resources" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide">
            <FileText className="w-3.5 h-3.5 text-sky-600" />
            <span>FREE DEVELOPER RESOURCES & CHEAT SHEETS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Level Up Your Prep
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Handcrafted topic guides, memory diagrams, and problem pattern cheat sheets prepared by Aghaaz Labs mentors.
          </p>
        </div>

        {/* Cheat Sheets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHEAT_SHEETS.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md border border-indigo-100">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cs.size}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{cs.title}</h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {cs.snippet}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActivePreview(cs)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <button
                  onClick={() => setActivePreview(cs)}
                  className="py-2 px-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Modal */}
        {activePreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
              <button
                onClick={() => setActivePreview(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md w-max mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>{activePreview.category} Cheat Sheet</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                {activePreview.title}
              </h3>

              <p className="text-sm text-slate-600 mb-6">{activePreview.snippet}</p>

              {/* Mock PDF Viewer Card */}
              <div className="bg-slate-900 rounded-xl p-6 text-white font-mono text-xs space-y-3 mb-6 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                  <span>AGHAAZ_LABS_{activePreview.id.toUpperCase()}.PDF</span>
                  <span className="text-emerald-400 font-bold">READY FOR DOWNLOAD</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <p>✔ Includes 1-page summary chart & code templates</p>
                  <p>✔ High-resolution memory layout vector diagrams</p>
                  <p>✔ Verified by Aghaaz Labs Senior Mentors</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    alert(`Downloading ${activePreview.title}...`);
                    setActivePreview(null);
                  }}
                  className="w-full py-3 rounded-xl font-extrabold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free PDF ({activePreview.size})</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
