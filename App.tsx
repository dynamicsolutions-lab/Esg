import React, { useState } from 'react';
import ExamInterface from './components/ExamInterface';
import ResultsDashboard from './components/ResultsDashboard';
import { ExamState } from './types';
import { EXAM_DURATION_MINUTES, QUESTIONS } from './constants';
import { ShieldCheck, Play, BarChart3 } from 'lucide-react';

const App: React.FC = () => {
  const [examState, setExamState] = useState<ExamState>({
    status: 'idle',
    currentQuestionIndex: 0,
    answers: {},
    markedForReview: [],
    timeRemaining: EXAM_DURATION_MINUTES * 60,
  });

  const startExam = () => {
    setExamState({
      status: 'running',
      currentQuestionIndex: 0,
      answers: {},
      markedForReview: [],
      timeRemaining: EXAM_DURATION_MINUTES * 60,
    });
  };

  const finishExam = (finalState: ExamState) => {
    setExamState(finalState);
  };

  const restartExam = () => {
    setExamState({
      status: 'idle',
      currentQuestionIndex: 0,
      answers: {},
      markedForReview: [],
      timeRemaining: EXAM_DURATION_MINUTES * 60,
    });
  };

  if (examState.status === 'running') {
    return <ExamInterface onFinish={finishExam} initialTimeRemaining={examState.timeRemaining} />;
  }

  if (examState.status === 'finished') {
    return <ResultsDashboard examState={examState} onRestart={restartExam} />;
  }

  // Welcome Screen
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center p-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-600 to-slate-800" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 z-0" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0" />

        <div className="max-w-2xl w-full z-10 text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-900 text-emerald-400 shadow-xl shadow-slate-900/20 mb-4">
            <ShieldCheck size={48} />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              ESG Pro Analyst <span className="text-emerald-600">Assessment</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
              Validate your ESG knowledge with our professional simulation. Covers GRI, SASB, TCFD, Climate Science, and Governance best practices.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={startExam}
              className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:scale-105"
            >
              Start Assessment
              <Play size={20} fill="currentColor" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-100 text-sm text-slate-500">
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-slate-900 text-lg">{QUESTIONS.length}</span>
              <span>Questions</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-slate-900 text-lg">{EXAM_DURATION_MINUTES}m</span>
              <span>Duration</span>
            </div>
             <div className="flex flex-col items-center gap-1">
              <BarChart3 size={24} className="text-emerald-500 mb-0.5" />
              <span>Analytics</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;