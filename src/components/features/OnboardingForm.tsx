import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Check, Store, Phone, MapPin } from 'lucide-react';
import { BRAND_COLOR } from '@/src/constants';

interface OnboardingFormProps {
  onComplete: () => void;
}

export default function OnboardingForm({ onComplete }: OnboardingFormProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else onComplete();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-col items-center gap-2 flex-1">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                s <= step ? 'bg-orange-500 text-white shadow-lg shadow-orange-100' : 'bg-gray-100 text-gray-400'
              }`}
            >
              {s < step ? <Check size={20} /> : s}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${s <= step ? 'text-orange-500' : 'text-gray-400'}`}>
              {s === 1 && 'Informasi'}
              {s === 2 && 'Produk'}
              {s === 3 && 'Alamat'}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Apa Nama Tokomu?</h2>
            <p className="text-gray-500 text-sm">Gunakan nama yang menarik agar pembeli mudah mengenali tokomu.</p>
            
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nama Toko</label>
                <div className="relative">
                  <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Contoh: Kedai Snack Rini" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nomor WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="tel" 
                    placeholder="0812..." 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-sm"
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
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Upload Produk Pertamamu</h2>
            <p className="text-gray-500 text-sm">Tunjukkan produk terbaikmu! Pembeli menyukai foto yang asli dan jelas.</p>
            
            <div className="aspect-square w-full max-w-[240px] mx-auto bg-orange-50 border-2 border-dashed border-orange-200 rounded-3xl flex flex-col items-center justify-center gap-3 text-orange-400 cursor-pointer hover:bg-orange-100 transition-colors">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-orange-100">
                  <Camera size={32} />
               </div>
               <span className="text-sm font-bold">Ambil atau Pilih Foto</span>
            </div>

            <div className="space-y-1.5">
               <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nama Produk</label>
               <input 
                 type="text" 
                 placeholder="Masukkan nama produk..." 
                 className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-sm"
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
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Di Mana Lokasi Tokomu?</h2>
            <p className="text-gray-500 text-sm">Alamat ini digunakan kurir untuk menjemput paket pesananmu.</p>
            
            <div className="space-y-4">
              <div className="space-y-1.5">
                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">Kota atau Kecamatan</label>
                 <div className="relative">
                   <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                     type="text" 
                     placeholder="Cari Kota/Kecamatan..." 
                     className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-sm"
                   />
                 </div>
              </div>

              <div className="space-y-1.5">
                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">Alamat Lengkap</label>
                 <textarea 
                   rows={3}
                   placeholder="Nama Jalan, No. Rumah, RT/RW..." 
                   className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-sm resize-none"
                 />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-32 right-6 z-50">
        <button 
          onClick={() => window.open('https://wa.me/yourphone?text=Halo%20Admin%20PasarBersama,%20saya%20butuh%20bantuan%20daftar%20toko.', '_blank')}
          className="flex items-center gap-2 bg-white text-green-600 font-bold px-4 py-3 rounded-full shadow-2xl border border-green-100 animate-bounce active:scale-95 transition-all text-xs"
          id="help-wa-floating-btn"
        >
          <Phone size={16} fill="currentColor" />
          Butuh Bantuan? Chat Admin
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-50">
        <button 
          onClick={nextStep}
          className="w-full py-4 rounded-2xl font-bold text-white shadow-xl shadow-orange-100 active:scale-95 transition-all text-lg"
          style={{ backgroundColor: BRAND_COLOR.primary }}
          id="next-step-btn"
        >
          {step === totalSteps ? 'Selesaikan Pendaftaran' : 'Lanjut'}
        </button>
      </div>
    </div>
  );
}
