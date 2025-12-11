
import React, { useState } from 'react';
import BacteriaSelector from './components/BacteriaSelector';
import InfoPanel from './components/InfoPanel';
import QuizModule from './components/QuizModule';
import ClinicalCaseLibrary from './components/ClinicalCaseLibrary';
import AICaseGenerator from './components/AICaseGenerator';
import BacteriaChat from './components/BacteriaChat'; // Import for AI Tutor view
import AIQuizChallenge from './components/AIQuizChallenge'; // Import new component
import GeneralBacteriology from './components/GeneralBacteriology'; // Import General Bacteriology
import { BacteriaType, ClinicalCategory, ViewMode } from './types';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('THEORY');
  
  // Shared State for Theory and Tutor
  const [selectedCategory, setSelectedCategory] = useState<ClinicalCategory>('UPPER');
  const [selectedBacteria, setSelectedBacteria] = useState<BacteriaType | null>(null);

  const handleCategorySelect = (category: ClinicalCategory) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      setSelectedBacteria(null);
    }
  };

  const handleBacteriaSelect = (bacteria: BacteriaType) => {
    setSelectedBacteria(bacteria);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="bg-slate-900 text-white p-3 shadow-md z-20 flex justify-between items-center px-6">
        <div className="flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
           <h1 className="font-bold text-lg tracking-tight hidden md:block">MedCases</h1>
        </div>
        <div className="flex bg-slate-800 rounded-lg p-1 gap-1 overflow-x-auto">
          <button 
            onClick={() => setViewMode('GENERAL_BACTERIOLOGY')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1 ${viewMode === 'GENERAL_BACTERIOLOGY' ? 'bg-cyan-600 text-white shadow' : 'text-cyan-400 hover:text-white'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
            Bacteriologia Geral
          </button>
          <div className="w-px bg-slate-600 mx-1"></div>
          <button 
            onClick={() => setViewMode('THEORY')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${viewMode === 'THEORY' ? 'bg-slate-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Conteúdo Clínico
          </button>
          <button 
            onClick={() => setViewMode('CASE_LIBRARY')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${viewMode === 'CASE_LIBRARY' ? 'bg-slate-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Banco de Casos
          </button>
          <button 
            onClick={() => setViewMode('AI_GENERATOR')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1 ${viewMode === 'AI_GENERATOR' ? 'bg-purple-600 text-white shadow' : 'text-purple-400 hover:text-white'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM9 15.75a.75.75 0 01.721.544l.145.507a2.25 2.25 0 001.546 1.546l.507.145a.75.75 0 010 1.442l-.507.145a2.25 2.25 0 00-1.546 1.546l-.145.507a.75.75 0 01-1.442 0l-.145-.507a2.25 2.25 0 00-1.546-1.546l-.507-.145a.75.75 0 010-1.442l.507-.145a2.25 2.25 0 001.546-1.546l.145-.507A.75.75 0 019 15.75z" clipRule="evenodd" />
            </svg>
            Gerador IA
          </button>
           <button 
            onClick={() => setViewMode('AI_QUIZ')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1 ${viewMode === 'AI_QUIZ' ? 'bg-indigo-600 text-white shadow' : 'text-indigo-400 hover:text-white'}`}
          >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
            </svg>
            Desafio Global
          </button>
          <button 
            onClick={() => setViewMode('AI_TUTOR')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1 ${viewMode === 'AI_TUTOR' ? 'bg-teal-600 text-white shadow' : 'text-teal-400 hover:text-white'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-2.502a.75.75 0 01.432-.695l1.002-.429a3.209 3.209 0 001.78-2.902V10.25c0-1.046.399-2.022 1.095-2.79C8.396 7.6 6.839 8.1 5.46 8.854c-.194.106-.411.06-.563-.096a48.571 48.571 0 01-1.378-1.53.75.75 0 01-.137-.733 48.16 48.16 0 012.38-5.228 2.609 2.609 0 012.151-1.609z" />
              <path d="M12.596 9.696a.75.75 0 00-1.192 0l-4.186 6.13a.75.75 0 00.619 1.174h2.163v4.25a.75.75 0 001.292.53l4.186-6.13a.75.75 0 00-.619-1.174h-2.163V10.25a.75.75 0 00-.1-.377z" />
            </svg>
            Tutor IA
          </button>
          <button 
            onClick={() => setViewMode('QUIZ')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${viewMode === 'QUIZ' ? 'bg-slate-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Questionários
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      {viewMode === 'GENERAL_BACTERIOLOGY' && (
        <div className="flex-1 overflow-hidden">
          <GeneralBacteriology />
        </div>
      )}

      {viewMode === 'QUIZ' && (
        <div className="flex-1 overflow-hidden">
          <QuizModule />
        </div>
      )}

      {viewMode === 'CASE_LIBRARY' && (
        <div className="flex-1 overflow-hidden">
          <ClinicalCaseLibrary />
        </div>
      )}

      {viewMode === 'AI_GENERATOR' && (
        <div className="flex-1 overflow-hidden">
          <AICaseGenerator />
        </div>
      )}
      
      {viewMode === 'AI_QUIZ' && (
        <div className="flex-1 overflow-hidden flex flex-col">
          <AIQuizChallenge />
        </div>
      )}

      {(viewMode === 'THEORY' || viewMode === 'AI_TUTOR') && (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden transition-colors duration-500">
          <BacteriaSelector 
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            selectedBacteria={selectedBacteria} 
            onSelectBacteria={handleBacteriaSelect} 
          />

          <main className="flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar relative">
            {viewMode === 'THEORY' ? (
                // THEORY MODE CONTENT
                <div className="max-w-4xl mx-auto">
                  {!selectedBacteria ? (
                    <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-6 animate-fade-in text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 opacity-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                      <p className="text-lg font-medium">Selecione um tópico no menu lateral para estudar.</p>
                    </div>
                  ) : (
                    <div className="animate-fade-in">
                      <InfoPanel bacteria={selectedBacteria} />
                    </div>
                  )}
                </div>
            ) : (
                // AI TUTOR MODE CONTENT
                <div className="h-full flex flex-col">
                   <div className="bg-teal-50 border-b border-teal-200 p-6 mb-4 rounded-xl">
                      <h2 className="text-2xl font-bold text-teal-900 mb-1 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-2.502a.75.75 0 01.432-.695l1.002-.429a3.209 3.209 0 001.78-2.902V10.25c0-1.046.399-2.022 1.095-2.79C8.396 7.6 6.839 8.1 5.46 8.854c-.194.106-.411.06-.563-.096a48.571 48.571 0 01-1.378-1.53.75.75 0 01-.137-.733 48.16 48.16 0 012.38-5.228 2.609 2.609 0 012.151-1.609z" />
                          <path d="M12.596 9.696a.75.75 0 00-1.192 0l-4.186 6.13a.75.75 0 00.619 1.174h2.163v4.25a.75.75 0 001.292.53l4.186-6.13a.75.75 0 00-.619-1.174h-2.163V10.25a.75.75 0 00-.1-.377z" />
                        </svg>
                        Tutor Inteligente
                      </h2>
                      <p className="text-teal-700 text-sm">Selecione uma bactéria ao lado para iniciar uma sessão de tira-dúvidas com a IA.</p>
                   </div>
                   
                   {!selectedBacteria ? (
                      <div className="flex-1 flex items-center justify-center text-slate-400 flex-col gap-4">
                         <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                         </div>
                         <p>Aguardando seleção...</p>
                      </div>
                   ) : (
                      <BacteriaChat 
                        bacteria={selectedBacteria} 
                        className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
                      />
                   )}
                </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
};

export default App;