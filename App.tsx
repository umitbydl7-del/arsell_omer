import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Instagram, Twitter, Linkedin, MessageCircleQuestion } from 'lucide-react';
import { GridBackground } from './components/GridBackground';
import { Button } from './components/Button';
import { LandingView } from './components/LandingView';
import { WizardView } from './components/WizardView';
import { ViewState } from './types';

export default function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Arsell - AI ile E-Ticaret Mağazanızı Kurun";
  }, []);

  const startWizard = () => {
    setIsLoading(true);
    setTimeout(() => { 
      setIsLoading(false); 
      setView('wizard'); 
      window.scrollTo(0,0); 
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#020204] font-sans text-white selection:bg-blue-500/30 overflow-x-hidden flex flex-col">
      <GridBackground />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 border-b border-white/[0.06] bg-[#020204]/80 backdrop-blur-xl transition-all">
        <div className="w-full flex justify-between items-center max-w-[1500px] mx-auto">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setView('landing')}>
            <img src="https://i.hizliresim.com/klqit57.png" alt="Arsell Logo" className="h-8 w-auto object-contain transition-transform group-hover:scale-105" />
          </div>
          
          {view === 'landing' && (
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
               <a href="#features" className="hover:text-white transition-colors relative group">
                 Özellikler
                 <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
               </a>
               <a href="#how-it-works" className="hover:text-white transition-colors relative group">
                 Nasıl Çalışır?
                 <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
               </a>
               <a href="#faq" className="hover:text-white transition-colors relative group">
                 SSS
                 <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
               </a>
               <a href="#contact" className="hover:text-white transition-colors relative group">
                 İletişim
                 <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
               </a>
            </div>
          )}

          <div className="flex items-center gap-4">
             {view === 'landing' ? (
               <Button onClick={startWizard}>Mağazamı Kur <ArrowRight size={16} /></Button>
             ) : (
               <button onClick={() => setView('landing')} className="text-gray-400 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors">
                 <ArrowLeft size={16} /> Çıkış
               </button>
             )}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="flex-1 pt-24 pb-12 px-4 md:px-8 relative z-10">
          <div className="w-full min-h-[80vh] flex flex-col items-center">
            {isLoading ? (
               <div className="flex-1 flex items-center justify-center">
                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
               </div>
            ) : (
               <>
                 {view === 'landing' && <LandingView onStart={startWizard} />}
                 {view === 'wizard' && <WizardView onBackToLanding={() => setView('landing')} />}
               </>
            )}
          </div>
      </div>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10 py-16 px-6 bg-[#020204] relative z-10">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4">
             <img src="https://i.hizliresim.com/klqit57.png" alt="Arsell" className="h-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
             <p className="text-xs text-gray-500 max-w-xs leading-relaxed">Arsell, e-ticaret girişimcileri için geliştirilmiş, yapay zeka destekli profesyonel bir mağaza kurulum platformudur.</p>
          </div>
          <div className="flex gap-16 text-sm text-gray-400">
             <div className="flex flex-col gap-4"><span className="text-white font-bold">Platform</span><a href="#how-it-works" className="hover:text-white">Nasıl Çalışır?</a><a href="#" className="hover:text-white">Fiyatlandırma</a></div>
             <div className="flex flex-col gap-4"><span className="text-white font-bold">Yasal</span><a href="#" className="hover:text-white">Gizlilik</a><a href="#" className="hover:text-white">Şartlar</a></div>
          </div>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all cursor-pointer"><Icon size={18}/></div>
            ))}
          </div>
        </div>
        <div className="max-w-[1500px] mx-auto mt-16 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 font-mono tracking-widest">© 2026 ARSELL INC. TÜM HAKLARI SAKLIDIR.</div>
      </footer>

      {/* FLOATING SUPPORT BUTTON */}
      <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up">
        <button className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all hover:scale-110 group">
          <MessageCircleQuestion size={24} />
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Canlı Destek</span>
        </button>
      </div>
    </div>
  );
}