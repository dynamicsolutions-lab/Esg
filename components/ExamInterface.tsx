import React, { useState, useEffect } from 'react';
import { Question, ExamState } from '../types';
import { QUESTIONS } from '../constants';
import { Clock, Flag, ChevronRight, ChevronLeft, AlertCircle } from 'lucide-react';

interface ExamInterfaceProps {
  onFinish: (finalState: ExamState) => void;
  initialTimeRemaining: number;
}

const ExamInterface: React.FC<ExamInterfaceProps> = ({ onFinish, initialTimeRemaining }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [markedForReview, setMarkedForReview] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(initialTimeRemaining);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const toggleFlag = () => {
    setMarkedForReview((prev) => {
      if (prev.includes(currentQuestion.id)) {
        return prev.filter((id) => id !== currentQuestion.id);
      }
      return [...prev, currentQuestion.id];
    });
  };

  const handleFinish = () => {
    onFinish({
      status: 'finished',
      currentQuestionIndex,
      answers,
      markedForReview,
      timeRemaining,
    });
  };

  const calculateProgress = () => {
    const answeredCount = Object.keys(answers).length;
    return (answeredCount / QUESTIONS.length) * 100;
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-slate-800">ESG Analyst Simulation</h1>
            <span className="text-xs text-slate-500 uppercase tracking-wider">Question {currentQuestionIndex + 1} of {QUESTIONS.length}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
           {/* Progress Bar */}
           <div className="hidden md:flex flex-col w-48">
            <div className="flex justify-between text-xs mb-1 text-slate-500">
              <span>Progress</span>
              <span>{Math.round(calculateProgress())}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-300 ease-out"
                style={{ width: `${calculateProgress()}%` }}
              />
            </div>
          </div>

          <div className={`flex items-center gap-2 font-mono text-lg font-medium px-4 py-2 rounded-md ${timeRemaining < 300 ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-700'}`}>
            <Clock size={20} />
            {formatTime(timeRemaining)}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 flex justify-center">
        <div className="w-full max-w-3xl">
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-10 mb-6 relative">
            
            {/* Category Tag */}
            <div className="absolute top-0 right-0 mt-6 mr-6">
               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                  {currentQuestion.category}
               </span>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold leading-relaxed mb-8 pr-12">
              {currentQuestion.text}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 group relative
                      ${isSelected 
                        ? 'border-emerald-500 bg-emerald-50/30' 
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors
                        ${isSelected
                          ? 'border-emerald-500 bg-emerald-500 text-white'
                          : 'border-slate-300 text-slate-500 group-hover:border-slate-400'
                        }
                      `}>
                        {option.id}
                      </div>
                      <span className={`text-base pt-1 ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>
                        {option.text}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between">
             <button
              onClick={toggleFlag}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                ${markedForReview.includes(currentQuestion.id) 
                  ? 'text-amber-600 bg-amber-50 hover:bg-amber-100' 
                  : 'text-slate-500 hover:bg-slate-100'
                }`}
            >
              <Flag size={18} fill={markedForReview.includes(currentQuestion.id) ? "currentColor" : "none"} />
              <span className="text-sm font-medium">{markedForReview.includes(currentQuestion.id) ? 'Marked for Review' : 'Mark for Review'}</span>
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-slate-600 font-medium hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={20} />
                Previous
              </button>
              
              {!isLastQuestion ? (
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(QUESTIONS.length - 1, prev + 1))}
                  className="flex items-center gap-2 px-8 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10"
                >
                  Next Question
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="flex items-center gap-2 px-8 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20"
                >
                  Submit Exam
                  <AlertCircle size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Review Strip (Desktop) */}
      <div className="hidden md:flex bg-white border-t border-slate-200 h-16 items-center px-8 gap-2 overflow-x-auto">
        <span className="text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wide">Navigator</span>
        {QUESTIONS.map((q, idx) => (
          <button
            key={q.id}
            onClick={() => setCurrentQuestionIndex(idx)}
            className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-all
              ${currentQuestionIndex === idx ? 'ring-2 ring-slate-900 ring-offset-2' : ''}
              ${markedForReview.includes(q.id) 
                ? 'bg-amber-100 text-amber-700 border border-amber-300' 
                : answers[q.id] 
                  ? 'bg-slate-800 text-white' 
                  : 'bg-slate-100 text-slate-400 border border-slate-200 hover:border-slate-300'
              }
            `}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExamInterface;