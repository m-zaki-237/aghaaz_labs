import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Play,
  CheckCircle2,
  Clock,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Bot,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { getNextSundaySession, getTimeRemaining } from "../utils/countdown";

export default function Hero({ onOpenRegistration }) {
  const [activeTab, setActiveTab] = useState("cpp");
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [codeOutput, setCodeOutput] = useState(null);

  // Countdown timer state
  const [targetDate] = useState(() => getNextSundaySession());
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const codeSnippets = {
    cpp: `// Aghaaz Labs - Two Sum (Optimal Hash Map approach)
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> mp;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (mp.count(complement)) {
            return {mp[complement], i};
        }
        mp[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    cout << "Indices: [" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}`,
    python: `# Aghaaz Labs - Two Sum (Pythonic Optimal Approach)
def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Test execution
nums = [2, 7, 11, 15]
target = 9
print("Target indices:", two_sum(nums, target))`,
    javascript: `// Aghaaz Labs - Two Sum (JavaScript Map)
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log("Found indices:", twoSum([2, 7, 11, 15], 9));`,
  };

  const handleRunCode = () => {
    setIsRunningCode(true);
    setCodeOutput(null);
    setTimeout(() => {
      setIsRunningCode(false);
      setCodeOutput({
        status: "SUCCESS (0ms execution)",
        stdout:
          activeTab === "cpp"
            ? "[Output]: Indices: [0, 1]\n[Memory]: 0.8 MB (O(N) Time, O(N) Space)\n[Test Cases]: 35/35 Passed ✓"
            : activeTab === "python"
            ? "[Output]: Target indices: [0, 1]\n[Memory]: 1.2 MB\n[Status]: Solution Accepted ✓"
            : "[Output]: Found indices: [0, 1]\n[Runtime]: 1ms\n[Status]: Solution Accepted ✓",
      });
    }, 600);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-grid-pattern">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-indigo-500/10 border border-indigo-200/80 text-indigo-900 text-xs font-bold tracking-wide shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>BATCH ENROLLMENT OPEN | FALL COHORT</span>
              <span className="bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full font-extrabold ml-1">
                LIMITED SEATS
              </span>
            </div>

            {/* Flyer Handwritten Slogan Sticker #1 */}
            <div className="relative">
              <span className="absolute -top-6 right-8 rotate-3 font-sketch text-indigo-600 text-lg sm:text-xl font-bold bg-amber-200/80 px-2.5 py-0.5 rounded-md shadow-xs border border-amber-300">
                ✨ Same Course. Bigger Vision.
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Master{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 underline decoration-indigo-300 underline-offset-8">
                  Programming & DSA
                </span>{" "}
                From Scratch to Advanced.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              The foundational gateway to modern Full-Stack Engineering and Agentic AI. Learn with live mentorship, real problem solving, and zero fluff.
            </p>

            {/* CTA Button Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenRegistration("Programming & DSA Demo Class")}
                className="group relative flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 hover:from-indigo-700 hover:to-sky-700 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Save Your Spot for Demo Class</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#curriculum"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 hover:border-slate-400 shadow-sm transition-all text-center"
              >
                <span>Explore Curriculum</span>
                <span className="text-indigo-600">↓</span>
              </a>
            </div>

            {/* Flyer Handwritten Slogan Sticker #2 */}
            <div className="flex items-center gap-2 pt-1 text-slate-500 text-xs">
              <span className="font-sketch text-slate-700 text-base font-bold bg-sky-100 px-2 py-0.5 rounded">
                "Small Steps, Big Dreams"
              </span>
              <span>•</span>
              <span className="font-sketch text-indigo-700 text-base font-bold bg-indigo-100 px-2 py-0.5 rounded">
                "Practical + Future Ready"
              </span>
            </div>

            {/* Trust Stats Bar */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "100% Practical", desc: "Live Hands-on Code" },
                { label: "Live Doubt Clearing", desc: "Discord & WhatsApp" },
                { label: "1-on-1 Mentorship", desc: "Direct Instructor Access" },
                { label: "Interview Patterns", desc: "150+ LeetCode Prep" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/80 p-2.5 rounded-lg border border-slate-200/60 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    <span>{stat.label}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Terminal IDE & Live Demo Class Widget */}
          <div className="lg:col-span-6 space-y-6">
            {/* Interactive Code Terminal */}
            <div className="relative bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden text-left">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono font-medium text-slate-400">
                    AghaazLabs_DSA_Sandbox.cpp
                  </span>
                </div>

                {/* Language Switcher Tabs */}
                <div className="flex items-center bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
                  {["cpp", "python", "javascript"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setActiveTab(lang);
                        setCodeOutput(null);
                      }}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase transition-all ${
                        activeTab === lang
                          ? "bg-indigo-600 text-white shadow-xs"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {lang === "cpp" ? "C++" : lang === "python" ? "Py" : "JS"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Body */}
              <div className="p-4 font-mono-code text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto max-h-[260px] scrollbar-thin">
                <pre className="text-slate-200">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Actions Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-3 bg-slate-900/90 border-t border-slate-800 gap-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Problem: LeetCode #1 Two Sum</span>
                </div>

                <button
                  onClick={handleRunCode}
                  disabled={isRunningCode}
                  className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 transition-all cursor-pointer shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{isRunningCode ? "Executing..." : "Run Execution"}</span>
                </button>
              </div>

              {/* Console Execution Output Drawer */}
              {codeOutput && (
                <div className="p-3 bg-slate-900 border-t border-emerald-500/40 text-xs font-mono animate-in slide-in-from-bottom-2">
                  <div className="flex items-center justify-between text-emerald-400 font-bold mb-1">
                    <span>{codeOutput.status}</span>
                    <span className="text-[10px] text-slate-400">Aghaaz Runtime Engine</span>
                  </div>
                  <pre className="text-slate-300 text-[11px] whitespace-pre-wrap">
                    {codeOutput.stdout}
                  </pre>
                </div>
              )}
            </div>

            {/* Floating Track Badges matching Flyer Stickers */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                { name: "DSA & Logic", icon: Code2, color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
                { name: "System Design", icon: Cpu, color: "bg-sky-50 text-sky-700 border-sky-200" },
                { name: "Web Dev", icon: Layers, color: "bg-amber-50 text-amber-800 border-amber-200" },
                { name: "AI & Agents", icon: Bot, color: "bg-purple-50 text-purple-700 border-purple-200" },
              ].map((badge, i) => {
                const IconComp = badge.icon;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold shadow-xs ${badge.color}`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{badge.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Live Demo Class Countdown Widget (Exact Flyer Spec) */}
            <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 p-5 rounded-2xl shadow-xl border border-indigo-500/30 text-white text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-400 uppercase tracking-wider mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>UPCOMING LIVE DEMO SESSION</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    THIS SUNDAY | 08:30 PM PKT
                  </h3>
                </div>

                <div className="bg-indigo-600/40 px-3 py-1 rounded-full border border-indigo-400/30 text-[11px] font-bold text-indigo-200">
                  Online Live Class (Zoom)
                </div>
              </div>

              {/* Ticking Countdown Digit Grid */}
              <div className="grid grid-cols-4 gap-2 my-4 text-center">
                {[
                  { value: timeLeft.days, label: "DAYS" },
                  { value: timeLeft.hours, label: "HOURS" },
                  { value: timeLeft.minutes, label: "MINS" },
                  { value: timeLeft.seconds, label: "SECS" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-800/90 border border-slate-700/80 p-2.5 rounded-xl">
                    <span className="block text-xl sm:text-2xl font-mono font-extrabold text-sky-300">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="block text-[9px] font-bold tracking-widest text-slate-400 mt-0.5">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenRegistration("Programming & DSA Demo Class")}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-900 fill-slate-900" />
                <span>Reserve Free Trial Pass Now →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
