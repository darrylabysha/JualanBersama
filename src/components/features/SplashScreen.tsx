import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoWhite from '@/src/components/ui/logo-white.png';

interface SplashScreenProps {
  onDone: () => void;
}

export default function SplashScreen({ onDone }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = setTimeout(() => setVisible(false), 2200);
    const done = setTimeout(onDone, 2700);
    return () => { clearTimeout(hide); clearTimeout(done); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <img
              src={logoWhite}
              alt="JualanBersama"
              width={88}
              height={88}
              style={{ borderRadius: 24 }}
            />

            <div className="flex flex-col items-center gap-1">
              <span className="text-[28px] font-[900] leading-none tracking-tight">
                <span className="text-gray-900">Jualan</span>
                <span className="text-orange-500">Bersama</span>
              </span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                by PasarBersama
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="absolute bottom-14 flex gap-1.5"
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-orange-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
