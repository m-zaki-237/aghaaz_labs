import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Code2, Terminal, Cpu } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Programming & DSA Live Demo Class
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600">Programming & DSA</span> From Scratch.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Get a real feel of how we learn, teach, and grow — together. Build the rock-solid problem-solving foundation required for modern Web Development and Autonomous Agentic AI.
          </p>

          {/* Slogan Banner */}
          <div className="flex flex-wrap items-center gap-3 text-indigo-900 font-sketch text-2xl font-semibold">
            <span>Same Course. Bigger Vision.</span>
            <span className="text-slate-400 text-sm font-sans font-normal">•</span>
            <span className="text-slate-600 font-sans text-sm font-medium">Practical + Future Ready</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => onOpenModal && onOpenModal("Programming & DSA Demo Class")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all text-base cursor-pointer"
            >
              Save Your Spot for Demo Class
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#curriculum"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-all text-base text-center"
            >
              Explore Curriculum
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>100% Practical Coding</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Live Doubt Clearance</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Real Interview Patterns</span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Simulation & Visual */}
        <div className="lg:col-span-5 text-left">
          <div className="relative rounded-2xl bg-slate-950 p-5 shadow-2xl border border-slate-800 text-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-slate-300">Solution.cpp</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">C++20</span>
            </div>

            <pre className="mt-4 font-mono text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
              <code>{`class Solution {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); ++i) {
      int need = target - nums[i];
      if (seen.count(need)) {
        return {seen[need], i};
      }
      seen[nums[i]] = i;
    }
    return {};
  }
};`}</code>
            </pre>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="text-emerald-400 font-mono">✓ O(n) Time • O(n) Space</span>
              <span className="font-sketch text-indigo-400 text-base">Small Steps, Big Dreams</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
