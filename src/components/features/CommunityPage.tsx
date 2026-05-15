import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, MessageSquare, Quote, Heart, ArrowUpRight, Crown, Medal } from 'lucide-react';

const SUCCESS_STORIES = [
  {
    name: 'Bu Rini',
    city: 'Malang',
    story: 'Berkat JualanBersama, saya bisa bantu 5 tetangga buka toko keripik tempe online. Sekarang kami kirim paket setiap hari!',
    total: 5,
    tag: 'Fashion & Food',
    likes: 24,
    avatarColor: '#FF6B00',
  },
  {
    name: 'Pak Budi',
    city: 'Garut',
    story: 'Dulu jualan baju cuma di pasar. Sekarang teman-teman sesama pedagang saya ajak ke PasarBersama, omzet naik 3x lipat.',
    total: 12,
    tag: 'Batik & Tenun',
    likes: 41,
    avatarColor: '#3B82F6',
  },
  {
    name: 'Mbak Sari',
    city: 'Bandung',
    story: 'Mulai dari jualan kue di WhatsApp, sekarang bisa buka toko online dan ajak 3 teman jualan bareng. Semua untung!',
    total: 3,
    tag: 'Kuliner',
    likes: 18,
    avatarColor: '#10B981',
  },
];

const LEADERBOARD = [
  { rank: 1, name: 'Pak Budi', city: 'Garut', count: 12, bonus: '300rb' },
  { rank: 2, name: 'Bu Sari',  city: 'Bandung', count: 9, bonus: '225rb' },
  { rank: 3, name: 'Mas Eko',  city: 'Surabaya', count: 7, bonus: '175rb' },
  { rank: 4, name: 'Bu Rina',  city: 'Malang', count: 5, bonus: '100rb' },
  { rank: 5, name: 'Pak Agus', city: 'Semarang', count: 4, bonus: '80rb' },
];

const RANK_COLORS = ['#F59E0B', '#9CA3AF', '#CD7F32', '#6B7280', '#6B7280'];

export default function CommunityPage() {
  const [tab, setTab] = useState<'stories' | 'leaderboard'>('stories');

  return (
    <div className="bg-[#F5F5F7] min-h-full animate-in slide-in-from-bottom duration-300">

      {/* Community Stats Card — dark gradient */}
      <div className="px-4 pt-4 pb-3">
        <div
          className="rounded-[28px] p-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 60%, #0F3460 100%)' }}
        >
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-36 h-36 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 opacity-80">
              <Trophy size={13} className="text-yellow-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-300">Pencapaian Komunitas</span>
            </div>
            <div className="text-[44px] font-[900] tracking-tighter leading-none text-white">10.240</div>
            <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wide mt-1.5">Seller baru terbantu bulan ini ✨</p>

            <div className="mt-5 pt-5 border-t border-white/5 grid grid-cols-3 gap-2">
              {[
                { value: 'Rp 500jt', label: 'Bonus Cair' },
                { value: '98%',      label: 'Seller Aktif' },
                { value: '4.8★',     label: 'Rating App' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-[18px] font-[900] tracking-tighter text-white">{s.value}</div>
                  <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab switcher — Tokopedia style pill */}
      <div className="px-4 pb-3">
        <div className="bg-white rounded-[18px] p-1.5 flex gap-1 shadow-sm">
          {(['stories', 'leaderboard'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-[14px] text-[12px] font-black transition-all ${
                tab === t ? 'bg-orange-500 text-white shadow-md shadow-orange-200' : 'text-gray-400'
              }`}
            >
              {t === 'stories' ? 'Cerita Sukses' : '🏆 Papan Skor'}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">

        {/* Stories Tab */}
        {tab === 'stories' && (
          <motion.div
            key="stories"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="px-4 space-y-4 pb-4"
          >
            {SUCCESS_STORIES.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-6 rounded-[24px] relative shadow-sm"
              >
                <Quote className="absolute top-5 right-5 opacity-[0.04]" size={52} color="#000" />

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-[16px] flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                    style={{ backgroundColor: story.avatarColor }}
                  >
                    {story.name[0]}
                  </div>
                  <div>
                    <div className="text-[14px] font-black text-gray-900">{story.name}</div>
                    <div className="text-[10px] text-gray-400">{story.city} · {story.tag}</div>
                  </div>
                </div>

                <p className="text-[13px] text-gray-600 leading-[1.7] mb-4">
                  "{story.story}"
                </p>

                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                  <button className="flex items-center gap-2 text-pink-500 active:scale-95 transition-all">
                    <Heart size={14} fill="currentColor" />
                    <span className="text-[11px] font-black">{story.likes} Suka</span>
                  </button>
                  <div className="bg-orange-50 px-3 py-1.5 rounded-full">
                    <span className="text-[10px] font-black text-orange-600">{story.total} Teman Diajak</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Leaderboard Tab */}
        {tab === 'leaderboard' && (
          <motion.div
            key="leaderboard"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="px-4 pb-4"
          >
            {/* Top 3 podium */}
            <div className="flex items-end justify-center gap-3 mb-5 pt-2">
              {[LEADERBOARD[1], LEADERBOARD[0], LEADERBOARD[2]].map((item, pos) => {
                const heights = ['h-20', 'h-28', 'h-16'];
                const isFirst = pos === 1;
                return (
                  <div key={item.rank} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-base border-4 border-white shadow-lg"
                      style={{ backgroundColor: RANK_COLORS[item.rank - 1] }}
                    >
                      {item.name[0]}
                    </div>
                    {isFirst && <Crown size={16} className="text-yellow-500 -mb-1" />}
                    <div className="text-[10px] font-black text-gray-700 text-center">{item.name}</div>
                    <div
                      className={`w-full ${heights[pos]} rounded-t-[12px] flex items-end justify-center pb-2`}
                      style={{ backgroundColor: RANK_COLORS[item.rank - 1] + '20', borderBottom: `3px solid ${RANK_COLORS[item.rank - 1]}` }}
                    >
                      <span className="text-[11px] font-black" style={{ color: RANK_COLORS[item.rank - 1] }}>#{item.rank}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Full list */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-sm">
              {LEADERBOARD.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07 }}
                  className={`flex items-center gap-4 px-5 py-4 ${idx < LEADERBOARD.length - 1 ? 'border-b border-gray-50' : ''}`}
                >
                  <div
                    className="w-9 h-9 rounded-[12px] flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: RANK_COLORS[idx] + '20' }}
                  >
                    {idx === 0 ? <Crown size={18} color={RANK_COLORS[0]} /> :
                     idx <= 2  ? <Medal size={18} color={RANK_COLORS[idx]} /> :
                     <span className="text-[12px] font-black text-gray-400">#{item.rank}</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-[14px] text-gray-900">{item.name}</div>
                    <div className="text-[10px] text-gray-400">{item.city}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] font-black text-gray-900">{item.count} toko</div>
                    <div className="text-[10px] font-bold text-orange-500">+Rp {item.bonus}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* WhatsApp Group CTA */}
      <div className="px-4 pb-8">
        <div className="bg-green-50 border border-green-100 rounded-[20px] p-4 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-green-500 rounded-[16px] flex items-center justify-center flex-shrink-0 shadow-md shadow-green-200">
            <MessageSquare size={20} color="white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-black text-gray-900 text-[13px]">Gabung Grup WhatsApp</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">Tips & trik jualan bareng seller sukses.</p>
          </div>
          <button className="bg-green-500 text-white p-2.5 rounded-[12px] active:scale-90 transition-all shadow-md shadow-green-200">
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
