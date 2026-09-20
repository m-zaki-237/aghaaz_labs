import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles, MessageSquare } from "lucide-react";
import { FAQS } from "../utils/curriculumData";

export default function FAQSection({ onOpenRegistration }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We've Got Answers.
          </h2>

          <p className="text-base text-slate-600">
            Everything you need to know about the Demo Class, class schedule, hardware needs, and mentorship.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-indigo-300 shadow-md"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-200 ${
                      isOpen ? "bg-indigo-50 text-indigo-600 rotate-180" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Still have questions before reserving?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Chat directly with our academic advisor on WhatsApp (+92 335 6662958).
            </p>
          </div>

          <button
            onClick={() => {
              const msg = encodeURIComponent(
                "Hi Aghaaz Labs! I have a question about the course schedule and demo class."
              );
              window.open(`https://wa.me/923356662958?text=${msg}`, "_blank");
            }}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>WhatsApp Quick Answer</span>
          </button>
        </div>
      </div>
    </section>
  );
}
