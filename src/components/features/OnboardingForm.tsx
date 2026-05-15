import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Check, Store, Phone, MapPin, MessageCircle } from 'lucide-react';
import { BRAND_COLOR } from '@/src/constants';

interface OnboardingFormProps {
  onComplete: () => void;
}

const STEPS = [
  { label: 'Informasi', icon: Store },
  { label: 'Produk',    icon: Camera },
  { label: 'Alamat',    icon: MapPin  },
];

export default function OnboardingForm({ onComplete }: OnboardingFormProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const progress = Math.round((step / totalSteps) * 100);

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else onComplete();
  };

  return (
    <div className="min-h-full bg-[#F5F5F7]">
      {/* Progress header */}
      <div className="bg-white px-5 pt-5 pb-4 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
        {/* Step labels with connecting line — Tokopedia style */}
        <div className="relative flex justify-between items-start mb-4">
          {/* Track line */}
          <div className="absolute top-4 left-4 right-4 h-px bg-gray-100 z-0" />
          {/* Filled portion */}
          <motion.div
            className="absolute top-4 left-4 h-px bg-orange-400 z-0"
            initial={{ width: 0 }}
            animate={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />

          {STEPS.map((s, idx) => {
            const n = idx + 1;
            const done = n < step;
            const active = n === step;
            return (
              <div key={idx} className="flex flex-col items-center gap-1.5 z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400 border-2 ${
                  done   ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-200'  :
                  active ? 'bg-white border-orange-500 text-orange-500 shadow-md shadow-orange-100' :
                           'bg-white border-gray-200 text-gray-400'
                }`}>
                  {done ? <Check size={14} strokeWidth={3} /> : <span className="text-[11px] font-black">{n}</span>}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-wide ${
                  active ? 'text-orange-500' : done ? 'text-gray-500' : 'text-gray-300'
                }`}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress bar + percentage */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-orange-500 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <span className="text-[11px] font-black text-orange-500 w-10 text-right">{progress}%</span>
        </div>
      </div>

      {/* Form body */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[24px] p-6 shadow-sm space-y-5"
            >
              <div>
                <h2 className="text-[22px] font-black text-gray-900 leading-tight">Apa Nama Tokomu?</h2>
                <p className="text-[12px] text-gray-400 mt-1 leading-relaxed">Gunakan nama yang menarik agar pembeli mudah mengenali.</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Nama Toko</label>
                  <div className="relative">
                    <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input
                      type="text"
                      placeholder="Contoh: Kedai Snack Rini"
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[16px] focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all text-[14px] font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Nomor WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input
                      type="tel"
                      placeholder="0812..."
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[16px] focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all text-[14px] font-medium"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[24px] p-6 shadow-sm space-y-5"
            >
              <div>
                <h2 className="text-[22px] font-black text-gray-900 leading-tight">Upload Produk Pertamamu</h2>
                <p className="text-[12px] text-gray-400 mt-1 leading-relaxed">Foto asli dan jelas lebih disukai pembeli!</p>
              </div>

              <div className="aspect-square w-full max-w-[200px] mx-auto bg-orange-50 border-2 border-dashed border-orange-200 rounded-[24px] flex flex-col items-center justify-center gap-3 text-orange-400 cursor-pointer active:scale-95 transition-all">
                <div className="w-14 h-14 bg-white rounded-[18px] flex items-center justify-center shadow-md shadow-orange-100">
                  <Camera size={28} className="text-orange-500" />
                </div>
                <span className="text-[12px] font-black">Pilih atau Ambil Foto</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Nama Produk</label>
                <input
                  type="text"
                  placeholder="Masukkan nama produk..."
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-[16px] focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all text-[14px] font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Harga (Rp)</label>
                <input
                  type="number"
                  placeholder="Contoh: 25000"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-[16px] focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all text-[14px] font-medium"
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[24px] p-6 shadow-sm space-y-5"
            >
              <div>
                <h2 className="text-[22px] font-black text-gray-900 leading-tight">Di Mana Lokasi Tokomu?</h2>
                <p className="text-[12px] text-gray-400 mt-1 leading-relaxed">Alamat ini digunakan kurir untuk menjemput paketmu.</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Kota / Kecamatan</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input
                      type="text"
                      placeholder="Cari Kota/Kecamatan..."
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[16px] focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all text-[14px] font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Alamat Lengkap</label>
                  <textarea
                    rows={3}
                    placeholder="Nama Jalan, No. Rumah, RT/RW..."
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-[16px] focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all resize-none text-[14px] font-medium"
                  />
                </div>
              </div>

              {/* Summary preview before submit */}
              <div className="bg-orange-50 border border-orange-100 rounded-[16px] p-4 space-y-1">
                <div className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-2">Ringkasan</div>
                {[
                  { label: 'Nama Toko', value: 'Kedai Snack Rini' },
                  { label: 'WhatsApp',  value: '0812-XXXX-XXXX' },
                  { label: 'Produk',    value: '1 produk siap tampil' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-[11px] text-gray-500">{row.label}</span>
                    <span className="text-[11px] font-bold text-gray-700">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating help button */}
      <div className="fixed bottom-28 left-0 right-0 max-w-md mx-auto z-50 pointer-events-none px-4">
        <div className="flex justify-end pointer-events-auto">
          <button
            onClick={() => window.open('https://wa.me/?text=Halo%20Admin%20PasarBersama,%20saya%20butuh%20bantuan%20daftar%20toko.', '_blank')}
            className="flex items-center gap-2 bg-white text-green-600 font-black px-4 py-3 rounded-full shadow-2xl shadow-gray-300/40 border border-green-100 active:scale-95 transition-all text-[11px]"
            id="help-wa-floating-btn"
          >
            <MessageCircle size={15} fill="currentColor" />
            Butuh Bantuan?
          </button>
        </div>
      </div>

      {/* CTA footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t border-gray-100 max-w-md mx-auto">
        <button
          onClick={nextStep}
          className="w-full py-4 rounded-[18px] font-black text-white text-[15px] active:scale-95 transition-all shadow-lg"
          style={{
            backgroundColor: BRAND_COLOR.primary,
            boxShadow: '0 12px 32px -8px rgba(255,107,0,0.45)',
          }}
          id="next-step-btn"
        >
          {step === totalSteps ? '✓ Selesaikan Pendaftaran' : 'Lanjut →'}
        </button>
      </div>

      {/* Bottom spacer so content isn't under the fixed CTA */}
      <div className="h-28" />
    </div>
  );
}
