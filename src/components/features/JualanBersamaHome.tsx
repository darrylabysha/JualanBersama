import { motion } from 'motion/react';
import { Share2, Store, Package, Coins, CheckCircle2, ChevronRight } from 'lucide-react';
import { BRAND_COLOR, CONTENT } from '@/src/constants';
import { ViewState } from '@/src/types';
import Logo from '@/src/components/ui/Logo';

interface JualanBersamaHomeProps {
  onNavigate: (view: ViewState) => void;
  onShare: () => void;
}

export default function JualanBersamaHome({ onNavigate, onShare }: JualanBersamaHomeProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-[#FAFAFA]">
      {/* Native App Style Header - Minimalist */}
      <div className="px-6 pt-6 pb-2">
        <Logo size={32} showText={true} />
      </div>

      {/* Modern Hero - Integrated */}
      <section className="px-6 py-4">
        <div className="relative bg-white rounded-[32px] p-8 overflow-hidden shadow-xl shadow-orange-900/5 border border-white">
           <div className="relative z-10 space-y-5">
              <h2 className="text-[32px] font-[900] text-gray-900 leading-[1.1] tracking-tight">
                {CONTENT.home.heroTitle}
              </h2>
              <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[240px]">
                {CONTENT.home.heroSub}
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                 <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 88}`} alt="User" />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-orange-500/20">
                       +10k
                    </div>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[11px] font-black text-gray-900">Gabung Komunitas</span>
                   <span className="text-[10px] font-bold text-gray-400">Baru bergabung jualan online!</span>
                 </div>
              </div>
           </div>
           
           {/* Abstract mesh background effect */}
           <div className="absolute top-0 right-0 w-48 h-48 bg-orange-100/30 rounded-full blur-[64px] -mt-12 -mr-12" />
        </div>
      </section>

      {/* Progress Card - More compact and modern */}
      <section className="px-6 pb-6">
        <div 
          onClick={() => onNavigate(ViewState.STATUS)}
          className="bg-gray-900 rounded-[32px] p-7 text-white flex justify-between items-center group active:scale-[0.98] transition-all cursor-pointer shadow-2xl shadow-gray-900/20"
        >
          <div className="space-y-5 flex-1">
             <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Potensi Bonus</div>
                  <div className="text-3xl font-[900] text-orange-400 tracking-tighter">Rp 100k</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-[900] tracking-tighter">2/5</div>
                  <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Teman Toko</div>
                </div>
             </div>
             {/* Progress Bar */}
             <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: '40%' }}
                   className="h-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]"
                />
             </div>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/5 ml-4 group-hover:bg-white/10 transition-colors">
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* Quick Steps - Cleaner grid */}
      <section className="px-7 py-2 grid gap-6">
         {CONTENT.home.steps.map((step, idx) => (
           <div key={idx} className="flex gap-5 items-center">
              <div className={`w-14 h-14 rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0 border border-gray-100 ${
                idx === 0 ? 'bg-blue-50 text-blue-500' : 
                idx === 1 ? 'bg-orange-50 text-orange-500' : 
                'bg-yellow-50 text-yellow-600'
              }`}>
                 {idx === 0 && <Share2 size={24} strokeWidth={2.5} />}
                 {idx === 1 && <Store size={24} strokeWidth={2.5} />}
                 {idx === 2 && <Coins size={24} strokeWidth={2.5} />}
              </div>
              <div className="space-y-0.5">
                 <h4 className="font-black text-[15px] text-gray-900">{step.title}</h4>
                 <p className="text-[11px] text-gray-500 leading-normal font-bold">{step.desc}</p>
              </div>
           </div>
         ))}
      </section>

      {/* The Main Action */}
      <div className="px-6 pt-10 pb-8">
        <button 
          onClick={onShare}
          className="w-full flex items-center justify-center gap-3 py-5 rounded-[28px] font-[900] text-white shadow-2xl active:scale-95 transition-all text-lg tracking-tight"
          style={{ 
            background: `linear-gradient(135deg, ${BRAND_COLOR.whatsapp} 0%, #17A05D 100%)`,
            boxShadow: '0 24px 48px -12px rgba(37, 211, 102, 0.4)'
          }}
          id="main-share-btn"
        >
          <Share2 size={22} strokeWidth={3} />
          Mulai Ajak Sekarang
        </button>
      </div>
    </div>
  );
}
