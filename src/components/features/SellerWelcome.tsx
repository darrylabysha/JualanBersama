import { motion } from 'motion/react';
import { Star, Shield, Users, ArrowRight } from 'lucide-react';
import { BRAND_COLOR, CONTENT } from '@/src/constants';
import Logo from '@/src/components/ui/Logo';

interface SellerWelcomeProps {
  onStart: () => void;
  referrerName?: string;
}

export default function SellerWelcome({ onStart, referrerName = 'Budi' }: SellerWelcomeProps) {
  return (
    <div className="pb-32 overflow-hidden">
      <div className="relative pt-12 pb-20 px-6 bg-gradient-to-br from-orange-400 to-orange-600 text-white">
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-2xl" />

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative z-10"
        >
          <div className="flex items-center justify-between mb-6">
            <Logo size={40} showText={false} className="bg-white p-2 rounded-2xl shadow-lg" />
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/30">
              <Users size={16} />
              <span className="text-xs font-bold">{referrerName} mengundangmu</span>
            </div>
          </div>
          
          <h2 className="text-4xl font-black leading-[1.1] mb-4">
            {CONTENT.welcome.title}
          </h2>
          <p className="text-orange-100 text-lg opacity-90 max-w-[90%]">
            {CONTENT.welcome.sub}
          </p>
        </motion.div>
      </div>

      <div className="px-6 -mt-10 relative z-20">
         <div className="bg-white rounded-[32px] p-8 shadow-2xl shadow-orange-900/10 border border-orange-50">
            <h3 className="font-bold text-gray-900 mb-6">Kenapa Jualan di Sini?</h3>
            
            <div className="grid gap-6">
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                     <Star className="text-orange-500 fill-orange-500" size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-sm text-gray-900">VIP Welcome Bonus</h4>
                     <p className="text-xs text-gray-500">{CONTENT.welcome.benefit}</p>
                  </div>
               </div>

               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                     <Shield className="text-blue-500" size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-sm text-gray-900">100% Terpercaya</h4>
                     <p className="text-xs text-gray-500">Sistem keamanan transaksi & bantuan CS 24/7.</p>
                  </div>
               </div>

               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                     <Users className="text-green-500" size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-sm text-gray-900">Jangkauan Luas</h4>
                     <p className="text-xs text-gray-500">Produkmu bisa dibeli dari seluruh Indonesia.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-md border-t border-gray-100">
        <button 
          onClick={onStart}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-white shadow-xl shadow-orange-200 active:scale-95 transition-all"
          style={{ backgroundColor: BRAND_COLOR.primary }}
          id="start-selling-btn"
        >
          Mulai Buka Toko
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
