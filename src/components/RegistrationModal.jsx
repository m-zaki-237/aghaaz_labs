import React, { useState } from "react";
import { X, Sparkles, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { openWhatsAppRegistration } from "../utils/whatsapp";

export default function RegistrationModal({ isOpen, onClose, selectedTrack }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+92 ");
  const [background, setBackground] = useState("University Student (CS / IT)");
  const [experience, setExperience] = useState("Absolute Beginner (Zero Coding)");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!phone.trim() || phone.trim() === "+92") {
      setErrorMsg("Please enter your WhatsApp contact number.");
      return;
    }

    setErrorMsg("");

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setIsSubmitted(true);

    // Redirect to WhatsApp
    setTimeout(() => {
      openWhatsAppRegistration({
        name: name.trim(),
        phone: phone.trim(),
        background,
        experience,
        track: selectedTrack || "Programming & DSA Demo Class",
      });
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-left overflow-hidden">
        {/* Background Gradient Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Title Header */}
            <div className="mb-6 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>FREE REGISTRATION • BATCH ENROLLMENT</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Reserve Your Spot
              </h3>

              <p className="text-xs text-slate-600">
                Registering for:{" "}
                <span className="font-bold text-indigo-600">
                  {selectedTrack || "Programming & DSA Demo Class"}
                </span>
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali Khan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="+92 3XX XXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 font-mono font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Current Background *
                </label>
                <select
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 font-medium bg-white"
                >
                  <option value="University Student (CS / IT)">University Student (CS / IT)</option>
                  <option value="Non-CS Student / Fresh Grad">Non-CS Student / Fresh Grad</option>
                  <option value="Self-Taught Developer">Self-Taught Developer</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="FSc / High School Student">FSc / High School Student</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Coding Experience Level *
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 font-medium bg-white"
                >
                  <option value="Absolute Beginner (Zero Coding)">
                    Absolute Beginner (Zero Coding)
                  </option>
                  <option value="Basic (Know Syntax & Loops)">
                    Basic (Know Syntax & Loops)
                  </option>
                  <option value="Intermediate (Solved basic problems)">
                    Intermediate (Solved basic problems)
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-emerald-600 via-indigo-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Confirm & Send Reservation via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Free Trial Pass • Instant WhatsApp Confirmation</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              Registration Received!
            </h3>

            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              We are redirecting you to WhatsApp to send your pre-filled confirmation message to{" "}
              <span className="font-bold text-slate-900">+92 335 6662958</span>.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
