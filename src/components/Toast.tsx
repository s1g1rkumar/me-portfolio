import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'reward';
  title: string;
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto p-4 bg-slate-900/95 border border-cyan-400 clip-corner-tl-br shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-start space-x-3 text-slate-100 relative overflow-hidden backdrop-blur-md"
          >
            <div className="hud-corner hud-corner-tl" />
            <div className="hud-corner hud-corner-br" />

            <div className="p-2 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shrink-0">
              {t.type === 'reward' ? (
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              )}
            </div>

            <div className="flex-1 pr-2">
              <div className="font-display font-bold text-xs tracking-wider text-cyan-300 uppercase">
                {t.title}
              </div>
              <div className="font-tech text-xs text-slate-300 mt-0.5 leading-relaxed">
                {t.message}
              </div>
            </div>

            <button
              onClick={() => onDismiss(t.id)}
              className="text-slate-400 hover:text-cyan-300 text-xs font-mono font-bold"
            >
              ✕
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
