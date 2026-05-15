/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from '@/src/components/layout/Navbar';
import BottomNav from '@/src/components/layout/BottomNav';
import JualanBersamaHome from '@/src/components/features/JualanBersamaHome';
import ReferralStatus from '@/src/components/features/ReferralStatus';
import CommunityPage from '@/src/components/features/CommunityPage';
import SellerWelcome from '@/src/components/features/SellerWelcome';
import OnboardingForm from '@/src/components/features/OnboardingForm';
import { ViewState } from '@/src/types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  // Simulation of a deep-link from WhatsApp
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('ref')) {
      setCurrentView(ViewState.WELCOME);
    }
  }, []);

  const handleBack = () => {
    if (currentView === ViewState.STATUS) setCurrentView(ViewState.HOME);
    else if (currentView === ViewState.ONBOARDING) setCurrentView(ViewState.WELCOME);
    else if (currentView === ViewState.WELCOME) setCurrentView(ViewState.HOME);
    else if (currentView === ViewState.COMMUNITY) setCurrentView(ViewState.HOME);
  };

  const getNavbarTitle = () => {
    switch (currentView) {
      case ViewState.HOME: return 'JualanBersama';
      case ViewState.STATUS: return 'Status';
      case ViewState.COMMUNITY: return 'Komunitas';
      case ViewState.WELCOME: return 'Gabung';
      case ViewState.ONBOARDING: return 'Buka Toko';
      default: return 'PasarBersama';
    }
  };

  const handleShare = () => {
    const text = encodeURIComponent(
      "Ajak Teman Jualan Online, Tumbuh Bersama! Daftar lewat link ini buat dapet bonus modal jualan: " + 
      window.location.origin + "?ref=VIP"
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
    alert('Link undangan berhasil dibuka di WhatsApp!');
  };

  const showBottomNav = [ViewState.HOME, ViewState.STATUS, ViewState.COMMUNITY].includes(currentView);

  return (
    <div className="h-[100dvh] bg-[#FAFAFA] font-sans max-w-md mx-auto shadow-2xl relative flex flex-col overflow-hidden">
      {currentView !== ViewState.HOME && (
        <Navbar 
          title={getNavbarTitle()} 
          onBack={(!showBottomNav && currentView !== ViewState.HOME) ? handleBack : undefined}
          showHelp={false}
          showLogo={false}
        />
      )}
      
      <main className="flex-1 overflow-y-auto custom-scrollbar relative">
        <div className="relative">
          {currentView === ViewState.HOME && (
          <JualanBersamaHome 
            onNavigate={setCurrentView} 
            onShare={handleShare} 
          />
        )}
        
        {currentView === ViewState.STATUS && (
          <ReferralStatus />
        )}

        {currentView === ViewState.COMMUNITY && (
          <CommunityPage />
        )}

        {currentView === ViewState.WELCOME && (
          <SellerWelcome 
            onStart={() => setCurrentView(ViewState.ONBOARDING)} 
          />
        )}

        {currentView === ViewState.ONBOARDING && (
          <OnboardingForm 
            onComplete={() => {
              alert('Pendaftaran Berhasil! Kami akan menghubungi Anda di WhatsApp.');
              setCurrentView(ViewState.HOME);
            }} 
          />
        )}
        </div>
      </main>

      {showBottomNav && (
        <BottomNav 
          currentView={currentView} 
          onNavigate={setCurrentView} 
        />
      )}
    </div>
  );
}

