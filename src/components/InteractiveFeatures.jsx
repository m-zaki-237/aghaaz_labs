import React from 'react';
import { REAL_RESOURCES } from '../utils/courseData';
import { ExternalLink, MessageCircle, FileText, Compass, BookOpen } from 'lucide-react';

export default function InteractiveFeatures() {
  const handleResourceClick = (resource) => {
    if (resource.actionType === 'whatsapp') {
      const msg = encodeURIComponent(
        `Hi Aghaaz Labs!\n\nPlease share the *${resource.title}* with me.`
      );
      window.open(`https://wa.me/923356662958?text=${msg}`, '_blank');
    } else if (resource.url) {
      window.open(resource.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="resources" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto text-left">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          Free Learning Hub
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">
          Verified Study Resources & Notes
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Genuine roadmaps, syntax reference sheets, and lecture summaries to accelerate your preparation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REAL_RESOURCES.map((res) => (
          <div
            key={res.id}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  {res.actionType === 'whatsapp' ? (
                    <FileText className="w-5 h-5" />
                  ) : res.id.includes('roadmap') ? (
                    <Compass className="w-5 h-5" />
                  ) : (
                    <BookOpen className="w-5 h-5" />
                  )}
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {res.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {res.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {res.description}
              </p>
            </div>

            <button
              onClick={() => handleResourceClick(res)}
              className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                res.actionType === 'whatsapp'
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
              }`}
            >
              {res.actionType === 'whatsapp' ? (
                <>
                  <MessageCircle className="w-4 h-4" />
                  Request on WhatsApp
                </>
              ) : (
                <>
                  <ExternalLink className="w-4 h-4" />
                  Open Live Resource
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
