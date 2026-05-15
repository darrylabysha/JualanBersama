import { motion } from 'motion/react';
import { Trophy, MessageSquare, Quote, Heart, ArrowUpRight } from 'lucide-react';
import { BRAND_COLOR } from '@/src/constants';

const SUCCESS_STORIES = [
  {
    name: 'Bu Rini (Malang)',
    story: 'Berkat JualanBersama, saya bisa bantu 5 tetangga buka toko keripik tempe online. Sekarang kami kirim paket setiap hari!',
    total: 5,
    tag: 'Fashion & Food'
  },
  {
    name: 'Pak Budi (Garut)',
    story: 'Dulu jualan baju cuma di pasar. Sekarang teman-teman sesama pedagang saya ajak ke PasarBersama, omzet naik 3x lipat.',
    total: 12,
    tag: 'Batik & Tenun'
  }
];

export default function CommunityPage() {
  return (
    <div className="p-6 space-y-8 animate-in slide-in-from-bottom duration-500 bg-[#FAFAFA]">
      {/* Community Stats */}
      <section className="bg-gray-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl shadow-gray-900/20">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4 opacity-70">
            <Trophy size={16} className="text-orange-400" />
            <span className="text-[10px] font-black uppercase tracking-widest">Pencapaian Komunitas</span>
          </div>
          <h2 className="text-[40px] font-[900] mb-0 tracking-tighter leading-none">10.240</h2>
          <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wide mt-2">Seller baru terbantu bulan ini ✨</p>
          
          <div className="mt-8 pt-8 border-t border-white/5 flex justify-between">
            <div className="text-left">
              <div className="text-xl font-[900] tracking-tighter">Rp 500jt</div>
              <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Total Bonus Cair</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-[900] tracking-tighter">98%</div>
              <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Seller Aktif</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="space-y-5">
        {SUCCESS_STORIES.map((story, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-7 rounded-[32px] border border-white shadow-xl shadow-gray-200/50 relative"
          >
            <Quote className="absolute top-4 right-7 text-orange-50" size={48} />
            
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-orange-100 rounded-[20px] flex items-center justify-center text-orange-600 font-black text-lg shadow-inner">
                {story.name[0]}
              </div>
              <div>
                <div className="text-sm font-black text-gray-900">{story.name}</div>
                <div className="text-[10px] text-orange-600 font-black uppercase tracking-widest">{story.tag}</div>
              </div>
            </div>
            
            <p className="text-[13px] text-gray-600 font-bold leading-[1.6] mb-5 tracking-tight">
              "{story.story}"
            </p>
            
            <div className="flex items-center justify-between border-t border-gray-50 pt-5">
               <div className="flex items-center gap-2 text-pink-500">
                  <div className="p-1.5 bg-pink-50 rounded-lg">
                    <Heart size={14} fill="currentColor" />
                  </div>
                  <span className="text-[11px] font-black">24 Suka</span>
               </div>
               <div className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                  {story.total} Teman Diajak
               </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Join Community CTA */}
      <section className="bg-green-50 p-6 rounded-3xl border border-green-100 text-center space-y-3">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
           <MessageSquare size={20} className="text-green-600" />
        </div>
        <div>
           <h4 className="font-bold text-gray-900">Gabung Grup JualanBersama</h4>
           <p className="text-xs text-gray-500 mb-3 leading-relaxed">Berbagi tips & trik jualan dengan sesama seller sukses lainnya.</p>
           <button className="flex items-center justify-center gap-2 w-full py-3 bg-white text-green-600 text-xs font-bold rounded-xl border border-green-200 shadow-sm active:scale-95 transition-all">
              Buka Grup WhatsApp <ArrowUpRight size={14} />
           </button>
        </div>
      </section>
    </div>
  );
}
